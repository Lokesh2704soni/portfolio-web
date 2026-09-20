/* =====================================================
   PORTFOLIO WEBSITE - COMPLETE JAVASCRIPT
   ===================================================== */


/* =====================================================
   1. NAVBAR SCROLL EFFECT
   ===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

});


/* =====================================================
   2. MOBILE NAVBAR MENU
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        const icon = menuBtn.querySelector("i");

        if (icon) {

            if (navLinks.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }

    });


    /* Close menu after clicking a link */

    const navItems =
        document.querySelectorAll(".nav-links a");

    navItems.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

            const icon =
                menuBtn.querySelector("i");

            if (icon) {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =====================================================
   3. TYPING EFFECT
   ===================================================== */

const texts = [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 100;
const deletingSpeed = 50;
const pauseTime = 1500;


function typeEffect() {

    const display =
        document.getElementById("changing-text");

    if (!display) {
        return;
    }

    const currentText =
        texts[textIndex];


    /* Typing */

    if (!isDeleting) {

        display.textContent =
            currentText.substring(0, charIndex);

        charIndex++;


        /* Text complete */

        if (charIndex > currentText.length) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                pauseTime
            );

            return;

        }

    }


    /* Deleting */

    else {

        display.textContent =
            currentText.substring(0, charIndex);

        charIndex--;


        /* Text completely deleted */

        if (charIndex < 0) {

            isDeleting = false;

            textIndex =
                (textIndex + 1) % texts.length;

            charIndex = 0;

        }

    }


    setTimeout(
        typeEffect,
        isDeleting
            ? deletingSpeed
            : typingSpeed
    );

}


/* Start typing */

typeEffect();


/* =====================================================
   4. SKILLS ACCORDION
   ===================================================== */

/*
   Technical Skills
   Tech Tools
   AI Tools
   Soft Skills

   Click on any category to open it.
*/


document.addEventListener(
    "DOMContentLoaded",
    function () {

        const skillCategories =
            document.querySelectorAll(
                ".skill-category"
            );


        skillCategories.forEach(
            function (category) {

                const header =
                    category.querySelector(
                        ".skill-category-header"
                    );


                if (!header) {
                    return;
                }


                header.addEventListener(
                    "click",
                    function () {


                        /* ---------------------------------
                           Close all other categories
                           --------------------------------- */

                        skillCategories.forEach(
                            function (otherCategory) {

                                if (
                                    otherCategory !==
                                    category
                                ) {

                                    otherCategory.classList
                                        .remove("active");

                                }

                            }
                        );


                        /* ---------------------------------
                           Open / Close clicked category
                           --------------------------------- */

                        category.classList.toggle(
                            "active"
                        );

                    }
                );

            }
        );

    }
);


/* =====================================================
   5. SCROLL REVEAL ANIMATION
   ===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList
                                .add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        function (element) {

            revealObserver.observe(
                element
            );

        }
    );

}


/* =====================================================
   6. ACTIVE NAVIGATION LINK
   ===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;

                const sectionHeight =
                    section.offsetHeight;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const linkSection =
                    link.getAttribute(
                        "href"
                    );


                if (
                    linkSection ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =====================================================
   7. CONTACT POPUP
   ===================================================== */


function contactChoice() {

    const popup =
        document.getElementById(
            "contact-popup"
        );


    if (!popup) {
        return;
    }


    popup.style.display = "flex";

    document.body.style.overflow =
        "hidden";

}


function closePopup() {

    const popup =
        document.getElementById(
            "contact-popup"
        );


    if (!popup) {
        return;
    }


    popup.style.display = "none";

    document.body.style.overflow =
        "auto";

}


/* =====================================================
   8. PHONE CALL
   ===================================================== */

function makeCall() {

    window.location.href =
        "tel:+919257004958";

}


/* =====================================================
   9. WHATSAPP
   ===================================================== */

function openWhatsApp() {

    window.open(
        "https://wa.me/919257004958",
        "_blank"
    );

}


/* =====================================================
   10. CLOSE POPUP BY CLICKING OUTSIDE
   ===================================================== */

window.addEventListener(
    "click",
    function (event) {

        const popup =
            document.getElementById(
                "contact-popup"
            );


        if (
            popup &&
            event.target === popup
        ) {

            closePopup();

        }

    }
);


/* =====================================================
   11. CLOSE POPUP WITH ESC KEY
   ===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closePopup();

        }

    }
);


/* =====================================================
   12. CURRENT YEAR IN FOOTER
   ===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =====================================================
   END OF JAVASCRIPT
   ===================================================== */