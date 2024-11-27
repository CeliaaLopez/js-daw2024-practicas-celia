//se inicia aquí para no resetearse en cada iteración del bucle
let datosIntroducidos = new Set();
let arrayDatos = new Array();

while (true) {
  //para pedir las palabras
  let words = window.prompt('Introduce una palabra');

  // comprobamos si ha introducido datos vacíos o le ha dado a cancel
  if (words === '' || words === null) {
    arrayDatos.push(...datosIntroducidos);
    arrayDatos.sort((a, b) => a.localeCompare(b, 'es')).reverse();
    //capturo el div que he creado en el html
    let results = document.getElementById('results');
    //muestro el contenido creado con el set
    results.innerHTML = Array.from(arrayDatos).join(', ');
    break;
  } else {
    //para añadir las palabras al set
    datosIntroducidos.add(words);
  }
}
console.log(arrayDatos);
