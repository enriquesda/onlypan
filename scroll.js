gsap.registerPlugin(ScrollTrigger);
// Animación Reveal con JavaScript Puro

function animateFrom(elem, direction) {
   // Por defecto, la dirección es hacia abajo (1)
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
    // Si el elemento tiene la clase "revelar_izq", se mueve hacia la izquierda
  if (elem.classList.contains("revelar_izq")) {
    x = -100;
    y = 0;
    // Si el elemento tiene la clase "revelar_der", se mueve hacia la derecha
  } else if (elem.classList.contains("revelar_der")) {
    x = 100;
    y = 0;
  }

   // Configura el estado inicial del elemento antes de la animación
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  // Define la animación usando GSAP, desde las coordenadas iniciales a finales
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {// Valores iniciales de la animación
    duration: 2.25,          // Duración de la animación (en segundos)
    x: 0,                    // Posición final en X
    y: 0,                    // Posición final en Y
    autoAlpha: 1,            // Opacidad final
    ease: "expo",            // Curva de aceleración de la animación
    overwrite: "auto"        // Sobrescribe otras animaciones si están en progreso
  });
}
// Función para ocultar un elemento
function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 }); // Cambia la opacidad a 0 instantáneamente
}
// Evento que se ejecuta cuando el DOM se ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    // Registra nuevamente el plugin ScrollTrigger (opcional si ya está registrado arriba)
  gsap.registerPlugin(ScrollTrigger);
 // Selecciona todos los elementos con la clase "revelar"
  gsap.utils.toArray(".revelar").forEach(function (elem) {
    hide(elem);// Asegura que el elemento esté oculto inicialmente

    ScrollTrigger.create({
      trigger: elem,// Define el elemento que activa el ScrollTrigger
      scroller: ".contenedor-principal",// Contenedor principal donde ocurre el scroll
      markers: false,// Muestra u oculta los marcadores (útil para depuración)
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) }  // Oculta el elemento al salir de la vista
    });
  });
});
