let presupuesto = 0;

/*
let gasto = {
    valor: 0,
    descripcion: "",
    mostrarGasto: function() {
	console.log(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`);},
    actualizarDescripcion: function(desc) {this.descripcion=desc},
    actualizarValor: function(val) {this.valor=val}
}
*/
function actualizarPresupuesto( presup ) {
    if ( presup >= 0 ) {
        presupuesto = presup;
        return presup;
    } else {
        console.log(`ERROR. El presupuesto es negativo`);
        return -1;
    } 
}

function mostrarPresupuesto() {
    console.log(`Tu presupuesto actual es de ` + presupuesto + ` €`);
}

function CrearGasto( val, desc ) {

    if ( val >= 0 )
        this.valor = val;
    else
        this.valor = 0;

    this.descripcion = desc;

    this.mostrarGasto = function() {console.log(`Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`)};
    
    this.actualizarDescripcion = function(desc) {this.descripcion=desc};

    this.actualizarValor = function(val) {if (val>=0) this.valor=val};
}

// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto
}
