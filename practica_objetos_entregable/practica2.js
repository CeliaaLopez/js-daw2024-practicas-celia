Array.prototype.mediaAritmética = function(){
    if (this.length === 0) return 0; 
    let suma = this.reduce((acumulador, valor) => acumulador + valor,0);
    return suma / this.length;
}

//probamos con un array con números
let numeros = [5,10,20];
console.log(numeros.mediaAritmética());
//ahora con uno vacío para ver si salta el error
let vacío = [];
console.log(vacío.mediaAritmética());
