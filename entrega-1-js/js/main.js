// Declarar variables
let nombre;
let apellido;
let celular;

//Asignar un valor
nombre = "Janeth";
console.log(nombre);
apellido = "Calpa";
console.log(apellido);
celular = 3012667837;
console.log(celular);


//COTIZADOR VIAJES//

let usuarioNombre = prompt("Ingresa tu nombre");
let usuarioApellido = prompt("Ingresa tu apellido");
alert("Bienvenido/a " + usuarioNombre + " " + usuarioApellido); //Concatenación
let usuarioCelular = prompt(usuarioNombre + ' Ingresa tu número de celular');


//SOLICITAR INFO: FECHAS

let primeraFecha = prompt('Indicanos cual es la fecha de salida (dd-mm-yyyy): ');
let segundaFecha = prompt('Indicanos cual es la fecha de regreso (dd-mm-yyyy): ');
let fecha1 = new Date(primeraFecha.substring(6)+ '-' + primeraFecha.substring(3, 5) + '-' + primeraFecha.substring(0, 2));
let fecha2 = new Date(segundaFecha.substring(6)+ '-' + segundaFecha.substring(3, 5) + '-' + segundaFecha.substring(0, 2));				
let diferencia = 0;
	if(fecha2.valueOf()>fecha1.valueOf()){
	diferencia = fecha2.valueOf()-fecha1.valueOf();
	}else{
	diferencia = fecha1.valueOf()-fecha2.valueOf();
	}
	alert('La cotización del viaje se realizará por ' + diferencia/(1000*60*60*24) + ' dias');
    console.log(diferencia);


//SOLICITAR INFO: CANTIDAD PASAJEROS

let cantidadPasajeros = 15;
let intentosFallidos = 0;

for (let i = 0; i < 3; i++) {
  let ingresoCantidad = prompt("Indícanos la cantidad de pasajeros (Grupos de mínimo 15 personas):");  

  if (cantidadPasajeros <= ingresoCantidad) {
    alert("Perfecto, la cotización del viaje se realizará para " + ingresoCantidad + " pasajeros.");
    lugarOrigen(); // Llamada a la función lugarOrigen solo si la cantidad es válida
    break;  // Salir del bucle si la cantidad es válida
  } else {
    alert("Nuestros servicios se cotizan para grupos de mínimo 15 personas.");
    intentosFallidos++;
  }

  // Después de 3 intentos fallidos
  if (intentosFallidos === 3) {
    alert("Lamentamos no poder atender tu servicio. Esperamos tener la oportunidad de ayudarte en el futuro. ¡Hasta la próxima ocasión!");
    break;  // Salir del bucle si hay 3 intentos fallidos
  }
}


// SOLICITAR INFO: ORIGEN / DESTINO

// SOLICITAR INFO: ORIGEN
function lugarOrigen() {
  let opcionesLugarOrigen = prompt("Por favor, indícanos cuál es tu Ciudad/Municipio de recogida: \n1 - Bogotá (Dentro de la ciudad) \n2 - Soacha \n3 - Chía \n4 - Funza \n5 - La Calera \nX - Para finalizar");

  if (opcionesLugarOrigen.toUpperCase() === "X") {
      alert("Lamentamos no poder atender tu servicio. Esperamos tener la oportunidad de ayudarte en el futuro. ¡Hasta la próxima ocasión!");
      return;  // Salir de la función si se selecciona "X"
  }

  let direccionLugarOrigen = prompt("Por favor, indícanos la dirección de recogida: ");

  // Nombres lugares origen
  let lugaresOrigen = {
    "1": "Bogotá (Dentro de la ciudad)",
    "2": "Soacha",
    "3": "Chía",
    "4": "Funza",
    "5": "La Calera"
};

  // Obtener el nombre del lugar de origen
  let nombreLugarOrigen = lugaresOrigen[opcionesLugarOrigen];


// SOLICITAR INFO: DESTINO
let opcionesLugarDestino = prompt("Por favor, indícanos cuál es tu Ciudad/Municipio de destino: \n1 - Dentro de la ciudad/Municipio \n2 - Zipaquirá \n3 - Villavicencio \n4 - Guatavita \n5 - Medellín \n6 - Eje Cafetero \n7 - Santander");

  let direccionLugarDestino = prompt("Por favor, indícanos la dirección de destino:");
  
  // Nombres lugares origen
  let lugaresDestino = {
    "1": "Dentro de la ciudad/Municipio)",
    "2": "Zipaquirá",
    "3": "Villavicencio",
    "4": "Guatavita",
    "5": "Medellín",
    "6": "Eje Cafetero",
    "7": "Santander"
  };
  
  // Obtener el nombre del lugar de origen
  let nombreLugarDestino = lugaresDestino[opcionesLugarDestino];

  // Asignación de valor dependiendo la selección de destinos
  let costoViaje = 0;

  switch (opcionesLugarDestino) {
      case "1":
          costoViaje = 650000;
          break;
      case "2":
          costoViaje = 850000;
          break;
      case "3":
          costoViaje = 1500000;
          break;
      case "4":
          costoViaje = 950000;
          break;
      case "5":
          costoViaje = 6500000;
          break;
      case "6":
          costoViaje = 5500000;
          break;
      case "7":
          costoViaje = 4200000;
          break;
      default:
          alert("No tenemos disponibilidad para esta ciudad/municipio de destino");
          return;  // Salir de la función si no hay disponibilidad
  }

  alert("El costo del viaje desde " + nombreLugarOrigen + " a " + nombreLugarDestino + " es de " + costoViaje + " COP");
  console.log("Origen: " + nombreLugarOrigen + ", Destino: " + nombreLugarDestino + ", Costo: " + costoViaje);
}

