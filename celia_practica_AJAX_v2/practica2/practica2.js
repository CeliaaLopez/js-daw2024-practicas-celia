const estado = document.getElementById('status');
//Código principal dentro del evento load
// para asegurar la carga de los componentes
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

function procesarFetch(numsecs, user) {
  try {
    //vamos a comprobar primero que los segundos sean un número y que el usuario no sea más de 12
    if (user < 1 || user > 12 || isNaN(user)) {
/////////////////////¿está bien puesto aquí ya que lo manejo con try catch???     
       estado.innerHTML = '404';
      throw new Error('No es un valor apto');
    }
    if (isNaN(numsecs)) {
      throw new Error('No es un valor apto');
    }
    //si todo es correcto empezamos con el fetch
    return fetch(`https://reqres.in/api/users/${user}?delay=${numsecs}`)
      .then((response) => {
          if (response.ok) {
/////////////////////¿hay que poner el estado tb aquí o solo en la última función de abajo???
          estado.innerHTML = '200';
          return response.json();
        } else {
          estado.innerHTML = response.status;
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((datos) => {
        let id = document.getElementById('id');
        let email = document.getElementById('email');
        id.innerHTML = datos.data.id;
        email.innerHTML = datos.data.email;
        //llamamos a la función pasándole los datos del usuario obtenido para almacenarlo
        almacenarUsuario(datos.data);
      })
      .catch((error) => {
        console.error('Error en la petición:', error);
      });
  } catch (error) {
    console.error(error);
  }
}
function almacenarUsuario(usuario) {
  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => {
      if (response.ok) {
        estado.innerHTML = '200';
        return response.json();
      } else {
        estado.innerHTML = response.status;
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    })
    .then((datos) => {
      let name = document.getElementById('name');
      name.innerHTML = datos.json.first_name;
    });
}
