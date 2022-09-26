

// --- SELEÇÃO DE ELEMENTOS --- // 

const compPrincipal = document.querySelector("#compP");
const pesoPrincipal = document.querySelector("#pesoP");
const resultPrincipal = document.querySelector("#resultP");

const CompDeriv = document.querySelector("#compD");
const pesoDeriv = document.querySelector("#pesoD");
const resultDeriv = document.querySelector("#resultD");


// --- FUNÇÕES  --- //



function pesoTubPrincipal() {

    let peso = pesoPrincipal/compPrincipal
    console.log(peso)
}


// --- INICIALIZAÇÃO DAS TABELAS  --- //
pesoTubPrincipal();
