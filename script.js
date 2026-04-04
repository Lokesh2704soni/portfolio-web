window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.style.background = "#020617";  // dark color
        navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.8)";
        navbar.style.boxShadow = "none";
    }
});

const texts = ["Full Stack Developer", "Software Engineer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const speed = 100;      // typing speed
const eraseSpeed = 50;  // deleting speed
const delay = 1500;     // wait before deleting

function typeEffect() {
    const currentText = texts[textIndex];
    const display = document.getElementById("changing-text");

    if (!isDeleting) {
        display.textContent = currentText.substring(0, charIndex++);
        
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delay);
            return;
        }
    } else {
        display.textContent = currentText.substring(0, charIndex--);
        
        if (charIndex < 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? eraseSpeed : speed);
}

// start animation
typeEffect();


// open popup
function contactChoice() {
    document.getElementById("contact-popup").style.display = "flex";
}

// close popup
function closePopup() {
    document.getElementById("contact-popup").style.display = "none";
}

// call
function makeCall() {
    window.location.href = "tel:+911234567890";
}

// whatsapp
function openWhatsApp() {
    window.open("https://wa.me/911234567890", "_blank");
}

// click outside close
window.onclick = function(e) {
    let popup = document.getElementById("contact-popup");
    if (e.target === popup) {
        popup.style.display = "none";
    }
}