/* =========================================================
   MPOFU CONSTRUCTION — MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   NAVIGATION BACKGROUND
========================================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================================
   CLOSE MOBILE NAVIGATION AFTER CLICKING A LINK
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   DEMO QUOTE FORM
========================================================= */

const quoteForm = document.getElementById("quoteForm");

quoteForm.addEventListener("submit", event => {

    event.preventDefault();

    alert(
        "Thank you. Your quote request has been received. " +
        "The contact form will be connected to Mpofu Construction's " +
        "real contact system once the final business details are available."
    );

    quoteForm.reset();

});