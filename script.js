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

// Function to play the audio
document.getElementById('audio-trigger').onclick = function() {
    var audio = document.getElementById('rain-sound');
    audio.play();
};

// Start the thunder effect
simulateThunder();
