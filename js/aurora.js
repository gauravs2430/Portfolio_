// aurora.js
document.addEventListener('DOMContentLoaded', function () {
    createAuroraBackground();
    createParticles();
    initParallax();
});

function createAuroraBackground() {
    const auroraBg = document.createElement('div');
    auroraBg.className = 'aurora-bg';

    for (let i = 0; i < 3; i++) {
        const layer = document.createElement('div');
        layer.className = 'aurora-layer';
        auroraBg.appendChild(layer);
    }

    document.body.insertBefore(auroraBg, document.body.firstChild);
}

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.1;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.opacity = opacity;
        particle.style.background = `radial-gradient(circle, rgba(59, 130, 246, ${opacity}) 0%, transparent 70%)`;
        particle.style.animation = `float-particle ${duration}s infinite ${delay}s`;

        particlesContainer.appendChild(particle);
    }

    document.body.appendChild(particlesContainer);

    // Add to your CSS or style3D.css:
    // @keyframes float-particle {
    //     0%, 100% { transform: translate(0, 0); }
    //     50% { transform: translate(50px, 50px); }
    // }
}

function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 20;
        const y = (window.innerHeight / 2 - e.pageY) / 20;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
            el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
}