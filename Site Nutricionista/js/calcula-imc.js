var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";	

var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        pesoEhValido = false;
        pacientes[i].querySelector(".info-imc").textContent = "Peso Invalido";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(!alturaEhValida){
        alturaEhValida = false;
        pacientes[i].querySelector(".info-imc").textContent = "Altura inválida";
        pacientes[i].classList.add("paciente-invalido");
    }

    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        pacientes[i].querySelector(".info-imc").textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <=3.00){
        return true;
    } else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}