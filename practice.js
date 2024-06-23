document.addEventListener('DOMContentLoaded', function() {
    const starsContainer = document.querySelector('.stars-container');

    // Function to create a random star
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`; // Random horizontal position
        star.style.top = `${Math.random() * 100}%`; // Random vertical position
        star.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random animation duration
        starsContainer.appendChild(star);
    }

    // Create initial stars
    for (let i = 0; i < 50; i++) {
        createStar();
    }

    // Function to create stars at intervals
    function createStars() {
        setInterval(() => {
            createStar();
        }, 1000); // Interval time in milliseconds
    }

    // Call the function to continuously create stars
    createStars();

    // Function to create planets
    function createPlanet() {
        const planet = document.createElement('div');
        planet.className = 'planet';
        planet.style.left = `${Math.random() * 100}%`; // Random horizontal position
        planet.style.top = `${Math.random() * 100}%`; // Random vertical position
        planet.style.animationDuration = `${Math.random() * 20 + 10}s`; // Random animation duration
        starsContainer.appendChild(planet);
    }

    // Create initial planets
    for (let i = 0; i < 5; i++) {
        createPlanet();
    }

    // Function to create planets at intervals
    function createPlanets() {
        setInterval(() => {
            createPlanet();
        }, 15000); // Interval time in milliseconds
    }

    // Call the function to continuously create planets
    createPlanets();
});
