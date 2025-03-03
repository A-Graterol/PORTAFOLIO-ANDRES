// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelector('.nav-links');
    const toggleButton = document.querySelector('.toggle-button');

    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Abrir modal
document.querySelectorAll('.btn-ver-mas').forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
    });
});

// Cerrar modal
document.querySelectorAll('.close-modal').forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        modal.style.display = 'none';
    });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

document.getElementById('formulario-contacto').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Mensaje enviado con éxito. ¡Gracias por contactarme!');
            form.reset(); // Limpia el formulario
        } else {
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        }
    })
    .catch(error => {
        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    });
});