

function calcPincipal () {
    var comprimento1 = document.getElementById('comp1').value;
    var peso1 = document.getElementById('peso1').value;

    var total1 = parseFloat(peso1) / parseFloat(comprimento1);

    if(comprimento1<1){
        alert("Comprimento nao pode ser menor que 1mm ")
    } if (peso1<=0){
        alert("Peso não pode ser menor ou igual a zero ")
    }

    document.getElementById('res1').innerHTML = total1.toFixed(3);
}

function calcDerivacao () {
    var comprimento2 = document.getElementById('comp2').value;
    var peso2 = document.getElementById('peso2').value;

    var total2 = parseFloat(peso2)/parseFloat(comprimento2);

    if(comprimento2<1){
        alert("Comprimento nao pode ser menor que 1mm ")
    } if (peso2<=0){
        alert("Peso não pode ser menor ou igual a zero ")
    }

    document.getElementById('res2').innerHTML = total2.toFixed(3);
}

function calcPesoTot() {

    var comprimento1 = document.getElementById('comp1').value;
    var peso1 = document.getElementById('peso1').value;
    var comprimento2 = document.getElementById('comp2').value;
    var peso2 = document.getElementById('peso2').value;
    
    var calculo1 = parseFloat(peso1) / parseFloat(comprimento1);
    var calculo2 = parseFloat(peso2) / parseFloat(comprimento2);
    
    var total = calculo1 + calculo2

    if (comprimento1=="" || peso1=="" || comprimento2=="" || peso2=="" ) {
        alert("Insira uma valor ")
    } 
    
    document.getElementById('res1').innerHTML = calculo1.toFixed(3)+" Kg";
    document.getElementById('res2').innerHTML = calculo2.toFixed(3)+" Kg";
    document.getElementById('res3', "kg").innerHTML = total.toFixed(3)+" Kg";
         
}