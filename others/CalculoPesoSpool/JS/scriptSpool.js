
                          
// ---------------------  CALCULOS DE MATERIAL - TUBO --------------------- //

function calcPesoMilimetro(peso,comprimento) {
    var pesoMM = parseFloat(peso) / parseFloat(comprimento);
    if(comprimento<1){
        alert("Comprimento nao pode ser menor que 1mm ")
    } if (peso=0){
        alert("Peso não pode ser menor ou igual a zero ")
    }
    return pesoMM
} 


function tuboPrincipal() {
    var comprimento1 = document.getElementById('comp1').value;
    var peso1 = document.getElementById('peso1').value;
    var resultado = calcPesoMilimetro(peso1,comprimento1).toFixed(3);
    document.getElementById('res1').innerHTML = resultado
    return resultado
}

function tuboDerivacao() {
    var comprimento2 = document.getElementById('comp2').value;
    var peso2 = document.getElementById('peso2').value;
    var resultado = calcPesoMilimetro(peso2,comprimento2).toFixed(3);
    document.getElementById('res2').innerHTML = resultado
    return resultado
}


/* REFATORADO
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
*/


// ---------------------  CALCULOS DE MATERIAL - CONEXÃO --------------------- //

    function calcPesoMaterail(peso,quantidade) {
        if (quantidade=="" || peso==""){
            var calculo = 0;
        } else {  
                calculo = parseFloat(peso) / parseInt(quantidade);
        }  
        return calculo    
    }

    function PesoConexao_1() {
        var quantidade = document.getElementById('comp1-conexao').value;
        var peso = document.getElementById('peso1-conexao').value;
        var resultado = calcPesoMaterail(peso,quantidade).toFixed(1);
        document.getElementById('res1-conexao').innerHTML = resultado;
        return resultado;
    }

    function PesoConexao_2() {
        var quantidade = document.getElementById('comp2-conexao').value;
        var peso = document.getElementById('peso2-conexao').value;
        var resultado = calcPesoMaterail(peso,quantidade).toFixed(1);
        document.getElementById('res2-conexao').innerHTML = resultado;
        return resultado;
    }

    function PesoConexao_3() {
        var quantidade = document.getElementById('comp3-conexao').value;
        var peso = document.getElementById('peso3-conexao').value;
        var resultado = calcPesoMaterail(peso,quantidade).toFixed(1);
        document.getElementById('res3-conexao').innerHTML = resultado;
        return resultado;
    }

    function PesoConexao_4() {
        var quantidade = document.getElementById('comp4-conexao').value;
        var peso = document.getElementById('peso4-conexao').value;
        var resultado = calcPesoMaterail(peso,quantidade).toFixed(1);
        document.getElementById('res4-conexao').innerHTML = resultado;
        return resultado;
    }

    function PesoConexao_5() {
        var quantidade = document.getElementById('comp5-conexao').value;
        var peso = document.getElementById('peso5-conexao').value;
        var resultado = calcPesoMaterail(peso,quantidade).toFixed(1);
        document.getElementById('res5-conexao').innerHTML = resultado;
        return resultado;
    }

    function calcConexaoTotal() {

    PesoConexao_1()
    PesoConexao_2()
    PesoConexao_3()
    PesoConexao_4()
    PesoConexao_5()

    }





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
                calculaConecaoTodas () = calculo.toFixed(1);
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


// >>  CALCULOS SPOOL  - TUBOS << //

// 1/4 - Soma dos Comprimentos - Tubo Pricipal
function calculaCompTuboSpool () {

    var compTubSp1 = document.getElementById('item1-spool-pricnipal').value;
    var compTubSp2 = document.getElementById('item2-spool-pricnipal').value;
    var compTubSp3 = document.getElementById('item3-spool-pricnipal').value;
    var compTubSp4 = document.getElementById('item4-spool-pricnipal').value;
    var compTubSp5 = document.getElementById('item5-spool-pricnipal').value;
    
    var compTotal = compTubSp1 +++ compTubSp2 +++ compTubSp3 +++ compTubSp4 +++ compTubSp5;
    document.getElementById('res-tubo-comp-spool').innerHTML = compTotal+" mm";

}



// 2/4 - Soma dos Comprimentos - Tubo derivacao
function calculaCompTuboSpoolDeriv () {

    var compTubSp1d = document.getElementById('item1-spool-derivacao').value;
    var compTubSp2d = document.getElementById('item2-spool-derivacao').value;
    var compTubSp3d = document.getElementById('item3-spool-derivacao').value;
    var compTubSp4d = document.getElementById('item4-spool-derivacao').value;
    var compTubSp5d = document.getElementById('item5-spool-derivacao').value;
    
    var compTotal = compTubSp1d +++ compTubSp2d +++ compTubSp3d +++ compTubSp4d +++ compTubSp5d;
    document.getElementById('res-conexao-comp-spool-d').innerHTML = compTotal+" mm";;

}


