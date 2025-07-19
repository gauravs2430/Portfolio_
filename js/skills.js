// skills.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = '0';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Create floating tech elements
    createFloatingTech();
});

function createFloatingTech() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const techIcons = [
        'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js', 'fab fa-react', 
        'fab fa-node-js', 'fab fa-python', 'fab fa-java', 'fab fa-git-alt'
    ];

    for (let i = 0; i < 12; i++) {
        const tech = document.createElement('i');
        tech.className = `${techIcons[i % techIcons.length]} floating-tech`;
        tech.style.fontSize = `${Math.random() * 30 + 20}px`;
        tech.style.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        tech.style.top = `${Math.random() * 100}%`;
        tech.style.left = `${Math.random() * 100}%`;
        tech.style.animationDuration = `${Math.random() * 20 + 10}s`;
        tech.style.animationDelay = `${Math.random() * 5}s`;
        skillsSection.appendChild(tech);
    }
}






// skills.js
document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = '0';
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 100);
                skillObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    });

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Add hover effects to all tech cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const logo = card.querySelector('.tech-logo');
            logo.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            const logo = card.querySelector('.tech-logo');
            logo.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Add animation to professional skill icons
    const proSkillCards = document.querySelectorAll('.pro-skill-card');
    proSkillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.pro-skill-icon');
            icon.style.transform = 'scale(1.2)';
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.pro-skill-icon');
            icon.style.transform = 'scale(1)';
        });
    });

    // Create floating tech elements in background
    createFloatingTech();
});

function createFloatingTech() {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const techIcons = [
        'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js', 'fab fa-react',
        'fab fa-node-js', 'fab fa-python', 'fab fa-java', 'fab fa-git-alt',
        'fab fa-github', 'fab fa-npm', 'fab fa-docker', 'fab fa-linux'
    ];

    for (let i = 0; i < 20; i++) {
        const tech = document.createElement('i');
        tech.className = `${techIcons[i % techIcons.length]} floating-tech`;
        
        const size = Math.random() * 30 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.1 + 0.05;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const rotation = Math.random() * 360;
        
        tech.style.fontSize = `${size}px`;
        tech.style.color = `hsla(${Math.random() * 60 + 200}, 70%, 60%, ${opacity})`;
        tech.style.top = `${posY}%`;
        tech.style.left = `${posX}%`;
        tech.style.animation = `float-tech ${duration}s infinite ${delay}s`;
        tech.style.transform = `rotate(${rotation}deg)`;
        tech.style.position = 'absolute';
        tech.style.pointerEvents = 'none';
        tech.style.zIndex = '0';
        
        skillsSection.appendChild(tech);
    }
}

// Add to your CSS:
// @keyframes float-tech {
//     0%, 100% { transform: translate(0, 0) rotate(0deg); }
//     25% { transform: translate(50px, 30px) rotate(5deg); }
//     50% { transform: translate(20px, 60px) rotate(0deg); }
//     75% { transform: translate(40px, 20px) rotate(-5deg); }
// }

