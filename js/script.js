//defino valor ticket
const valorTicket = 200;

//defino los porcentajes

let descuentoEstudiante = 0.80;
let descuentoTrainee = 0.50;
let descuentoJunior = 0.15;

//tomo los valores

/* const cantidad = document.querySelector('#cantidadentradas');
const categoria = document.querySelector('#cateselect'); */

const botonCalcular = document.querySelector('#calcular');
const botonReset = document.querySelector('#reset');
const parrafo = document.getElementById('totPagar');

function totalPagar() {

    const cantidad = document.getElementById("cantidadentradas").value;
    let categoria = document.getElementById("cateselect").value;

    //calcular valor total
    let totalValor = parseInt(cantidad) * valorTicket;

    //condiciones por descuento
    if (categoria == 1) {
        totalValor = totalValor - (totalValor * descuentoEstudiante)
    }
    else if (categoria == 2) {
        totalValor = totalValor - (totalValor * descuentoTrainee)
    }
    else if (categoria == 3) {
        totalValor = totalValor - (totalValor * descuentoJunior)
    }

    parrafo.innerHTML = "Total a pagar : $ " + totalValor;
}

//boton calcular
botonCalcular.addEventListener('click',totalPagar);
//boton reset

botonReset.addEventListener('click',()=> {
    parrafo.innerHTML = "Total a pagar : $ "
    cantidad.value = null;    
    
} )