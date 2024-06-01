
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");

    form.addEventListener("submit", function(event) {
        //Evitar el envio de formularios
        event.preventDefault();

        // Campos del formulario
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        const email = document.getElementById("email");
        
        //Borrar msjs de errores previos
        clearErrors();

        // Validar campos
        let isValid = true;

        if (!nombre.value.trim()) {
            showError(nombre, "El nombre es obligatorio.");
            isValid = false;
        }

        if (!apellido.value.trim()) {
            showError(apellido, "El apellido es obligatorio.");
            isValid = false;
        }

        if (!email.value.trim()) {
            showError(email, "El email es obligatorio.");
            isValid = false;
        } else if (!validateEmail(email.value.trim())) {
            showError(email, "El email no es válido.");
            isValid = false;
        }

    // Si todos los campos son validos se envia el form
        if (isValid) {
            form.submit();
        }
    });

    function showError(element, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "error";
        errorDiv.textContent = message;
        element.parentNode.appendChild(errorDiv);
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error");
        errors.forEach(function(error) {
            error.remove();
        });
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});

/*menu responsive*/

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
};