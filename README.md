# CursoJavaScript

El siguiente proyecto es un portfolio con un simulador de contacto

## **Instrucciones**

### **Pre Entrega 1**

Para que el proyecto funcione, es necesario ingresar a la sección "**CONTACT**" que se encuentra en el navbar

Se inicia el ciclo, donde se mostrará un mensaje donde debe ingresar una respuesta

```bash
Posibles respuestas:
 - si
 - no
 - otro (puede ser cualquier otro mensaje)
 * En el caso de ingresar otro, mostrará un mensaje de alerta para luego volver a mostrar la solicitud inicial

 ** Para salir del ciclo, debe escribir no cuando lo solicite
```

### **Pre Entrega 2**

Se agregaron:

```bash
 - Objetos de Js
 - Array
 - Método de búsqueda y filtrado

```

Luego de enviar mensajes, se pedirá ingresar un nombre para buscar mensajes enviados con ese nombre.

Si existen, se mostrarán todos los mensajes encontrados con ese nombre.

Para salir del ciclo, se debe escribir no cuando lo solicite.

### **Pre Entrega 3**

Se agregaron:

```bash
 - Interacción con HTML
 - Modificación del DOM
 - JSON
 - localStorage
 - Sweet Alert

```

Ahora, para enviar un mensaje, es necesario rellenar los campos necesarios y luego presionar el botón `Enviar Mensaje`.

Si todos los campos están rellenos, aparecerá un mensaje de éxito, en el caso de que el formulario esté incompleto, saldrá un mensaje un mensaje de alerta.

Si se refresca la página, los inputs estarán completos automáticamente con lo enviado en el mensaje anterior.

### **Proyecto Final**

Se agregaron:

```bash
- Mensajes enviados con anterioridad
- Manejo de errores
- async/await
- Promise
- Alert mientras se envía el mensaje
- Pequeñas modificaciones
```

Ahora, cuando se envié un mensaje, aparecerá un mensaje indicando que se está enviando el mensaje, esto, mientras internamente ocurre la promesa.

Si el mensaje es enviado correctamente, aparecerá un mensaje indicando el éxito de la operación.

Si algunos de los campos no está rellenado, saldrá un mensaje de alerta indicando que se deben llenar todos los apartados.

Una vez enviado el mensaje, en la parte inferior del formulario, aparecerán todos los mensajes que se hayan enviado, estos mensajes quedan almacenados en "localStorage", por ende, se puede eliminar "localStorage" para que el contador de mensajes vuelva a cero.
