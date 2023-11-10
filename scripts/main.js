const form = document.querySelector("form");
const enviarMensajeBtn = document.getElementById("enviarMensaje");

const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const motivoInput = document.getElementById("motivo");
const mensajeInput = document.getElementById("mensaje");

let mensajesDeContacto = cargarMensajesDesdeLocalStorage();

nombreInput.value = localStorage.getItem("nombre") || "";
telefonoInput.value = localStorage.getItem("telefono") || "";
emailInput.value = localStorage.getItem("email") || "";
motivoInput.value = localStorage.getItem("motivo") || "";
mensajeInput.value = localStorage.getItem("mensaje") || "";

function cargarMensajesDesdeLocalStorage() {
  const mensajesGuardados = localStorage.getItem("mensajesDeContacto");
  return mensajesGuardados ? JSON.parse(mensajesGuardados) : [];
}

function guardarMensajesEnLocalStorage() {
  localStorage.setItem(
    "mensajesDeContacto",
    JSON.stringify(mensajesDeContacto)
  );
}

function agregarMensaje(nombre, telefono, email, motivo, mensaje) {
  mensajesDeContacto.push({ nombre, telefono, email, motivo, mensaje });
  guardarMensajesEnLocalStorage();
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("email", email);
  localStorage.setItem("motivo", motivo);
  localStorage.setItem("mensaje", mensaje);
}

// Evento clic del botón de enviar mensaje
enviarMensajeBtn.addEventListener("click", async function (event) {
  event.preventDefault();

  // Obtener valores de los campos de entrada
  const nombre = nombreInput.value;
  const telefono = telefonoInput.value;
  const email = emailInput.value;
  const motivo = motivoInput.value;
  const mensaje = mensajeInput.value;

  // Validar que todos los campos estén completos
  if (!nombre || !telefono || !email || !motivo || !mensaje) {
    // Mostrar mensaje de error con SweetAlert2
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, complete todos los campos.",
    });
    return;
  }

  // Mostrar mensaje de carga
  const loadingSwal = Swal.fire({
    title: "Enviando mensaje...",
    allowOutsideClick: false,
    showConfirmButton: false,
    willOpen: () => {
      Swal.showLoading();
    },
  });

  try {
    // Simula un tiempo de espera (puedes reemplazar esto con tu lógica de envío real)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Agregar mensaje y mostrar mensajes actualizados
    agregarMensaje(nombre, telefono, email, motivo, mensaje);
    mostrarMensajes();

    // Mostrar mensaje de éxito con SweetAlert2
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado con éxito",
      showConfirmButton: false,
      timer: 1500, // Cierra automáticamente después de 1.5 segundos
    });
  } catch (error) {
    // En caso de error, mostrar mensaje de error
    Swal.fire({
      icon: "error",
      title: "Error al enviar el mensaje",
      text: "Hubo un problema al enviar el mensaje. Por favor, inténtelo de nuevo.",
    });
  } finally {
    // Cerrar mensaje de carga
    loadingSwal.close();
  }
});

function mostrarMensajes() {
  const mensajesContainer = document.querySelector("#mensajesContainer");
  mensajesContainer.innerHTML = "";

  if (mensajesDeContacto.length === 0) {
    // Si no hay mensajes, mostrar mensaje indicando que no existen
    mensajesContainer.innerHTML = "<p>No existen mensajes.</p>";
    return;
  }

  for (let mensaje of mensajesDeContacto) {
    const mensajeElement = document.createElement("div");
    mensajeElement.innerHTML = `
      <p>Nombre: ${mensaje.nombre}</p>
      <p>Teléfono: ${mensaje.telefono}</p>
      <p>Email: ${mensaje.email}</p>
      <p>Motivo: ${mensaje.motivo}</p>
      <p>Mensaje: ${mensaje.mensaje}</p>
    `;
    mensajesContainer.appendChild(mensajeElement);
  }
}

mostrarMensajes();
