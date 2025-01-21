const estado = document.getElementById('status');
window.addEventListener('load', (ev) => {
  let numsecs = document.getElementById('numsecs'); //segundos retraso
  let user = document.getElementById('user'); //input del num de usuario
  let boton = document.querySelector('button'); //enviar los datos

  boton.addEventListener('click', (ev) => {
    ev.preventDefault();
    clearFields();
    procesarFetch(numsecs.value, user.value);
  });
});

function clearFields() {
  document.querySelectorAll('span').forEach((element) => {
    element.innerHTML = '';
  });
}

//función donde haremos las peticiones y el envío por post
function procesarFetch(numsecs, user) {
  //comprobamos que sean números y en el caso del usuario que esté en el rango del 1 al 12
  if (isNaN(user) || user < 1 || user > 12) {
    estado.innerHTML = '404';
    return alert('Error: Usuario no válido');
  }
  if (isNaN(numsecs)) {
    estado.innerHTML = '404';
    return alert('Error: Segundos no válidos');
  }

  // anidamos los fetch, primero para obtener al usuario
  fetch(`https://reqres.in/api/users/${user}?delay=${numsecs}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then((datos) => {
      let id = document.getElementById('id');
      let email = document.getElementById('email');
      id.innerHTML = datos.data.id;
      email.innerHTML = datos.data.email;
      return datos;
    })
    .then((datos) =>
      //aquí el fetch para pasar los datos por post a nuestra base de datos ficticia
      fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos.data),
      })
    )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`POST error: ${response.status}`);
    })
    .then((datos) => {
      let name = document.getElementById('name');
      name.innerHTML = datos.json.first_name;
      //si todo va bien el estado se pone en 200
      estado.innerHTML = '200';
    })
    .catch((error) => {
      //si va mal, lo capturamos con el catch y ponemos el estado en 404
      estado.innerHTML = '404';
      console.error('Error en la operación:', error.message);
    });
}