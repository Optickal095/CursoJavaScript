// Obtener una referencia al formulario y otros elementos del DOM
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
  // Actualizar los campos del último mensaje
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("email", email);
  localStorage.setItem("motivo", motivo);
  localStorage.setItem("mensaje", mensaje);
}

enviarMensajeBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = nombreInput.value;
  const telefono = telefonoInput.value;
  const email = emailInput.value;
  const motivo = motivoInput.value;
  const mensaje = mensajeInput.value;

  if (!nombre || !telefono || !email || !motivo || !mensaje) {
    Swal.fire({
      icon: "error",
      title: "Campos incompletos",
      text: "Por favor, complete todos los campos.",
    });
    return;
  }

  agregarMensaje(nombre, telefono, email, motivo, mensaje);

  mostrarMensajes();

  Swal.fire({
    icon: "success",
    title: "Mensaje enviado con éxito",
    showConfirmButton: false,
    timer: 1500, // Cierra automáticamente después de 1.5 segundos
  });
});

function mostrarMensajes() {
  const mensajesContainer = document.querySelector("#mensajesContainer");
  mensajesContainer.innerHTML = "";

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
