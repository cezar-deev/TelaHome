
// <<  CALCULOS DE MATERIAL - TUBO >> //


function calcPrincipal() {
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



// <<  CALCULOS DE MATERIAL - CONEXÃO >> //

function calculaConecaoTodas () {

    calcPesoConexao_1 ()
    calcPesoConexao_2 ()
    calcPesoConexao_3 ()
    calcPesoConexao_4 ()
    calcPesoConexao_5 ()

    function calcPesoConexao_1 () {

        var quantidadeConexao = document.getElementById('comp1-conexao').value;
        var pesoConexao = document.getElementById('peso1-conexao').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res1-conexao').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res1-conexao').innerHTML = calculo.toFixed(1);
            }    
    }

    function calcPesoConexao_2 () {

        var quantidadeConexao = document.getElementById('comp2-conexao').value;
        var pesoConexao = document.getElementById('peso2-conexao').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res2-conexao').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res2-conexao').innerHTML = calculo.toFixed(2);
            }    
    }

    function calcPesoConexao_3 () {

        var quantidadeConexao = document.getElementById('comp3-conexao').value;
        var pesoConexao = document.getElementById('peso3-conexao').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res3-conexao').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res3-conexao').innerHTML = calculo.toFixed(2);
            }    
    }

    function calcPesoConexao_4 () {

        var quantidadeConexao = document.getElementById('comp4-conexao').value;
        var pesoConexao = document.getElementById('peso4-conexao').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res4-conexao').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res4-conexao').innerHTML = calculo.toFixed(2);
            }    
    }


    function calcPesoConexao_5 () {

        var quantidadeConexao = document.getElementById('comp5-conexao').value;
        var pesoConexao = document.getElementById('peso5-conexao').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res5-conexao').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res5-conexao').innerHTML = calculo.toFixed(2);
            }    
    }

}


// >>  CALCULOS SPOOL  << //

//Soma dos Comprimentos - Tubo Pricipal
function calculaCompTuboSpool () {

    var compTubSp1 = document.getElementById('item1-spool-pricnipal').value;
    var compTubSp2 = document.getElementById('item2-spool-pricnipal').value;
    var compTubSp3 = document.getElementById('item3-spool-pricnipal').value;
    var compTubSp4 = document.getElementById('item4-spool-pricnipal').value;
    var compTubSp5 = document.getElementById('item5-spool-pricnipal').value;
    
    var compTotal = compTubSp1 +++ compTubSp2 +++ compTubSp3 +++ compTubSp4 +++ compTubSp5;
    document.getElementById('res-tubo-comp-spool').innerHTML = compTotal;


}

// calculos do comprimento x peso  - Tubo Pricipal
function calculaPesoTuboSpool() {
    
    var resultTuboSpool = calcPrincipal() * calculaCompTuboSpool()
    document.getElementById('res-tubo-peso-spool').innerHTML = resultTuboSpool ;
}


// Nao permite digitar virgula  - Tubo Pricipal
function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode( key );
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if( !regex.test(key) ) {
       theEvent.returnValue = false;
       if(theEvent.preventDefault) theEvent.preventDefault();
    }
 }


//Soma dos Comprimentos - Tubo derivacao
function calculaCompTuboSpoolDeriv () {

    var compTubSp1d = document.getElementById('item1-spool-derivacao').value;
    var compTubSp2d = document.getElementById('item2-spool-derivacao').value;
    var compTubSp3d = document.getElementById('item3-spool-derivacao').value;
    var compTubSp4d = document.getElementById('item4-spool-derivacao').value;
    var compTubSp5d = document.getElementById('item5-spool-derivacao').value;
    
    var compTotal = compTubSp1d +++ compTubSp2d +++ compTubSp3d +++ compTubSp4d +++ compTubSp5d;
    document.getElementById('res-tubo-comp-spool-d').innerHTML = compTotal;


}