function capturarTeclas(event) {
  if (event.altKey && event.key === 'b') {
    document.getElementById('imagen').style.backgroundImage =
      'url("https://picsum.photos/id/237/200/300")';
  }
}
document.body.addEventListener('keydown', capturarTeclas);
