document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buy-button');
    const notification = document.getElementById('notification');

    buyButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del enlace

        // Mostrar la notificación
        notification.style.display = 'block';

        // Ocultar la notificación después de 3 segundos
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    });
});

