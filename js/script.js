
// BACK TO TOP BUTTON

const backToTop = document.getElementById("backToTop");

// Show button when scrolling
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Scroll to top when clicked
backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* ==========================
   Animated Counter
========================== */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");
        let count = 0;

        const updateCounter = () => {

            const increment = Math.ceil(target / 50);

            if (count < target) {
                count += increment;

                if (count > target) {
                    count = target;
                }

                counter.innerText = count;

                setTimeout(updateCounter, 40);
            } else {
                counter.innerText = target;
            }

        };

        updateCounter();

    });

};

const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        startCounters();

        observer.disconnect();

    }

});

observer.observe(aboutSection);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}
/* ==========================
   LIGHTBOX
========================== */

const portfolioImages = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

if (portfolioImages.length && lightbox && lightboxImg && closeLightbox) {

    portfolioImages.forEach((img) => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    closeLightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}
/* ==========================
   PRELOADER
========================== */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if(preloader){

        preloader.style.opacity = "0";

        setTimeout(() => {

            preloader.style.display = "none";

        }, 600);

    }

});
const fadeElements = document.querySelectorAll("section");

const reveal = () => {

    fadeElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            element.classList.add("show");

        }

    });

};

fadeElements.forEach(section=>{

    section.classList.add("fade-up");

});

window.addEventListener("scroll", reveal);

reveal();

/* ==========================
   QUOTE POPUP
========================== */

const quoteBtn = document.querySelector(".quote-btn");
const quoteModal = document.getElementById("quoteModal");
const closeQuote = document.querySelector(".close-quote");

if (quoteBtn && quoteModal && closeQuote) {

    quoteBtn.addEventListener("click", function (e) {
        e.preventDefault();
        quoteModal.style.display = "flex";
    });

    closeQuote.addEventListener("click", function () {
        quoteModal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
        if (e.target === quoteModal) {
            quoteModal.style.display = "none";
        }
    });

}
/* ==========================
   CONTACT FORM (EMAILJS)
========================== */

emailjs.init({
    publicKey: "NeBuQ042OI37fKkmu"
});

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_tk53mb9",
            "template_h1u7vsy",
            this
        ).then(() => {

            document.getElementById("successPopup").classList.add("show");

            form.reset();

        }).catch((error) => {

            console.error(error);
            alert("❌ Message failed to send.");

        });

    });

}

function closePopup() {

    document.getElementById("successPopup").classList.remove("show");

}
