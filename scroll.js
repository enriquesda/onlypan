gsap.registerPlugin(ScrollTrigger);
// REVEAL //

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("revelar_izq")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("revelar_der")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
    duration: 2.25,
    x: 0,
    y: 0,
    autoAlpha: 1,
    ease: "expo",
    overwrite: "auto"
  });
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".revelar").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      scroller: ".contenedor-principal",
      markers: false,
      onEnter: function () { animateFrom(elem) },
      onEnterBack: function () { animateFrom(elem, -1) },
      onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});
