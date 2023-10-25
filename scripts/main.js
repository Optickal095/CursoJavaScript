const form = document.querySelector("form");
const nombreInput = document.querySelector('input[placeholder="Name"]');
const telefonoInput = document.querySelector(
  'input[placeholder="Phone Number"]'
);
const emailInput = document.querySelector('input[placeholder="Email"]');
const motivoInput = document.querySelector('input[placeholder="Subject"]');
const mensajeInput = document.querySelector("textarea");

let mensajesDeContacto = cargarMensajesDesdeLocalStorage();

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
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = nombreInput.value;
  const telefono = telefonoInput.value;
  const email = emailInput.value;
  const motivo = motivoInput.value;
  const mensaje = mensajeInput.value;

  agregarMensaje(nombre, telefono, email, motivo, mensaje);

  nombreInput.value = "";
  telefonoInput.value = "";
  emailInput.value = "";
  motivoInput.value = "";
  mensajeInput.value = "";

  mostrarMensajes();
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
