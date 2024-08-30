// Typed.js Configuration
var typed = new Typed('.typed-text', {
    strings: ['a Software Developer.', 'a Frontend Developer.', 'a Python Developer.'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
});
