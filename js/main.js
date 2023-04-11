// Crear un algoritmo con un condicional
// Crear un algoritmo utilizando un ciclo
// Armar un simulador interactivo, la estructura final de tu proyecto integrador

let paciente = "";
let dia = "";
let hora = "";
let valorSesion;

function pedirValor(){
    do{

        valorSesion = parseInt(prompt("Por favor, ingresá el VALOR DE LA SESIÓN:"));
        if(isNaN(valorSesion)){
            alert("Eso no es un número, por favor ingrese un número válido")
        }
    }
        while (isNaN(valorSesion) );
        console.log("El valor acordado es: " + valorSesion);
}

for (let i = 1; i < 4; i++) {
    paciente = prompt("Por favor, ingresá el nombre del PACIENTE:");
    console.log("El paciente número " + i + " es: " + paciente);
    dia = prompt("Por favor, ingresá el DIA DE LA SESIÓN:");
    console.log("El día asignado es: " + dia);
    hora = prompt("Por favor, ingresá la HORA DE LA SESIÓN:");
    console.log("La hora o turno asignado es: " + hora);
    pedirValor ();
    
};

 console.log("Finalizó la carga");