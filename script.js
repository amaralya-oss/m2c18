// --- Tema nocturno ---
$("#themeToggle").on("click", function () {
    $("body").toggleClass("dark-mode");
});

// --- Animación al hacer scroll ---
$(window).on("scroll", function () {
    $("section").each(function () {
        const sectionTop = $(this).offset().top;
        const scrollPos = $(window).scrollTop() + $(window).height() - 100;

        if (scrollPos > sectionTop) {
            $(this).addClass("section-visible");
        }
    });
});

// --- Validación de formulario en tiempo real ---
$(document).ready(function() {

    // Función de validación
    function validateField(id, minLength) {
        const value = $(id).val().trim();
        if (value.length < minLength) {
            $(id).addClass('is-invalid');
            $(id).removeClass('is-valid');
            return false;
        } else {
            $(id).addClass('is-valid');
            $(id).removeClass('is-invalid');
            return true;
        }
    }

    function validateEmail(id) {
        const email = $(id).val().trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            $(id).addClass('is-invalid');
            $(id).removeClass('is-valid');
            return false;
        } else {
            $(id).addClass('is-valid');
            $(id).removeClass('is-invalid');
            return true;
        }
    }

    // Validación en tiempo real
    $('#nombre').on('input', function() { validateField('#nombre', 3); });
    $('#email').on('input', function() { validateEmail('#email'); });
    $('#asunto').on('input', function() { validateField('#asunto', 3); });
    $('#mensaje').on('input', function() { validateField('#mensaje', 10); });

    // Al enviar el formulario
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();

        const nombreValido = validateField('#nombre', 3);
        const emailValido = validateEmail('#email');
        const asuntoValido = validateField('#asunto', 3);
        const mensajeValido = validateField('#mensaje', 10);

        if (nombreValido && emailValido && asuntoValido && mensajeValido) {
            alert('Formulario enviado correctamente ✅');
            $(this)[0].reset();
            $('input, textarea').removeClass('is-valid');
        } else {
            alert('Por favor completa todos los campos correctamente ❌');
        }
    });

});