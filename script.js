const videoBackground = document.getElementById('video-background');
const textContainer = document.getElementById('text-container');

window.addEventListener('wheel', (e) => {
    const deltaY = e.deltaY;
    if (deltaY > 0) {
        // Scorrimento verso il basso
        updateBackground('down');
    } else if (deltaY < 0) {
        // Scorrimento verso l'alto
        updateBackground('up');
    }
});

function updateBackground(direction) {
    let translateY = 0;

    if (direction === 'down') {
        translateY = Math.min(window.scrollY * 0.5, 300); // Modifica il 0.5 per regolare la velocità di spostamento
    } else if (direction === 'up') {
        translateY = 0;
    }

    videoBackground.style.transform = `translateY(-${translateY}px)`;
    textContainer.style.transform = `translateY(-${translateY}px)`;
}

// Chiama updateBackground() all'avvio per impostare l'aspetto iniziale
updateBackground('up');
