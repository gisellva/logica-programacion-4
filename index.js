//funcion que se encarga de manipular el dom, pasarle y recibir un valor de la funcion recursiva 
function calcularFibonacci() {
  
    const input = parseFloat(document.querySelector('.input').value);
    const resultadoDeFibonacci = calcularFibonacciTotal(input);
    const respuesta = document.querySelector('.respuesta');
    if(resultadoDeFibonacci === undefined){
        respuesta.innerText ='vuelve a intentarlo ';
    }
    else{
        respuesta.innerText = `El Fibonacci de ${input}  es: ${resultadoDeFibonacci}`;
    }
}
//funcion recursiva para calcular la secuencia y tambien verificar si es posible calcularlo 
function calcularFibonacciTotal(n) {
    if (isNaN(n)) {
        alert("El valor ingresado debe ser un numero.");
        return;
    }
    
    if (n >= 25) {
        alert("El número  ingresado debe ser menor que 25.");
        return;
    }

    if (n < 2) {
        return n;
    } else {
        return calcularFibonacciTotal(n - 1) + calcularFibonacciTotal(n - 2);
    }
}
