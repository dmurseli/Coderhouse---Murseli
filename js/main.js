<<<<<<< HEAD
// La tercera pre-entrega consiste en:
// Definir eventos a manejar y su función de respuesta: el manejo de DOM y eventos, deben permitir dar
// notificaciones al usuario, del resultado de las funciones de procesos (funcionalidades simuladas para el circuito escogido).
// Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un procesamiento. Como lo
// vimos en las clases 10 y 11 donde interactuamos con el DOM para listar elementos o mostrar datos de un objeto (entidad de nuestro
// contexto) en alguna sección de nuestro HTML.
// Deberán agregar y entregar uso de JSON y Storage: almacenar datos (mediante clave-valor) en el Storage y recuperarlos, permitirá
// un almacenamiento y gestión de la información más apropiada para conseguir el flujo de la simulación deseada (como lo vimos en la
// clase 11 cuando creamos carreras y le añadimos cátedras o cuando matriculamos estudiantes a una carrera).
// En relación con la primera y segunda pre-entregas: ya no usamos alert() como salida y promt() como entrada,
// ahora modificamos el DOM para las salidas y capturamos los eventos del usuario sobre inputs y botones para las entradas.
// No dejar código comentado, descartarlo.


=======
/*************************************************************************************************/
/*************************************************************************************************/
/********************************* SEGUNDA ENTREGA MURSELI ***************************************/
/*************************************************************************************************/
/*************************************************************************************************/
/*************************************************************************************************/

// Todo lo que incluía la primera entrega, agregando:

// Funciones - Declarar e invocar funciones -
// Objetos - Crear objetos a partir de una clase -
// Arrays - Cargar elementos en un array con metodos vistos en clase ( .push() o .unshift() ) -
// Funciones de Orden Superior - Utilizar al menos una de los métodos vistos en esta clase ( .forEach() .map() .filter() ) -

>>>>>>> 249de3d66456c16a259f6a49059be1542906923e
class Paciente {
  constructor(
    nombre,
    apellido,
    edad,
    obraSocial,
    diaAsignado,
    horaAsignada,
    valorSesion
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.obraSocial = obraSocial;
    this.diaAsignado = diaAsignado;
    this.horaAsignada = horaAsignada;
    this.valorSesion = valorSesion;
  }
}

let misPacientes = [];

<<<<<<< HEAD
const form = document.getElementById("cargaForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cargarPaciente();
});


const cargarPaciente = () => {
  let nombresInput = document.getElementById("nombresInput").value;
  let apellidosInput = document.getElementById("apellidosInput").value;
  let telefonoInput = document.getElementById("telefonoInput").value;
  let edadInput = document.getElementById("edadInput").value;
  let inicioInput = document.getElementById("inicioInput").value;
  let diaInput = document.getElementById("diaInput").value;
  let horaInput = document.getElementById("horaInput").value;
  let emailInput = document.getElementById("emailInput").value;

  const nuevoPaciente = new Paciente(
    nombresInput,
    apellidosInput,
    telefonoInput,
    edadInput,
    inicioInput,
    diaInput,
    horaInput,
    emailInput
  );

  misPacientes.push(nuevoPaciente);
  localStorage.setItem("datos", JSON.stringify(datos));
};




=======
let nombre;
let apellido;
let edad = 0;
let obraSocial;
let diaAsignado;
let horaAsignada;
let valorSesion = 0;

let continuarCarga = "SI";

const cargarPaciente = () => {
  do {
    nombre = prompt("Por favor, ingrese el nombre del PACIENTE:");
    apellido = prompt("Por favor, ingrese el apellido del PACIENTE:");

    
      //Valída si es númerica la entrada de la edad
      do {
        edad = parseInt(prompt("Por favor, ingresá la EDAD del PACIENTE:"));

        if (isNaN(edad)) {
          alert("Eso no es un número, por favor ingrese un número válido");
        }
      } while (isNaN(edad));
      {
        console.log("La edad es: " + edad);
      }
      //Valída si es númerica la entrada del valor de la sesión
      do {
        valorSesion = parseInt(
          prompt("Por favor, ingresá el VALOR DE LA SESIÓN:")
        );

        if (isNaN(valorSesion)) {
          alert("Eso no es un número, por favor ingrese un número válido");
        }
      } while (isNaN(valorSesion));
      {
        console.log("El valor acordado es: " + valorSesion);
      }


    obraSocial = prompt("Por favor, ingrese la obraSocial del PACIENTE");
    diaAsignado = prompt("Por favor, ingrese el día DE LA SESIÓN:");
    horaAsignada = prompt("Por favor, ingrese la HORA/turno DE LA SESIÓN:");

    const nuevoPaciente = new Paciente(
      nombre,
      apellido,
      edad,
      obraSocial,
      diaAsignado,
      horaAsignada,
      valorSesion
    );

    
    
    misPacientes.push(nuevoPaciente);
    continuarCarga = prompt(
      "¿Quiere seguir cargando algún otro PACIENTE? SI/NO"
    );
  } while (continuarCarga.toUpperCase() !== "NO");
    confirm("Finalizó la carga");
};

cargarPaciente();

console.log(
  "--> Ésta es la lista de todos los PACIENTES que están cargados",
  misPacientes
);

function consultarPaciente () {
  misPacientes.forEach((persona) => {
    let nombreConsultado = prompt("Por favor, ingrese el nombre del PACIENTE a consultar", persona.includes);
    console.log("***************** PACIENTE CONSULTADO ************************");
    console.log("NOMBRE COMPLETO: " + persona.nombre + " " + persona.apellido);
    console.log("DÍA DE LA SESIÓN: " + persona.diaAsignado + " a las " + persona.horaAsignada + " hs");
    console.log("OBRA SOCIAL: " + persona.obraSocial);
    console.log("***************** FIN DE CONSULTA ************************");
  })
};

// function consultarDia () {
//   let queDia = prompt("Consulte los pacientes de un día específico. Ingrese el día por favor:", misPacientes.filter((queDia) => queDia === ""));
//   confirm("");
// };

consultarPaciente();




/*************************************************************************************************/
/*************************************************************************************************/
/********************************* PRIMERA ENTREGA MURSELI ***************************************/
/*************************************************************************************************/
/*************************************************************************************************/
/*************************************************************************************************/

// let paciente = "";
// let dia = "";
// let hora = "";
// let valorSesion;

// function pedirValor() {
//   //
//   do {
//     valorSesion = parseInt(prompt("Por favor, ingresá el VALOR DE LA SESIÓN:"));

//     if (isNaN(valorSesion)) {
//       //si el valor no es un número
//       alert("Eso no es un número, por favor ingrese un número válido");
//     }
//   } while (isNaN(valorSesion));
//   {
//     //mientras no sea un numero, vuelve al do
//     console.log("El valor acordado es: " + valorSesion);
//   }
// }

// for (let i = 1; i < 2; i++) {
//     paciente = prompt("Por favor, ingresá el nombre del PACIENTE:");
//     console.log("El paciente número " + i + " es: " + paciente);
//     dia = prompt("Por favor, ingresá el DIA DE LA SESIÓN:");
//     console.log("El día asignado es: " + dia);
//     hora = prompt("Por favor, ingresá la HORA DE LA SESIÓN:");
//     console.log("La hora o turno asignado es: " + hora);
//     pedirValor ();

// };

//console.log("Finalizó la carga");
>>>>>>> 249de3d66456c16a259f6a49059be1542906923e
