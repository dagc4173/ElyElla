$(document).ready(() => {
  // Selector del formulario de registro
  const registroForm = $('#registro-form');

  // Evento submit del formulario
  registroForm.submit((event) => {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const nombre = $('#nombre').val();
    const tipoDocumento = $('#tipoDocumento').val();
    const numeroDocumento = $('#numeroDocumento').val();
    const direccion = $('#direccion').val();
    const telefono = $('#telefono').val();
    const email = $('#email').val();
    const clave = $('#clave').val();
    const confirmarClave = $('#confirmar-clave').val();

    // Verificar que las contraseñas coincidan
    if (clave !== confirmarClave) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Crear objeto con los datos del usuario
    const usuario = {
      nombre: nombre,
      tipoDocumento: tipoDocumento,
      numeroDocumento: numeroDocumento,
      direccion: direccion,
      telefono: telefono,
      email: email,
      clave: clave
    };

    // Realizar la petición POST a la API para registrar el usuario
    $.ajax({
      url: UrlApi + '/api/articulo',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(usuario),
      success: function(response) {
        // Registro exitoso
        alert('Usuario registrado correctamente.');
        // Restablecer los campos del formulario
        registroForm[0].reset();
      },
      error: function(error) {
        // Error en el registro
        alert('Error al registrar el usuario.');
      }
    });
  });
});
