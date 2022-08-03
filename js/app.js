const integrantes = [];

let mayor = confirm("Bienvenido a City Hotel Boutique" + "\n" + "Eres mayor de 18 años ?");

function solicitarParticipante (){

    let huesped = prompt("Ingrese el nombre de los huespedes (Uno a la vez)" + "\n" + "Para terminar ingrese la palabra ESC (En mayusculas)")
    let i = 1;
    integrantes.push(huesped)
    while(huesped != "ESC"){

        alert("Huesped n° " + i + " " + huesped)

        huesped = prompt("Ingrese el nombre de los huespedes (Uno a la vez)" + "\n" + "Para terminar ingrese la palabra ESC (En mayusculas)")
        integrantes.push(huesped)
        i++ 
    }
    integrantes.pop()
    let datos = confirm("Usted ingreso " + (i - 1) + " huespedes" + "\n" + "Los huespedes son: "+ "\n" + integrantes.join("\n")+ "\n" + "\n" +"¿Los datos son correctos?");
    if(datos) {
        alert("¡A DISFRUTAR!")
        for (const element of arrayHabitaciones) {
            element.desscripcionCompleta();
        }

    }else{
        integrantes.splice(0,integrantes.length)
        let huesped = prompt("Vuelva a ingresar el nombre de los huespedes (Uno a la vez)" + "\n" + "Para terminar ingrese la palabra ESC (En mayusculas)")
        let i = 1;
        integrantes.push(huesped)
        while(huesped != "ESC"){
    
            alert("Huesped n° " + i + " " + huesped)
    
            huesped = prompt("Ingrese el nombre de los huespedes (Uno a la vez)" + "\n" + "Para terminar ingrese la palabra ESC (En mayusculas)")
            integrantes.push(huesped)
            i++ 
        }  
            integrantes.pop()
    let datos = confirm("Usted ingreso " + (i - 1) + " huespedes" + "\n" + "Los huespedes son: "+ "\n" + integrantes.join("\n")+ "\n" + "\n" +"¿Los datos son correctos?");
    if(datos) {
        alert("¡A DISFRUTAR!")
        for (const element of arrayHabitaciones) {
            element.desscripcionCompleta();
        }
    }else{
        alert("Perdiste tu oportunidad")
    }
    }
}

if (mayor){ 
    alert("Bienvenido al sitio") ;
    solicitarParticipante ();

}else {

    alert("No tienes la edad suficiente para reservar una habitacion") ;
}