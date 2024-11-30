// Seleccionar el boton y el cuerpo de la página
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

// Añadir un evento de clic al botón
toggleButton.addEventListener('click', () => {
    // Verificar la clase actua y alternarla entre light-theme y dark-theme
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme'); // Quita el tema claro
        body.classList.add('dark-theme'); //Aplica el tema oscuro
    } else {
        body.classList.remove('dark-theme'); // Quita el tema claro
        body.classList.add('light-theme'); //Aplica el tema oscuro
    }
});

document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');

        // Activar pestaña
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Mostrar contenido
        document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
        document.getElementById(tabId).classList.remove('hidden');
    });
});
