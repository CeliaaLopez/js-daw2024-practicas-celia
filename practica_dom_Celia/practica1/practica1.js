let btn = document.getElementById('btn');
let form = document.getElementById('formulario');
let div = document.getElementById('displayAfter');

function getCookie(name) {
  let nameCookie = name + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(nameCookie) == 0) {
      return c.substring(nameCookie.length, c.length);
    }
  }
  return '';
}

function setCookie(name, value, days) {
  let d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function crearCookie(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  if (name !== '' && name !== null) {
    setCookie('name', name, 7);
    location.reload();
  }
}

function checkCookieOnLoad() {
  let existName = getCookie('name');
  if (existName !== '') {
    form.style.display = 'none';
    let texto = document.createElement('p');
    texto.textContent = '¡Bienvenido, ' + existName + '!';
    div.appendChild(texto);
  }
}

btn.addEventListener('click', crearCookie);
checkCookieOnLoad();
