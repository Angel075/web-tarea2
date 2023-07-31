document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario.

        //Obtener los datos para el formulario.
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const mensaje = document.getElementById('mensaje').value;

        //Obtener los datos para forma de pago (información de pago).
        const numeroTarjeta = document.getElementById('numeroTarjeta').value;
        const nombreTarjeta = document.getElementById('nombreTarjeta').value;
        const fechaExpiracion = document.getElementById('fechaExpiracion').value;
        const codigoSeguridad = document.getElementById('codigoSeguridad').value;

        //Esta funcion limpia el formulario despues de enviada la información.
        formulario.reset();

        //Mostrar un mensaje al usuario de datos enviados.
        alert('¡Formulario enviado con éxito!');
    });
});