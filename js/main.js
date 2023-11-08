"use strict";

console.log("holis");

// slider de productos

const contenedor = document.querySelector('.js-slider');
const btnIzquierda = document.querySelector('.js-btn-izquierda');
const btnDerecha = document.querySelector('.js-btn-derecha');



//evento para el boton derecho y izquierda slider


function handleClickDerecha(){
    contenedor.scrollLeft += contenedor.offsetWidth;

}

btnDerecha.addEventListener("click", handleClickDerecha);


function handleClickIzquierda(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
    
}

btnIzquierda.addEventListener("click", handleClickIzquierda);



