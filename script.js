/* Cursor Animation */
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

/* Typing Effect */
const texts = ["Systems Engineer", "Backend Developer", "Algorithm Optimizer", "Open Source Contributor"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typeSpeed = 100;
const eraseSpeed = 50;
const delay = 2000;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    // Type Letter
    letter = currentText.slice(0, ++index);
    document.querySelector('.typed-text').textContent = letter;

    if (letter.length === currentText.length) {
        // Pause before erasing
        setTimeout(erase, delay);
    } else {
        setTimeout(type, typeSpeed);
    }
}

function erase() {
    // Erase Letter
    letter = currentText.slice(0, --index);
    document.querySelector('.typed-text').textContent = letter;

    if (letter.length === 0) {
        count++;
        setTimeout(type, 500);
    } else {
        setTimeout(erase, eraseSpeed);
    }
}

document.addEventListener('DOMContentLoaded', type);

/* Mobile Menu */
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
}));

/* Scroll Sections Active Link */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let target = document.querySelector('header nav a[href*=' + id + ']');
                if (target) target.classList.add('active');
            });
        }
    });

    /* Sticky Header */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};

/* Scroll Reveal Animation */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.section');
hiddenElements.forEach((el) => observer.observe(el));
