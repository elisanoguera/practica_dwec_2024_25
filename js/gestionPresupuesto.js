let presupuesto = 0;

function actualizarPresupuesto(presup) {
    if ( presup < 0 ) {
        console.log( "Tu presupuesto es menor que 0" );
        return(-1);
    } else {
        presupuesto=presup;
        return(presup);
    } 
}

function mostrarPresupuesto() {
    // TODO
}

function CrearGasto() {
    // TODO
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
