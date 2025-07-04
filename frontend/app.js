const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');
const movieList = ['res/hero-1.webm', 'res/hero-2.mp4'];
let index = 0;
nextButton.addEventListener('click', function() {
	index += 1;
	if (index === movieList.length) {
		index = 0;
	}
	video.src = movieList[index];
});


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
