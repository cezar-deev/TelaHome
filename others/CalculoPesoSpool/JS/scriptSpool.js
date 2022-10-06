
                          
// VARIAVEIS E SELEÇAÕD DE ELEMENTOS

const compInput1 = document.getElementById('comp1');
const pesoInput1 = document.getElementById('peso1');
const resElement1 = document.getElementById('res1');

const compInput2 = document.getElementById('comp2');
const pesoInput2 = document.getElementById('peso2');
const resElement2 = document.getElementById('res2');

const quantConexInput1 = document.getElementById('quant1-conexao');
const pesoConexInput1  = document.getElementById('peso1-conexao');
const resConexElement1 = document.getElementById('res1-conexao');

const quantConexInput2 = document.getElementById('quant2-conexao');
const pesoConexInput2  = document.getElementById('peso2-conexao');
const resConexElement2 = document.getElementById('res2-conexao');

const quantConexInput3 = document.getElementById('quant3-conexao');
const pesoConexInput3  = document.getElementById('peso3-conexao');
const resConexElement3 = document.getElementById('res3-conexao');

const quantConexInput4 = document.getElementById('quant4-conexao');
const pesoConexInput4  = document.getElementById('peso4-conexao');
const resConexElement4 = document.getElementById('res4-conexao');

const quantConexInput5 = document.getElementById('quant5-conexao');
const pesoConexInput5  = document.getElementById('peso5-conexao');
const resConexElement5 = document.getElementById('res5-conexao');

const compSpPriInput1 = document.getElementById('item1-spool-pricnipal');
const compSpPriInput2 = document.getElementById('item2-spool-pricnipal');
const compSpPriInput3 = document.getElementById('item3-spool-pricnipal');
const compSpPriInput4 = document.getElementById('item4-spool-pricnipal');
const compSpPriInput5 = document.getElementById('item5-spool-pricnipal');
const resSpPriElement = document.getElementById('res-tubo-comp-spool');

const compSpDerivInput1 = document.getElementById('item1-spool-derivacao');
const compSpDerivInput2 = document.getElementById('item2-spool-derivacao');
const compSpDerivInput3 = document.getElementById('item3-spool-derivacao');
const compSpDerivInput4 = document.getElementById('item4-spool-derivacao');
const compSpDerivInput5 = document.getElementById('item5-spool-derivacao');
const resSpDerivElement = document.getElementById('res-conexao-comp-spool-d');


// FUNÇÕES
// ---------------------  FUNÇÕES DE CALCULOS DE MATERIAL - TUBO --------------------- //
function calcPesoMilimetro(peso,comprimento) {
    var pesoMM = parseFloat(peso) / parseFloat(comprimento);
    if(comprimento<1){
        alert("Comprimento nao pode ser menor que 1mm ")
    } if (peso=0){
        alert("Peso não pode ser menor ou igual a zero ")
    }
    return pesoMM;
} 

function tuboPrincipal() {
    const resultado = calcPesoMilimetro(pesoInput1.value,compInput1.value).toFixed(3);
    resElement1.innerText = resultado;
    return resultado;
}

function tuboDerivacao() {
    const resultado = calcPesoMilimetro(pesoInput2.value,compInput2.value).toFixed(3);
    resElement2.innerText = resultado;
    return resultado;
}

// ---------------------  FUNÇÕES DE MATERIAL - CONEXÃO --------------------- //

function calcPesoMaterail(peso,quantidade) {
    if (quantidade=="" || peso==""){
        var calculo = 0;
    } else {  
            calculo = parseFloat(peso) / parseInt(quantidade);
    }  
    return calculo;    
}

function PesoConexao_1() {
    const resultado = calcPesoMaterail(pesoConexInput1.value,quantConexInput1.value).toFixed(1);
    resConexElement1.innerText = resultado;
    return resultado;
}

function PesoConexao_2() {
    const resultado = calcPesoMaterail(pesoConexInput2.value,quantConexInput2.value).toFixed(1);
    resConexElement2.innerText = resultado;
    return resultado;
}

function PesoConexao_3() {
    const resultado = calcPesoMaterail(pesoConexInput3.value,quantConexInput3.value).toFixed(1);
    resConexElement3.innerText = resultado;
    return resultado;
}

function PesoConexao_4() {
    const resultado = calcPesoMaterail(pesoConexInput4.value,quantConexInput4.value).toFixed(1);
    resConexElement4.innerText = resultado;
    return resultado;
}

function PesoConexao_5() {
    const resultado = calcPesoMaterail(pesoConexInput5.value,quantConexInput5.value).toFixed(1);
    resConexElement5.innerText = resultado;
    return resultado;
}

function PesoConecaoTotal() {
    PesoConexao_1 ()
    PesoConexao_2 ()
    PesoConexao_3 ()
    PesoConexao_4 ()
    PesoConexao_5 ()
}

// ---------------------  FUNÇÕES DE CALCULOS SPOOL -TUBOS --------------------- //

function compTuboSpool(comp1,comp2,comp3,comp4,comp5) {

    const compTotal = comp1 +++ comp2 +++ comp3 +++ comp4 +++ comp5
    return compTotal
}

// 1/4 - Soma dos Comprimentos - Tubo Pricipal

function compTuboSpoolPrincipal() {
    const compTotal = compTuboSpool (
        compSpPriInput1.value,
        compSpPriInput2.value,
        compSpPriInput3.value,
        compSpPriInput4.value,
        compSpPriInput5.value,
    )
    resSpPriElement.innerText = compTotal+" mm";
    return compTotal;    
}













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