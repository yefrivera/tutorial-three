/*interfaz
document.addEventListener('DOMContentLoaded', function() {
    const vrInterface = document.querySelector('.vr-interface');

    setTimeout(function() {
        vrInterface.classList.add('active');
    }, 500); // Delay para que la interfaz aparezca después de medio segundo

    const links = document.querySelectorAll('.vr-interface a');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const destination = this.getAttribute('href');

            // Agregar efecto de desvanecimiento antes de redirigir
            vrInterface.classList.remove('active');
            setTimeout(function() {
                window.location.href = destination;
            }, 500); // Delay para que la interfaz se desvanezca antes de redirigir
        });
    });
});
*/