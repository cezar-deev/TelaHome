
                          
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
const resSpPriCompElement = document.getElementById('res-tubo-comp-spool');
const resSpPriPesoElement = document.getElementById('res-tubo-peso-spool');

const compSpDerivInput1 = document.getElementById('item1-spool-derivacao');
const compSpDerivInput2 = document.getElementById('item2-spool-derivacao');
const compSpDerivInput3 = document.getElementById('item3-spool-derivacao');
const compSpDerivInput4 = document.getElementById('item4-spool-derivacao');
const compSpDerivInput5 = document.getElementById('item5-spool-derivacao');
const resSpDerivCompElement = document.getElementById('res-conexao-comp-spool-d');
const resSpDerivPesoElement = document.getElementById('res-conexao-peso-spool-d');

const quantConexSpoolInput1 = document.getElementById('qtd1-conexaoSP');
const pesoConexSpoolInput1 = document.getElementById('peso1-conexaoSP');
const resConexSpoolElemnt1 = document.getElementById('res1-conexaoSP');

const quantConexSpoolInput2 = document.getElementById('qtd2-conexaoSP');
const pesoConexSpoolInput2 = document.getElementById('peso2-conexaoSP');
const resConexSpoolElemnt2 = document.getElementById('res2-conexaoSP');

const quantConexSpoolInput3 = document.getElementById('qtd3-conexaoSP');
const pesoConexSpoolInput3 = document.getElementById('peso3-conexaoSP');
const resConexSpoolElemnt3 = document.getElementById('res3-conexaoSP');

const quantConexSpoolInput4 = document.getElementById('qtd4-conexaoSP');
const pesoConexSpoolInput4 = document.getElementById('peso4-conexaoSP');
const resConexSpoolElemnt4 = document.getElementById('res4-conexaoSP');

const quantConexSpoolInput5 = document.getElementById('qtd5-conexaoSP');
const pesoConexSpoolInput5 = document.getElementById('peso5-conexaoSP');
const resConexSpoolElemnt5 = document.getElementById('res5-conexaoSP');

const ConexSpoolTotalElement = document.getElementById('peso-conexaoSP-total');

const pesoTuboFinalElement = document.getElementById('peso-tubo-final');
const pesoConexaoFinalElement = document.getElementById('peso-conexao-final');
const pesoSpoolFinalElement = document.getElementById('peso-spool-final');




// FUNÇÕES
// ---------------------  MATERIAL - TUBO --------------------- //

function calcPesoMilimetro(peso,comprimento) {
    var pesoMM = parseFloat(peso) / parseFloat(comprimento);
    if(comprimento = "" | peso == ""){
        return 0
    } else return pesoMM;
} 

function tuboPrincipal() {
    const resultado = calcPesoMilimetro(pesoInput1.value,compInput1.value).toFixed(2);
    resElement1.innerText = resultado+" kg";
    return resultado;
}

function tuboDerivacao() {
    const resultado = calcPesoMilimetro(pesoInput2.value,compInput2.value).toFixed(2);
    resElement2.innerText = resultado+" kg";
    return resultado;
}

function btnCalcularTubos() {
    tuboPrincipal()
    tuboDerivacao()     
}

// ---------------------  MATERIAL - CONEXÃO --------------------- //

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

// ---------------------  SPOOL - TUBO --------------------- //

// Nao permite digitar virgula
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


// Função de calculo dos comprimento do tubo do Spool
function compTuboSpool(comp1,comp2,comp3,comp4,comp5) {
    const compTotalTubo = comp1 +++ comp2 +++ comp3 +++ comp4 +++ comp5
    return compTotalTubo
}

// Função de calculo dos peso do tubo do Spool
function pesoTuboSpool(comp,peso) {
    const pesoTotalTubo = comp * peso
    return pesoTotalTubo
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
    resSpPriCompElement.innerText = compTotal+" mm";
    return compTotal    
}

// 2/4 - Soma dos Comprimentos - Tubo Derivacao
function compTuboSpoolDerivacao() {
    const compTotal = compTuboSpool (
        compSpDerivInput1.value,
        compSpDerivInput2.value,
        compSpDerivInput3.value,
        compSpDerivInput4.value,
        compSpDerivInput5.value,
    )
    resSpDerivCompElement.innerText = compTotal+" mm";
    return compTotal;    
}

// 3/4 - Tubo Spool Principal
function PesoTuboSpoolPrincipal() {
    const resPesoSpPrincipal = pesoTuboSpool(parseFloat(compTuboSpoolPrincipal()),parseFloat(tuboPrincipal()))
    resSpPriPesoElement.innerText = resPesoSpPrincipal.toFixed(1)+" kg";
    return resPesoSpPrincipal.toFixed(3)
    
}

// 4/4 - Tubo SPool Derivacao
function PesoTuboSpoolDerivacao() {
    const resPesoSpDerivacao = pesoTuboSpool(parseFloat(compTuboSpoolDerivacao()),parseFloat(tuboDerivacao()))
    resSpDerivPesoElement.innerText = resPesoSpDerivacao.toFixed(1)+" kg";
    return resPesoSpDerivacao.toFixed(3)
}




