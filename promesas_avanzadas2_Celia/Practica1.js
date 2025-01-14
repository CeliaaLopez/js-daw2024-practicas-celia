//nuestro array de productos
const products = {
  1: { name: 'Laptop', price: 1000, stock: 5 },
  2: { name: 'Mouse', price: 20, stock: 10 },
  3: { name: 'Keyboard', price: 50, stock: 0 },
}

//función para comprobar si el stock del producto seleccionado es igual o superior a la cantidad solicitada
function checkStock(productId,quantity) {
    return new Promise((resolve,reject)=>{
    if(products[productId].stock >= quantity){
        //si hay stock resolvemos
        resolve('Hay suficiente stock del producto ' +products[productId].name)
    } else{
        reject('No hay suficiente stock para el producto '+products[productId].name)
    }
    })
}

//calculamos el total a pagar solo si la cantidad está disponible en el stock
function calculateTotal(productId,quantity){
    return new Promise((resolve,reject)=>{
        if(products[productId].stock >= quantity){
            let total = products[productId].price *quantity
            resolve('Total para '+quantity+ ' unidades de '+products[productId].name + ' ' +total +'€')
        } else{
            reject('No se puede comprar esa cantidad, no hay stock sufiente de '+products[productId].name)
        }
    })
}

//tras 2segundo se resolverá diciendo que el pedido ha sido efectuado
function confirmOrder(productId){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('Pedido confirmado para el producto '+products[productId].name)
        }, 2000);
    })
}

//función donde vamos a llevar a cabo el resto de funciones previamente creadas
function completeOrder() {
  checkStock(2, 9)
    .then((result) => {
      console.log(result) 
      return calculateTotal(2, 9)
    })
    .then((result) => {
      console.log(result) 
      return confirmOrder(2)
    })
    .then((result) => {
      console.log(result)
    })
    //si alguna de las anteriores no han sido resueltas, capturamos el error
    //también añado un mensaje extra indicando que el pedido, por lo tanto, es rechazado
    .catch((error) => {
      console.log(error)
      console.log('No se puede realizar el pedido')
    })
}

completeOrder()