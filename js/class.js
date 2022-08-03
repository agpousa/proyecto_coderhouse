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