document.addEventListener("DOMContentLoaded", () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            // Use requestAnimationFrame to wait for layout
            requestAnimationFrame(() => {
                setTimeout(() => {
                    section.scrollIntoView({ behavior: "smooth" });
                }, 100); // Adjust timeout if still glitchy
            });
        }
    };

    document.getElementById("home-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("home-section");
    });

    document.getElementById("about-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("about-section")
    });

    document.getElementById("events-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("contact-section");
    });
});

/*
document.getElementById('share-btn').addEventListener('click', function(e) {
    e.preventDefault();
    navigator.clipboard.writeText('https://udaan-io.netlify.app/#').then(function() {
        const popup = document.getElementById('share-popup');
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 1500);
    });
}); */
const shareBtn = document.getElementById('share-btn');
  const sharePopup = document.getElementById('share-popup');

  shareBtn.addEventListener('click', () => {
    // Copy link to clipboard (optional)
    navigator.clipboard.writeText("https://udaan-io.netlify.app/");

    // Show popup
    sharePopup.classList.add('show');

    // Hide after 2 seconds
    setTimeout(() => {
      sharePopup.classList.remove('show');
    }, 2000);
  });

                
//payment script
document.getElementById("payBtn").addEventListener("click", async function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!name || !email || !phone) {
        alert("Please fill all fields.");
        return;
    }

    // Create order from backend
    const response = await fetch("/create_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
    });

    const data = await response.json();

    const options = {
        key: "RAZORPAY_KEY_ID", // Replace with real key
        amount: data.amount,
        currency: "INR",
        name: "Udaan 2025",
        description: "Freshers Ticket",
        order_id: data.order_id,
        handler: function (response) {
            // Call backend to verify and store
            fetch("/verify_payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...response,
                    name,
                    email,
                    phone
                })
            }).then(res => res.json()).then(result => {
                alert("Payment Successful! Your Ticket ID: " + result.ticket_id);
            });
        },
        prefill: { name, email, contact: phone },
        theme: { color: "#3399cc" }
    };

    const rzp = new Razorpay(options);
    rzp.open();
});


// vid script
const video = document.getElementById("slow");
    video.playbackRate = 0.8; // 1 = normal, 1.5 = 1.5x speed


    const openModalBtn = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const closeModalBtn = document.getElementById('closeModal');

    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    });

    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
      if (!modalContent.contains(e.target)) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
      }
    });