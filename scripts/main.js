function message() {
  while (true) {
    let respuestaUsuario = prompt("¿Quieres enviar un mensaje? (si/no)");

    if (respuestaUsuario.trim().toLowerCase() === "si") {
      let nombre = prompt("¿Cuál es tu nombre?");
      let telefono = prompt("¿Cuál es tu teléfono?");
      let email = prompt("¿Cuál es tu email?");
      let motivo = prompt("¿Cuál es el motivo de tu mensaje?");
      let mensaje = prompt("Inserta tu mensaje a continuación");

      alert(
        "El usuario " +
          nombre +
          " con teléfono " +
          telefono +
          " y email " +
          email +
          " dejó un mensaje que tiene el siguiente motivo:\n\n" +
          motivo +
          "\n\ny el mensaje es el siguiente:\n\n" +
          mensaje
      );
    } else if (respuestaUsuario.trim().toLowerCase() === "no") {
      alert("Perfecto, no simularemos un mensaje.");
      break;
    } else {
      alert("No has ingresado una opción válida, ingresa 'si' o 'no'.");
    }
  }
}

message();
