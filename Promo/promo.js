// Selezioniamo gli elementi video e canvas dalla pagina
const video = document.getElementById('video');
const canvas = document.getElementById('overlay');
const ctx = canvas.getContext('2d');

// Accediamo alla fotocamera del telefono
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        video.srcObject = stream;

        // Imposta le dimensioni del canvas in base al video
        video.addEventListener('loadedmetadata', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            draw();
        });
    })
    .catch((err) => {
        console.error("Errore nell'accesso alla fotocamera: ", err);
    });

// Funzione che disegna sul canvas
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Pulisce il canvas

    // Disegna un cerchio al centro del canvas
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Aggiorna il disegno ogni frame
    requestAnimationFrame(draw);
}
