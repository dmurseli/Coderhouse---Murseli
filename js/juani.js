//---> Comenzamos creando una class denominada Paciente
class Paciente {
    constructor(dni, apellido, nombre, edad, email, telefono, fecha) {
        this.dni = dni;
        this.apellido = apellido;
        this.nombre = nombre;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
        this.fecha = fecha;
    }
}
const getDate = () => {
    // Devuelve la fecha y hora actual en formato de cadena de texto.
    const fecha = new Date();
    const anio = fecha.getFullYear();
    const mes = fecha.getMonth() + 1; // se suma 1 porque los meses se indexan desde 0
    const dia = fecha.getDate();
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();
    const segundos = fecha.getSeconds();
    const milisegundos = fecha.getMilliseconds();
    const fechaActual = `${dia}/${mes}/${anio} ${hora}:${minutos}:${segundos}.${milisegundos}`;
    return fechaActual;
};
let arrayPacientes = []; // Declaramos  a la variable y asignamos un array vacío.
let ultimoPaciente = null; // Declaramos el valor de la variable en nulo, para comprobar más adelante si se ha agregado algún objeto.

const agregarPaciente = () => {
    const obtenerDatosPaciente = () => {
        // La función obtenerDatosPaciente() se encarga de obtener los datos del usuario.
        let dni = prompt("¿Cuál es tu DNI?");
        let apellido = prompt("¿Cuál es tu APELLIDO?");
        let nombre = prompt("¿Cuál es tu NOMBRE?");
        let edad = prompt("¿Cuál es tu EDAD?");
        let email = prompt("¿Cuál es tu EMAIL?");
        let telefono = prompt("¿Cuál es tu TELÉFONO?");
        let fecha = new Date();
        getDate(); // llamamos a la función getDate() para obtener la fecha actual
        pushPaciente(dni, apellido, nombre, edad, email, telefono, fecha); //Llama a pushPaciente con los datos obtenidos de los prompt.
    };

    const pushPaciente = (
        dni,
        apellido,
        nombre,
        edad,
        email,
        telefono,
        fecha
    ) => {
        //La función pushPaciente() se encarga de crear y agregar el nuevo objeto Paciente al array arrayPacientes.
        const paciente = new Paciente(
            dni,
            apellido,
            nombre,
            edad,
            email,
            telefono,
            fecha
        );
        arrayPacientes.push(paciente); //Agrega el nuevo objeto Paciente al final del array arrayPacientes usando el método push().
        ultimoPaciente = paciente; //Almacena el último objeto agregado.
    };
    obtenerDatosPaciente(); // Llamamos a la función para comenzar a obtener los datos.
    return agregarPaciente;
};

const modificarDatos = () => {
    let continuar = true;
    do {
        let propiedad = prompt(
            "¿Qué propiedad deseas modificar? DNI/ APELLIDO/ NOMBRE/ EDAD/ EMAIL/ TELEFONO/ FECHA"
        ).toLowerCase();

        let indice;
        for (let i = 0; i < arrayPacientes.length; i++) {
            if (arrayPacientes[i][propiedad]) {
                indice = i;
                break;
            }
        } //Recorre el array de pacientes, y verifica si el paciente actual (arrayPacientes[i]) tiene la propiedad solicitada.

        if (indice === undefined) {
            console.log("Propiedad inválida");
            continue;
        } // Verifica si la variable indice no fue asignada a ningún valor,  es decir, si la propiedad a cambiar no existe (o sea, es undefined).
        let valor = prompt(`Ingresa el nuevo valor para ${propiedad}`); //Se está pidiendo al usuario que ingrese el nuevo valor que desea asignar a la propiedad elegida.
        arrayPacientes[indice][propiedad] = valor; //Se asigna ese valor a la propiedad.
        console.log("Datos modificados:");
        console.log(arrayPacientes.forEach((p) => console.log(p))); // Se utiliza el método forEach() en el arrayPacientes para imprimir el Paciente en la consola.
        continuar = confirm(
            "¿DESEAS SEGUIR MODIFICANDO DATOS? // SI CANCELAS IRAS A LA SIGUIENTE ETAPA"
        );
    } while (continuar);
};

const verDatosPaciente = () => {
    //Permite al usuario seleccionar qué datos desea ver y muestra los datos correspondientes para cada paciente(en este caso uno solo).
    let preguntar = "";
    let continuar = true;
    arrayPacientes.forEach((ver) => {
        //En resumen, la función muestra los datos de los pacientes almacenados en el array arrayPacientes, permitiendo que el usuario indique qué datos quiere ver.
        while (continuar) {
            preguntar = prompt(
                "¿Qué datos deseas VER?: 1-DNI/ 2-APELLIDO/ 3-NOMBRE/ 4-EDAD/ 5-EMAIL/ 6-TELEFONO 7-FECHA/ 8-TODOS"
            ).toUpperCase();
            switch (preguntar) {
                case "1":
                case "DNI":
                    console.log(`El DNI es: ${ver.dni}`);
                    break;
                case "2":
                case "APELLIDO":
                    console.log(`El APELLIDO es: ${ver.apellido}`);
                    break;
                case "3":
                case "NOMBRE":
                    console.log(`El NOMBRE es: ${ver.nombre}`);
                    break;
                case "4":
                case "EDAD":
                    console.log(`El EDAD es: ${ver.edad}`);
                    break;
                case "5":
                case "EMAIL":
                    console.log(`El EMAIL es: ${ver.email}`);
                    break;
                case "6":
                case "TELEFONO":
                    console.log(`El TELEFONO es: ${ver.telefono}`);
                    break;
                case "7":
                case "FECHA":
                    console.log(`La fecha es: ${ver.fecha}`);
                    break;
                case "8":
                case "TODOS":
                    console.log("Todos son:");
                    arrayPacientes.forEach((ver) => {
                        console.log(
                            `DNI: ${ver.dni} | Apellido: ${ver.apellido} | Nombre: ${ver.nombre} | Edad: ${ver.edad} | Email: ${ver.email} | Teléfono: ${ver.telefono} | Fecha: ${ver.fecha}`
                        );
                    });
                    break;

                default:
                    console.log("Opción inválida");
                    break;
            }
            continuar = confirm("¿DESEAS CONTINUAR Y VER MÁS DATOS?");
        }
    });
    return;
};

agregarPaciente();
alert("--->Uso de métodos para MODIFICAR<---");
modificarDatos();
alert("--->Uso de métodos para CONSULTAR<---");
verDatosPaciente();