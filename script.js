const cloud = document.getElementById("cloud");
const barraLateral=document.querySelector(".barra-lateral");
const spans=document.querySelectorAll("span");//selecionamos todos los span
const main =document.querySelector("main");

cloud.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-barra-lateral"); //al hacer clic sustituiremos el formato normal de barra lateral por el de mini barra lateral y lo mismo al reves
    main.classList.toggle("minmain");
    spans.forEach((span)=>{//Recorremos todos los span que hay
        span.classList.toggle("oculto");
    });
});

