
console.log("cezar")

function calcular() {
var comprimento1 = document.getElementById('comp1').value;
var peso1 = document.getElementById('peso1').value;

var comprimento2 = document.getElementById('comp2').value;
var peso2 = document.getElementById('peso2').value;

var calculo1 = parseInt(comprimento1) / parseInt(peso1)
var calculo2 = parseInt(comprimento2) / parseInt(peso2)
var total = calculo1 + calculo2

document.getElementById('res1').innerHTML = calculo1;
document.getElementById('res2').innerHTML = calculo2;
document.getElementById('res3', "kg").innerHTML = total;

}