// 3/4 - Calculo do Peso - Tubo Pricipal
function calculaPesoTuboSpool() {

    var comprimento1 = document.getElementById('comp1').value;
    var peso1 = document.getElementById('peso1').value;
    var total1 = parseFloat(peso1) / parseFloat(comprimento1);

    var compTubSp1 = document.getElementById('item1-spool-pricnipal').value;
    var compTubSp2 = document.getElementById('item2-spool-pricnipal').value;
    var compTubSp3 = document.getElementById('item3-spool-pricnipal').value;
    var compTubSp4 = document.getElementById('item4-spool-pricnipal').value;
    var compTubSp5 = document.getElementById('item5-spool-pricnipal').value;

    var compTotal = compTubSp1 +++ compTubSp2 +++ compTubSp3 +++ compTubSp4 +++ compTubSp5;
    resultTuboSpoolP =   parseFloat(compTotal) * parseFloat(total1)

    document.getElementById('res-tubo-peso-spool').innerHTML = resultTuboSpoolP.toFixed(2)+" kg";
    return compTotal
}


// 4/4 - Calculo do Peso  - Tubo Derivação
function calculaPesoSpoolDeriv() {

    var comprimento2 = document.getElementById('comp2').value;
    var peso2 = document.getElementById('peso2').value;
    var total2 = parseFloat(peso2)/parseFloat(comprimento2);

    var compTubSp1d = document.getElementById('item1-spool-derivacao').value;
    var compTubSp2d = document.getElementById('item2-spool-derivacao').value;
    var compTubSp3d = document.getElementById('item3-spool-derivacao').value;
    var compTubSp4d = document.getElementById('item4-spool-derivacao').value;
    var compTubSp5d = document.getElementById('item5-spool-derivacao').value;
    var compTotal2 = compTubSp1d +++ compTubSp2d +++ compTubSp3d +++ compTubSp4d +++ compTubSp5d;

    resultTuboSpoolDeriv =   parseFloat(compTotal2) * parseFloat(total2)
    
    document.getElementById('res-conexao-peso-spool').innerHTML = resultTuboSpoolDeriv.toFixed(2)+" kg";
    return compTotal2
}



// 4/4 - Botao Calcular Tubo
function calculaCompPeso() {

    calculaCompTuboSpool()
    calculaPesoTuboSpool()
    PesoSpoolFinal () 
}

// 4/4 - Botao Calcular Derivacao
function calculaCompPesoDeriv() {

    calculaCompTuboSpoolDeriv()
    calculaPesoSpoolDeriv()
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

                           // >>  CALCULOS SPOOL - CONEXÕES  << //


function calculaConecaoTodasSP() {

    calcPesoConexaoSP_1 ()
    calcPesoConexaoSP_2 ()
    calcPesoConexaoSP_3 ()
    calcPesoConexaoSP_4 ()
    calcPesoConexaoSP_5 ()
    calculaCompTuboSpool ()

    function calcPesoConexaoSP_1 () {

        var quantidadeConexao = document.getElementById('qtd1-conexaoSP').value;
        var pesoConexao = document.getElementById('peso1-conexaoSP').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res1-conexaoSP').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res1-conexaoSP').innerHTML = calculo.toFixed(1);
            }    
    }

    function calcPesoConexaoSP_2 () {

        var quantidadeConexao = document.getElementById('qtd2-conexaoSP').value;
        var pesoConexao = document.getElementById('peso2-conexaoSP').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res2-conexaoSP').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res2-conexaoSP').innerHTML = calculo.toFixed(2);
            }    
    }

    function calcPesoConexaoSP_3 () {

        var quantidadeConexao = document.getElementById('qtd3-conexaoSP').value;
        var pesoConexao = document.getElementById('peso3-conexaoSP').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res3-conexaoSP').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res3-conexaoSP').innerHTML = calculo.toFixed(2);
            }    
    }

    function calcPesoConexaoSP_4 () {

        var quantidadeConexao = document.getElementById('qtd4-conexaoSP').value;
        var pesoConexao = document.getElementById('peso4-conexaoSP').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res4-conexaoSP').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res4-conexaoSP').innerHTML = calculo.toFixed(2);
            }    
    }


    function calcPesoConexaoSP_5 () {

        var quantidadeConexao = document.getElementById('qtd5-conexaoSP').value;
        var pesoConexao = document.getElementById('peso5-conexaoSP').value;

        if (quantidadeConexao=="" || pesoConexao==""){
            document.getElementById('res5-conexaoSP').innerHTML = 0;
        } else {  
                var calculo = parseFloat(pesoConexao) / parseInt(quantidadeConexao);
                document.getElementById('res5-conexaoSP').innerHTML = calculo.toFixed(2);
            }    
    }

    function calculaCompTuboSpool () {

        var qtdConexaoSp1 = document.getElementById('qtd1-conexaoSP').value;
        var qtdConexaoSp2 = document.getElementById('qtd2-conexaoSP').value;
        var qtdConexaoSp3 = document.getElementById('qtd3-conexaoSP').value;
        var qtdConexaoSp4 = document.getElementById('qtd4-conexaoSP').value;
        var qtdConexaoSp5 = document.getElementById('qtd5-conexaoSP').value;
        
        var compTotal = qtdConexaoSp1 +++ qtdConexaoSp2 +++ qtdConexaoSp3 +++ qtdConexaoSp4 +++ qtdConexaoSp5;
        document.getElementById('res-qtd-conexao-spool').innerHTML = compTotal;
    
    
    }

}

function PesoSpoolFinal () {

    console.log(calculaPesoTuboSpool())
    console.log(calculaPesoSpoolDeriv())
  
    
}