document.addEventListener('DOMContentLoaded', function () {
    // Initialize all logic
    initMobileMenu();
    createCelestialElements();
    initTypewriterEffect();
    initParallaxEffects();
    
    // New setup
    setupSmoothScrollAndNav();
    setupSectionReveals();

    // Initial hero load animations since it's above fold
    initHeroAnimations();
});

function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        if(!mobileMenu.classList.contains('hidden')){
            gsap.from(mobileMenu, { opacity: 0, y: -20, duration: 0.3, ease: "power2.out" });
        }
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); });
    });
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

function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 45;
        const y = (window.innerHeight / 2 - e.pageY) / 45;
        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
            gsap.to(el, { x: x * speed, y: y * speed, duration: 1.5, ease: "power2.out" });
        });
    });
}

// PREMIUM ENHANCEMENTS:

function initHeroAnimations() {
    gsap.from("nav", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });

    // Stagger hero elements
    const heroElements = document.querySelectorAll("#home h1, #home .typing-container, #home p, #home .flex-wrap");
    if(heroElements.length > 0) {
        gsap.set(heroElements, { opacity: 0, y: 30, filter: "blur(4px)" });
        gsap.to(heroElements, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
        });
    }
}

function setupSmoothScrollAndNav() {
    const navLinks = document.querySelectorAll('#desktop-menu a');
    const sections = Array.from(navLinks).map(link => document.querySelector(link.getAttribute('href')));
    
    // Smooth scrolling via GSAP using elegant cubic easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: targetElement, offsetY: 70 },
                    ease: "power3.inOut" // Professional, premium elegant easing
                });
            }
        });
    });

    // Observer to track sections and update active line dynamically
    const observerOptions = {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // triggers when section is prominently in middle
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveLink(id);
            }
        });
    }, observerOptions);

    sections.forEach(sec => {
        if(sec) sectionObserver.observe(sec);
    });

    function updateActiveLink(activeId) {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active-nav-link');
                link.classList.add('text-blue-400');
            } else {
                link.classList.remove('active-nav-link');
                link.classList.remove('text-blue-400');
            }
        });
    }
}

function setupSectionReveals() {
    // Grab all major sections that aren't the hero
    const sections = document.querySelectorAll('section:not(#home)');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // We reached this section, animate its content!
                const section = entry.target;
                
                // Select important child elements we want to stagger animate
                // You can adjust these generic tags to target cards, headings, skills, etc.
                const elementsToAnimate = section.querySelectorAll('h2, h3, .grid > div, .skill-category, p.text-lg, form > div');
                
                if(elementsToAnimate.length > 0) {
                    gsap.fromTo(elementsToAnimate, 
                        { 
                            opacity: 0, 
                            y: 40,
                            filter: "blur(6px)"
                        }, 
                        {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            duration: 0.9,
                            stagger: 0.1,
                            ease: "power3.out",
                            clearProps: "all" // removes inline styles after completion
                        }
                    );
                }

                // If this is the skills section, optionally trigger specific native skill bars too
                const skillBars = section.querySelectorAll('.skill-progress');
                if (skillBars.length > 0) {
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute('data-width');
                        gsap.fromTo(bar, 
                            { width: '0%' },
                            {
                                width: width,
                                duration: 1.5,
                                ease: "power3.out",
                                delay: 0.3
                            }
                        );
                    });
                }

                // Only animate once per navigation load lifecycle
                observer.unobserve(section);
            }
        });
    }, {
        threshold: 0.15, // Trigger slightly after it enters screen
        rootMargin: "0px"
    });

    sections.forEach(sec => revealObserver.observe(sec));
}
