let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 20

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p1',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p1','El número secreto es menor');
        } else {
            asignarTextoElemento('p1','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p',`ya se sortearon todos los numeros posibles del 1 al ${numeroMaximo}`);
    }else {


if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto(); 
}else{
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;
        } 
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`coloca un numero del 1 al ${numeroMaximo}`);
    asignarTextoElemento('p1','')
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();