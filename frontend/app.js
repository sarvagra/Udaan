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

    document.getElementById("events-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("event-section")
    });

    document.getElementById("about-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("about-section");
    });

    document.getElementById("contact-btn")?.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("contact-section");
    });
});
