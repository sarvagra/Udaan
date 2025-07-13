// make this website only phone-accessible
window.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 768) {
    document.body.innerHTML = `
      <h1 style="text-align:center; margin-top:20vh;">
        This website is only available on mobile devices.
      </h1>
    `;
    document.body.style.backgroundColor = "#f8f8f8";
  }
});


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