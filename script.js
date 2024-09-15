// Simulate thunder flashes
function simulateThunder() {
    const thunder = document.querySelector('.thunder');
    setInterval(() => {
        thunder.style.opacity = '1';
        setTimeout(() => {
            thunder.style.opacity = '0';
        }, 200);
    }, Math.random() * 5000 + 2000); // Random interval between 2 to 7 seconds
}

// Start the thunder effect
simulateThunder();
