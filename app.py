from flask import Flask, request, jsonify
import razorpay
import random, string
from pymongo import MongoClient
import os
from urllib.parse import quote_plus

app = Flask(__name__)

# Razorpay credentials
RAZORPAY_KEY = "your_key_id"
RAZORPAY_SECRET = "your_key_secret"
razorpay_client = razorpay.Client(auth=(RAZORPAY_KEY, RAZORPAY_SECRET))

# MongoDB
username = "sarvagra"
password = quote_plus("your_actual_password_here")  # URL-encoded
uri = f"mongodb+srv://{username}:{password}@sarvagra.7ppi9.mongodb.net/?retryWrites=true&w=majority&appName=sarvagra"

client = MongoClient(uri)
db = client["udaan"]  # your database name
tickets = db["tickets"]  # your collection name

db = client.udaan
tickets = db.tickets

def generate_ticket_id():
    return ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))

@app.route("/create_order", methods=["POST"])
def create_order():
    data = request.json
    amount = 100  # Razorpay uses paise
    order = razorpay_client.order.create(dict(
        amount=amount,
        currency="INR",
        payment_capture="1"
    ))
    return jsonify(order_id=order['id'], amount=amount)

@app.route("/verify_payment", methods=["POST"])
def verify_payment():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    phone = data.get("phone")
    payment_id = data.get("razorpay_payment_id")
    order_id = data.get("razorpay_order_id")
    signature = data.get("razorpay_signature")

    try:
        # Verify signature
        params_dict = {
            'razorpay_order_id': order_id,
            'razorpay_payment_id': payment_id,
            'razorpay_signature': signature
        }
        razorpay_client.utility.verify_payment_signature(params_dict)

        ticket_id = generate_ticket_id()
        tickets.insert_one({
            "name": name,
            "email": email,
            "phone": phone,
            "ticket_id": ticket_id,
            "payment_id": payment_id,
            "order_id": order_id
        })

        return jsonify(status="success", ticket_id=ticket_id)

    except razorpay.errors.SignatureVerificationError:
        return jsonify(status="failure", message="Signature verification failed."), 400

if __name__ == "__main__":
    app.run(debug=True)
