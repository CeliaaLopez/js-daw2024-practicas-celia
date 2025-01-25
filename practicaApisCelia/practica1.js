function tiempo(tiempo) {
  return new Promise((resolve) => setTimeout(resolve, tiempo));
}

//función para pedir permiso de notificaciones y donde ponemos el crono para el tiempo
async function crono() {
  try {
    const cronometro = document.getElementById('crono');
    // Pedimos permiso primero para poder hacer todo
    const resp = await Notification.requestPermission();
    if (resp === 'granted') {
      // Hacemos la cuenta atrás de 5 a 0
      for (let i = 5; i >= 0; i--) {
        cronometro.innerHTML = `Cuenta atrás: ${i}`;
        //llamamos a la función de la promesa pasando el tiempo de espera entre interación
        await tiempo(1000);
      }
      //llamo a la función para mostrar las notificación
      mostrarNotificaciones();
    } else {
      alert('Permiso denegado para mostrar notificaciones.');
    }
  } catch (error) {
    console.log('Error en los permisos:', error);
  }
}

function mostrarNotificaciones() {
  const notificacion = new Notification(
    '¡Nuevo video disponible, dale y míralo!',
    {
      body: 'Haz clic para verlo',
      icon: 'https://www.example.com/imagen.png',
    }
  );
  //capturamos el click para realizar la función para activar el contenedor con el vídeo
  notificacion.addEventListener('click', function mostrarVideo() {
    const ocultarCrono = document.getElementById('inicio');
    const noti = document.getElementById('notification');
    noti.style.display = 'block';
    ocultarCrono.style.display = 'none';
  });
}

const video = document.getElementById('vid');

function funcionesVideo(event) {
  //comprobamos que tipo de evento está activando la función
  if (event.type === 'click') {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
  if (event.type === 'contextmenu') {
    event.preventDefault();
    //calculamos el tiempo del vídeo, para poder separarlo en horas, min y seg
    const tiempoTotal = video.duration;
    const horas = Math.floor(tiempoTotal / 3600); // Horas
    const minutos = Math.floor((tiempoTotal % 3600) / 60); // Minutos
    const segundos = Math.floor(tiempoTotal % 60); // Segundos

    let tiempoFormateado = `${minutos}:${
      segundos < 10 ? '0' + segundos : segundos
    }`;

    if (horas > 0) {
      tiempoFormateado = `${horas}:${minutos < 10 ? '0' + minutos : minutos}:${
        segundos < 10 ? '0' + segundos : segundos
      }`;
    }

    //lo imprimimos por pantalla
    document.getElementById(
      'tiempoVid'
    ).innerHTML = `Duración del vídeo: ${tiempoFormateado}`;
  }
}

crono();
video.addEventListener('click', funcionesVideo);
video.addEventListener('contextmenu', funcionesVideo);
