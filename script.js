
/* =================================
   A LITTLE PAGE — JAVASCRIPT
================================= */

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
});


// CLOSE MENU WHEN A LINK IS CLICKED

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});


revealElements.forEach(element => {
    observer.observe(element);
});


// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// FALLBACK FOR OLDER BROWSERS

if (!("IntersectionObserver" in window)) {
    revealElements.forEach(element => {
        element.classList.add("visible");
    });
}
