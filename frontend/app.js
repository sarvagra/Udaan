document.addEventListener("DOMContentLoaded", () => {
    const homeBtn = document.getElementById("home-btn");
    const eventsBtn = document.getElementById("events-btn");
    const aboutBtn = document.getElementById("about-btn");
    const contactBtn = document.getElementById("contact-btn");
    
    if (homeBtn) {
        homeBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    if (eventsBtn) {
        eventsBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 3250,
                behavior: 'smooth'
            });
        });
    }

    if (aboutBtn) {
        aboutBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 1000,
                behavior: 'smooth'
            });
        });
    }

    if (contactBtn) {
        contactBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 7000,
                behavior: 'smooth'
            });
        });
    }
});
