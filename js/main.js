// Simulador interactivo - ENTREGA DEL PROYECTO FINAL - Aspectos a incluir

// ✓ Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>,
// que incluya la definición de un algoritmo en JavaScript que emplee funciones para resolver el procesamiento principal del simulador

// Ejemplo
// ✓ Calcular costo total de productos y/o servicios seleccionados por el usuario.
// ✓ Calcular pagos en cuotas sobre un monto determinado.
// ✓ Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// ✓ Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados.
// ✓ Calcular edad promedio de personas registradas.
// ✓ Calcular nota final de alumnos ingresados.

let paciente = "";
let dia = "";
let hora = "";
let valorSesion = "";


for (let index = 0; index < 2; index++) {
    paciente = prompt("Por favor, ingresá el nombre del PACIENTE:");
    console.log();
    dia = prompt("Por favor, ingresá el DIA DE LA SESIÓN:");
    hora = prompt("Por favor, ingresá la HORA DE LA SESIÓN:");
    valorSesion = parseInt(prompt("Por favor, ingresá el VALOR DE LA SESIÓN:"));
    
};