let lista = document.getElementById('desordenada');

setTimeout(() => {
  let respuesta = confirm('¿Desea cambiar el orden de la lista?');
  if (respuesta) {
    let elementos = document.querySelectorAll('li');
    let elementosOrdenados = Array.from(elementos).sort((a, b) =>
      a.textContent.localeCompare(b.textContent));

    let nuevaLista = document.createElement('ol');
    elementosOrdenados.forEach((elemento) => {
      nuevaLista.appendChild(elemento);
     });
    document.body.appendChild(nuevaLista);
  } else {
    console.log('No se cambió el orden de la lista');
  }
}, 3000);
