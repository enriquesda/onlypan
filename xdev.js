// Selecciona el botón "next" que avanza el carrusel
let next = document.querySelector('.next')
// Selecciona el botón "prev" que retrocede el carrusel
let prev = document.querySelector('.prev')
// Agrega un evento de clic al botón "next"
next.addEventListener('click', function(){
    // Selecciona todos los elementos del carrusel con la clase "item"
    let items = document.querySelectorAll('.item')
    // Mueve el primer elemento del carrusel al final
    document.querySelector('.slide').appendChild(items[0])
})
// Agrega un evento de clic al botón "prev"
prev.addEventListener('click', function(){
    // Selecciona todos los elementos del carrusel con la clase "item"
    let items = document.querySelectorAll('.item')
     // Mueve el último elemento del carrusel al principio
    // `items[items.length - 1]` selecciona el último elemento en la lista
    document.querySelector('.slide').prepend(items[items.length - 1])
})


