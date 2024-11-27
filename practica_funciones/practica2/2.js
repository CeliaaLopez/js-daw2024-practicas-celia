let map = new Map();

while (true) {
  let result = window.prompt('Introduzca las palabras deseadas');
  if (result === '' || result === null) {
    break;
  } else {
    if (map.has(result)) {
      map.set(result, map.get(result) + 1);
    } else {
      map.set(result, 1); 
    }
  }
}
let resultados = document.getElementById('results');

for (let [clave, valor] of map) {
  resultados.innerHTML += "<li>La palabra " + clave + " ha sido escrita "+ valor + "veces</li>";
}
