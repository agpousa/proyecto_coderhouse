function precio(a){
    return  arrayHabitaciones[a].precio
  }

let btn = document.getElementById("btn");
let precioHabitacion1 = document.getElementById("precioHabitacion1");
let precioHabitacion2 = document.getElementById("precioHabitacion2");
let precioHabitacion3 = document.getElementById("precioHabitacion3");

  let habitacion1 = document.getElementById("habitacion1");
  let habitacion2 = document.getElementById("habitacion2");
  let habitacion3 = document.getElementById("habitacion3");

btn.addEventListener("click",()=>{

    if(precioHabitacion1.value && precioHabitacion2.value && precioHabitacion3.value != ""){
        
        arrayHabitaciones[0].precio = parseInt(precioHabitacion1.value);
        arrayHabitaciones[1].precio = parseInt(precioHabitacion2.value);
        arrayHabitaciones[2].precio = parseInt(precioHabitacion3.value);

        habitacion1.textContent = "$" + precio(0);
        habitacion2.textContent = "$" + precio(1);
        habitacion3.textContent = "$" + precio(2);

        console.log("click")
        console.log(arrayHabitaciones[0].precio)
        console.log(arrayHabitaciones[1].precio)
        console.log(arrayHabitaciones[2].precio)

        precioHabitacion1.value = "";
        precioHabitacion2.value = "";
        precioHabitacion3.value = "";
    }else{
        alert("ingrese los valores de totas las habitaciones")
    }

    



});
