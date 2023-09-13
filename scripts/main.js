function message() {
  let respuestaUsuario = prompt("¿Quieres enviar un mensaje?");
  if (respuestaUsuario.trim().toLowerCase() == "si") {
    let nombre = prompt("¿Cual es tu nombre?");
    let telefono = prompt("¿Cual es tu teléfono?");
    let email = prompt("¿Cual es tu email?");
    let motivo = prompt("¿Cual es el motivo de tu mensaje?");
    let mensaje = prompt("Inserte su mensaje a continuación");

    alert(
      "El usuario " +
        nombre +
        " con teléfono " +
        telefono +
        " y email " +
        email +
        " dejó un mensaje que tiene el siguiente motivo: \n\n" +
        motivo +
        "\n\ny el mensaje es el siguiente: \n\n\n" +
        mensaje
    );
  } else if (respuestaUsuario.trim().toLowerCase() == "no") {
    alert("Perfecto, no simularemos un mensaje");
  } else {
    alert(
      "No has ingresado una opción válida, ingresa si o no segun corresponda"
    );
    message();
  }
}

message();