// ---------------------  SPOOL - CONEXÃO --------------------- //

//Calcula Peso Concexão - Regra
function pesoConexaoSpool(pesoConexao,qtdConexao) {
    var resPesoConexSpool = 0;

    if (pesoConexao=="" || qtdConexao==""){
        resPesoConexSpool = 0;
    }   else {  
            resPesoConexSpool = parseFloat(pesoConexao) / parseInt(qtdConexao);
        } 
    return resPesoConexSpool 
}

//Calcula Peso Concexão - dados
function pesoConexaoSpool_1() {
    const resultado = pesoConexaoSpool (pesoConexSpoolInput1.value,quantConexSpoolInput1.value)
    resConexSpoolElemnt1.innerText = resultado.toFixed(1);
return resultado.toFixed(1);
}

function pesoConexaoSpool_2() {
    const resultado = pesoConexaoSpool (pesoConexSpoolInput2.value,quantConexSpoolInput2.value)
    resConexSpoolElemnt2.innerText = resultado.toFixed(1);
return resultado.toFixed(1);
}

function pesoConexaoSpool_3() {
    const resultado = pesoConexaoSpool (pesoConexSpoolInput3.value,quantConexSpoolInput3.value)
    resConexSpoolElemnt3.innerText = resultado.toFixed(1);
return resultado.toFixed(1);
}

function pesoConexaoSpool_4() {
    const resultado = pesoConexaoSpool (pesoConexSpoolInput4.value,quantConexSpoolInput4.value)
    resConexSpoolElemnt4.innerText = resultado.toFixed(1);
return resultado.toFixed(1);
}

function pesoConexaoSpool_5() {
    const resultado = pesoConexaoSpool (pesoConexSpoolInput5.value,quantConexSpoolInput5.value)
    resConexSpoolElemnt5.innerText = resultado.toFixed(1);
return resultado.toFixed(1);
}

//Soma Peso das Conexões - Regra
function somaPeso(peso1,peso2,peso3,peso4,peso5) {
    resultado = (peso1 +++ peso2 +++ peso3 +++ peso4 +++ peso5)
return resultado
}

//Soma Peso das Conexões - dados
function pesoConexaoSpoolTotal() {
    const resultado = somaPeso(
                               parseFloat(pesoConexaoSpool_1()),parseFloat(pesoConexaoSpool_2()),
                               parseFloat(pesoConexaoSpool_3()),parseFloat(pesoConexaoSpool_4()),
                               parseFloat(pesoConexaoSpool_5())
    ) 
    ConexSpoolTotalElement.innerText = resultado.toFixed(1)+" kg";
    pesoConexaoFinalElement.innerText = resultado.toFixed(1)+" kg";
    pesoTuboFinal()
    return resultado;   
}

function btnCalculoFinal() {
    btnCalcularTubos()
    PesoConecaoTotal()
    
    PesoTuboSpoolPrincipal()
    PesoTuboSpoolDerivacao()

    pesoConexaoSpoolTotal()
    pesoTuboFinal()

    pesoSpoolFinal()

}

// ---------------------  SPOOL - FINAL --------------------- //

/*
function calcPesoTuboFinal (pesoPrincipal,pesoDerivacao) {
    const pesoTuboFinal = pesoPrincipal +++ pesoDerivacao
return pesoTuboFinal
}


//Peso Final do Tubo
function pesoTuboFinal() {
    const resultado = calcPesoTuboFinal (
                                         parseFloat(PesoTuboSpoolPrincipal()),
                                         parseFloat(PesoTuboSpoolDerivacao())
    )
    pesoTuboFinalElement.innerText = resultado.toFixed(1)+" kg";
return resultado 
}
*/

function pesoTuboFinal() {
    var pesoPrincipal = parseFloat(PesoTuboSpoolPrincipal())
    var PesoDerivacao = parseFloat(PesoTuboSpoolDerivacao())
    var resultado = pesoPrincipal +++ PesoDerivacao
    pesoTuboFinalElement.innerText = resultado.toFixed(1)+" kg";
return resultado 

}

function exibir () {
    var resultado = parseFloat(pesoTuboFinal())
    if ( resultado > 0) {
        pesoSpoolFinal()
    }
    console.logo(resultado)
}

// Peso Final do Spool
function pesoSpoolFinal() {
    var pesoTubo = parseFloat(pesoTuboFinal());
    var pesoConexao = parseFloat(pesoConexaoSpoolTotal());
    var resultado = pesoTubo +++ pesoConexao
    pesoSpoolFinalElement.innerText = resultado.toFixed(1)+" kg";  
} 



// ------------------------- EVENTOS --------------------- //

// evento de mouseover :  É ativado quando o mouse passar em cima do elemento que criamos no evento;
var title = document.getElementById('comp1');

title.addEventListener("mouseover", function() { // É passado uma callBack aqui

  this.style.backgroundColor = "#F0FFF0";

});


// evento de mouseout :  É ativado quando o mouse sai cima do elemento que criamos no evento;
title.addEventListener("mouseout", function() { // É passado uma callBack aqui

  this.style.backgroundColor = "#FFE4E1";

});



