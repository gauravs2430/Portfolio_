// projects.js
document.addEventListener('DOMContentLoaded', function() {
    // Create floating tech elements
    createFloatingTech();
    
    // Initialize project card animations
    initProjectCards();
});

function createFloatingTech() {
    const projectsSection = document.getElementById('projects');
    if (!projectsSection) return;

    const techIcons = [
        'fab fa-html5', 'fab fa-css3-alt', 'fab fa-js', 'fab fa-react', 
        'fab fa-node-js', 'fab fa-vuejs', 'fab fa-git-alt', 'fab fa-npm'
    ];

    for (let i = 0; i < 15; i++) {
        const tech = document.createElement('i');
        tech.className = `${techIcons[i % techIcons.length]} floating-tech`;
        tech.style.fontSize = `${Math.random() * 30 + 20}px`;
        tech.style.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        tech.style.top = `${Math.random() * 100}%`;
        tech.style.left = `${Math.random() * 100}%`;
        tech.style.animationDuration = `${Math.random() * 20 + 10}s`;
        tech.style.animationDelay = `${Math.random() * 5}s`;
        projectsSection.appendChild(tech);
    }
}

function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        // Add delay based on index for staggered animation
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Add hover effect for tech badges
        const techBadges = card.querySelectorAll('.project-tech');
        techBadges.forEach(badge => {
            badge.addEventListener('mouseenter', () => {
                badge.style.transform = 'translateY(-5px) scale(1.1)';
            });
            badge.addEventListener('mouseleave', () => {
                badge.style.transform = 'translateY(0) scale(1)';
            });
        });
    });
}