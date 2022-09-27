
console.log("cezar")

function calcular() {
var comprimento1 = document.getElementById('comp1').value;
var peso1 = document.getElementById('peso1').value;

var calculo = parseInt(comprimento1) / parseInt(peso1)

document.getElementById('res1').innerHTML = calculo;

}