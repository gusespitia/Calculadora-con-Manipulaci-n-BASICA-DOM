const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


// btn.addEventListener('click', btnOnClick);

function btnOnClick(signo) {
  
  const numero1 = parseInt(input1.value);
  const numero2 = parseInt(input2.value);

if (isNaN(numero1) || isNaN(numero2)){
  pResult.innerText = "Ingresa números válidos en ambos campos.";
    return;
}

  if (signo === 'suma'){
    let result = numero1 + numero2;
    pResult.innerText = "Tu Suma es: "  + result + ".";
    return;
  } 

if (signo === 'resta') {
  let result = numero1 - numero2;
  pResult.innerText = "Tu Resta es: " + result +  ".";
  return;
}
if (signo === 'multiplicar') {
  let result = numero1 * numero2;
  pResult.innerText = "Tu Multiplicacion es: " + result +  ".";
  return;
}
if (signo === 'dividir') {
  let result = numero1 / numero2;
  pResult.innerText = "Tu Division es: " + result +  ".";
  return;

}

};
