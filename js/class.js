class habitacion {
    
    constructor(nombre,precio,){
        
        this.nombre = nombre;
        this.precio = precio;
    }

    desscripcionCompleta(){

       alert("la habitacion " + this.nombre + " cuesta $" + this.precio);

    }

    
}

let arrayHabitaciones = new Array();
arrayHabitaciones.push(new habitacion("Doble Estandar",10000));
arrayHabitaciones.push(new habitacion("Doble Superior",15000));
arrayHabitaciones.push(new habitacion("Deluxer",25000));


function precio(a){
  return  arrayHabitaciones[a].precio
}


let habitacion1 = document.getElementById("habitacion1")
let habitacion2 = document.getElementById("habitacion2")
let habitacion3 = document.getElementById("habitacion3")

habitacion1.innerHTML = "$" + precio(0)
habitacion2.innerHTML = "$" + precio(1)
habitacion3.innerHTML = "$" + precio(2)

