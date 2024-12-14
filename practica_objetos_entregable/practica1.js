function Rectangulo(width, height) {
  if (width <= 0 || typeof width !== 'number') {
    width = 1;
  }
  if (height <= 0 || typeof height !== 'number') {
    height = 1;
  }
  this.width = width;
  this.height = height;

  this.cambiarDimensiones = function (newWidth, newHeight) {
    if (newWidth > 0 && typeof newWidth === 'number') {
      this.width = newWidth;
    } else {
      this.width = 1;
    }
    if (newHeight > 0 && typeof newHeight === 'number') {
      this.height = newHeight;
    } else {
      this.height = 1;
    }
  };

  this.calcularArea = function () {
    return this.width * this.height;
  };

  this.copia = function () {
    return new Rectangulo(this.width, this.height);
  };
  this.comparar = function(rectangulo){
    let area =  this.calcularArea();
    let areaRectangulo = rectangulo.calcularArea();
    if(area > areaRectangulo){
      return 'Mayor';
    } else if (area === areaRectangulo) {
      return 'Igual';
    } else {
      return 'Menor';
    }
  }
}

let rectangulo = new Rectangulo(10, 5);
console.log(rectangulo);
//comprobar que los negativos salen como 1
let rectangulo2 = new Rectangulo(-1, -5);
console.log(rectangulo2.height +" " +rectangulo2.width);
//comprobar que cambia las dimensiones del rec2
rectangulo2.cambiarDimensiones(-4,5);
console.log(rectangulo2.height + " "+ rectangulo2.width);
//creamos un nuevo rec con el anterior
let rectangulo3 = rectangulo2.copia();
console.log('Copia de Rectángulo 2:', rectangulo3.height);
//calculamos su área
console.log('El área es: ', rectangulo3.calcularArea());
//comprobar el área más grande
let rectangulo4 = new Rectangulo(2,2);
console.log(rectangulo2.comparar(rectangulo4));

