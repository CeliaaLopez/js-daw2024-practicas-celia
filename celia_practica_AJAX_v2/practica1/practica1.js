//hacemos una petición get a la url
fetch('https://fakerapi.it/api/v2/persons?_quantity=1')
  .then((response) => {
    //comprobamos que la respuesta ha sido acceptada
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  })
  //si todo va bien vamos a tener en datos el objeto con toda la información
  .then((datos) => {
    //lo recorremos
    datos.data.forEach((dato) => {
      let div = document.getElementById('personas');
      let contentDiv = document.createElement('div');
      //almacenamos toda la información de la persona en la variable persona
      let persona = `<p>Nombre: ${dato.firstname} ${dato.lastname}</p>
                     <p>Email: ${dato.email}</p>
                     <p>Dirección: ${dato.address.street}</p>
                     <p>País: ${dato.address.country}</p>`;
      //la añadimos al div para mostrarla
      contentDiv.innerHTML = persona;
      div.appendChild(contentDiv);
    });
  })
  //si surge algún error lo capturamos con el catch y lo mostramos por la consola
  .catch((error) => {
    console.error('Error en la petición:', error);
  });
