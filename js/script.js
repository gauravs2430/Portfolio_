// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Animate skill bars when scrolling to skills section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = document.querySelectorAll('.skill-bar');
                skillBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.getElementById('skills'));

    // Create floating blobs
    createBlobs();

    // Initialize typing animation
    initTypingAnimation();

    // Initialize AOS
    AOS.init();
});

function createBlobs() {
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    const blob1 = document.createElement('div');
    blob1.className = 'blob blob-1';
    blob1.style.top = '20%';
    blob1.style.left = '10%';

    const blob2 = document.createElement('div');
    blob2.className = 'blob blob-2';
    blob2.style.top = '60%';
    blob2.style.right = '15%';

    const blob3 = document.createElement('div');
    blob3.className = 'blob blob-3';
    blob3.style.bottom = '20%';
    blob3.style.left = '30%';

    heroSection.appendChild(blob1);
    heroSection.appendChild(blob2);
    heroSection.appendChild(blob3);
}

function initTypingAnimation() {
    const roles = ["Full-Stack Developer", "Open Source Contributor", "Tech Explorer"];
    const roleElement = document.querySelector('.typing-text');
    if (!roleElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1500; // pause at end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // pause before typing next
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}




// 2
// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all animations
    initMobileMenu();
    initSkillAnimations();
    createCelestialElements();
    initTypewriterEffect();
    initAOS();
    initParallaxEffects();
    initGSAPAnimations();
});

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        gsap.from(mobileMenu, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

function initSkillAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                gsap.from(skillBar, {
                    width: '0%',
                    duration: 1.5,
                    ease: "power3.out",
                    onComplete: function () {
                        skillBar.style.width = width;
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

function createCelestialElements() {
    // Create floating stars
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        for (let i = 0; i < 15; i++) {
            const star = document.createElement('div');
            star.className = 'celestial-star';

            const size = Math.random() * 3 + 1;
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            const opacity = Math.random() * 0.7 + 0.3;
            const duration = Math.random() * 10 + 5;
            const delay = Math.random() * 5;

            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.left = `${posX}%`;
            star.style.top = `${posY}%`;
            star.style.opacity = opacity;
            star.style.animation = `twinkle ${duration}s infinite ${delay}s`;
            star.style.background = 'white';
            star.style.borderRadius = '50%';
            star.style.position = 'absolute';
            star.style.pointerEvents = 'none';
            star.style.zIndex = '1';

            section.appendChild(star);
        }
    });
}

function initTypewriterEffect() {
    const roles = ["Full-Stack Developer", "Open Source Contributor", "Tech Explorer"];
    const roleElement = document.querySelector('.typing-text');
    if (!roleElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    setTimeout(type, 1000);
}

function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out-quad',
        once: true,
        mirror: false
    });
}

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
            gsap.to(el, {
                x: x * speed,
                y: y * speed,
                duration: 1.5,
                ease: "power2.out"
            });
        });
    });
}

function initGSAPAnimations() {
    // Animate nav entrance
    gsap.from("nav", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Animate hero content
    gsap.from("#home h1", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)"
    });

    gsap.from("#home .typing-container", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "back.out(1.7)"
    });

    gsap.from("#home p", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.9,
        ease: "back.out(1.7)"
    });

    gsap.from("#home .flex", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 1.2,
        ease: "back.out(1.7)"
    });

    // Add scroll animations
    // In your script.js, replace the scroll handler with this:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80 // Adjust for fixed header height
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });
}