let scrollValue = 0;
const videoBackground = document.getElementById('video-background');
const textContainer = document.getElementById('text-container');

window.addEventListener('scroll', () => {
    scrollValue = window.scrollY;
    updateBackground();
});

function updateBackground() {
    const translateY = Math.min(scrollValue * 0.5, 300); // Modifica il 0.5 per regolare la velocità di spostamento

    videoBackground.style.transform = `translateY(-${translateY}px)`;
    textContainer.style.transform = `translateY(-${translateY}px)`;
}

// Chiama updateBackground() all'avvio per impostare l'aspetto iniziale
updateBackground();
