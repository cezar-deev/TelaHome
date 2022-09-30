
// VERIFICA ZERO //
function validaZero (comprimento1) {

    let valorValido = false;
    if(comprimento1>0){
        valorValido = true
    }
    return valorValido          
}

// VERIFICA ZERO //
function validaVazio (comprimento1) {

    let valorValido = false;
    if(comprimento1 !=""){
        valorValido = true
    }
    return valorValido   

}

export {validaZero, validaVazio}


/* function calcPrincipal () {
    var comprimento1 = document.getElementById('comp1').value;
    var peso1 = document.getElementById('peso1').value;

    var total1 = parseFloat(peso1) / parseFloat(comprimento1);

    let verificaZero = validaZero(comprimento1);
    let verificaVazio = validaVazio(comprimento1);

    if(verificaZero && verificaVazio ){

        var total1 = parseFloat(peso1) / parseFloat(comprimento1);

    } else {
        alert("Peso não pode ser menor ou igual a zero ")
    }

    document.getElementById('res1').innerHTML = total1.toFixed(3);
}  */