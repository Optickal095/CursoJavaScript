let mensajesDeContacto = [];

function agregarMensaje(nombre, telefono, email, motivo, mensaje) {
  mensajesDeContacto.push({
    nombre,
    telefono,
    email,
    motivo,
    mensaje,
  });
}

function mostrarMensajes() {
  for (let mensaje of mensajesDeContacto) {
    alert(
      "El usuario " +
        mensaje.nombre +
        " con teléfono " +
        mensaje.telefono +
        " y email " +
        mensaje.email +
        " dejó un mensaje que tiene el siguiente motivo:\n\n" +
        mensaje.motivo +
        "\n\ny el mensaje es el siguiente:\n\n" +
        mensaje.mensaje
    );
  }
}

function buscarPorNombre(nombreBuscado) {
  let resultados = mensajesDeContacto.filter(
    (mensaje) => mensaje.nombre === nombreBuscado
  );
  return resultados;
}

function buscarOtroMensaje() {
  let respuestaUsuario = prompt(
    "¿Quieres buscar otro mensaje por nombre? (si/no)"
  );
  return respuestaUsuario.trim().toLowerCase() === "si";
}

function message() {
  while (true) {
    let respuestaUsuario = prompt("¿Quieres enviar un mensaje? (si/no)");

    if (respuestaUsuario.trim().toLowerCase() === "si") {
      let nombre = prompt("¿Cuál es tu nombre?");
      let telefono = prompt("¿Cuál es tu teléfono?");
      let email = prompt("¿Cuál es tu email?");
      let motivo = prompt("¿Cuál es el motivo de tu mensaje?");
      let mensaje = prompt("Inserta tu mensaje a continuación");

      agregarMensaje(nombre, telefono, email, motivo, mensaje);

      alert("Mensaje guardado con éxito.");
    } else if (respuestaUsuario.trim().toLowerCase() === "no") {
      alert("Perfecto, no simularemos un mensaje.");
      break;
    } else {
      alert("No has ingresado una opción válida, ingresa 'si' o 'no'.");
    }
  }

  mostrarMensajes();

  do {
    let nombreBuscado = prompt("Ingresa un nombre para buscar mensajes:");
    let resultados = buscarPorNombre(nombreBuscado);
    if (resultados.length > 0) {
      alert("Mensajes encontrados para el nombre '" + nombreBuscado + "':");
      for (let resultado of resultados) {
        alert(
          "Motivo: " + resultado.motivo + "\nMensaje: " + resultado.mensaje
        );
      }
    } else {
      alert(
        "No se encontraron mensajes para el nombre '" + nombreBuscado + "'."
      );
    }
  } while (buscarOtroMensaje());
}

message();
