let patronEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
let patronPass = /^.{8,10}$/;
let email = document.getElementById('email');
let pass = document.getElementById('password');
let error = document.createElement('div');

function validacion() {
  let isValid = true;
  if (this === email) {
    if (!patronEmail.test(this.value)) {
      let errorMail = document.createElement('p');
      let mensajeError = document.createTextNode(
        'El email no es correcto: xxxx@yyyy.zzzz'
      );
      errorMail.appendChild(mensajeError);
      document.getElementById('errorMail').appendChild(errorMail);
      isValid = false;
    }
  }

  if (this === pass) {
    if (!patronPass.test(this.value)) {
      let errorPass = document.createElement('p');
      let mensajeErrorPass = document.createTextNode(
        'La longitud debe ser de 8 a 10 caracteres'
      );
      errorPass.appendChild(mensajeErrorPass);
      document.getElementById('errorPass').appendChild(errorPass);
      isValid = false;
    }
  }

  return isValid;
}
function eliminarMensaje() {
  if (this === email) {
    document.getElementById('errorMail').innerHTML = '';
    }
    if (this === pass) {
        document.getElementById('errorPass').innerHTML = '';
    }
}
function actualizarBoton() {
  let isValidEmail = patronEmail.test(email.value);
  let isValidPass = patronPass.test(pass.value);

  if (isValidEmail && isValidPass) {
    btn.disabled = false; 
    btn.style.backgroundColor = '';
  } else {
    btn.disabled = true; 
    btn.style.backgroundColor = 'gray';
  }
}

email.addEventListener('focusout', validacion);
pass.addEventListener('focusout', validacion);

email.addEventListener('focus', eliminarMensaje);
pass.addEventListener('focus', eliminarMensaje);

email.addEventListener('input', actualizarBoton);
pass.addEventListener('input', actualizarBoton);


document.getElementById('btn').addEventListener('click', function (event) {

  let isValidEmail = validacion.call(email);
  let isValidPass = validacion.call(pass);

  if (!isValidEmail || !isValidPass) {
    event.preventDefault();

    let errorEnviar = document.createElement('p');
    let mensajeErrorEnv = document.createTextNode(
      'No se puede enviar hasta cumplir los requisitos'
    );
    errorEnviar.appendChild(mensajeErrorEnv);
    document.body.appendChild(errorEnviar);
  }
});
