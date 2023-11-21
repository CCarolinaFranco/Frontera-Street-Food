"use strict";

console.log("holis");

// slider de productos

const contenedor = document.querySelector('.js-slider');
const btnIzquierda = document.querySelector('.js-btn-izquierda');
const btnDerecha = document.querySelector('.js-btn-derecha');
const formulario = document.querySelector('.js-formulario');
const inputName = document.querySelector('.js-inputName');
const inputEmail = document.querySelector('.js-inputEmail');
const inputComments = document.querySelector('.js-inputComments');
const alertSuccess = document.querySelector('.js-alertSuccess');
const alertError = document.querySelector('.js-alertError');





//evento para el boton derecho y izquierda slider


function handleClickDerecha(){
    contenedor.scrollLeft += contenedor.offsetWidth;

}

btnDerecha.addEventListener("click", handleClickDerecha);


function handleClickIzquierda(){
    contenedor.scrollLeft -= contenedor.offsetWidth;
    
}

btnIzquierda.addEventListener("click", handleClickIzquierda);


//validacion de formulario

function validar(e){
    let inputNameValue =inputName.value;
    let inputEmailValue = inputEmail.value;
    let inputCommentsValue =inputComments.value;

    if(inputNameValue === "" || inputEmailValue === "" || inputCommentsValue === "" ){
        e.preventDefault();
        alertError.classList.remove("hide");
        alertError.classList.add("show");

        setTimeout(function(){
            alertError.classList.remove("show");
            alertError.classList.add("hide");  
        }, 2000);


    }
    else{
        e.preventDefault();
        alertSuccess.classList.remove("hide");
        alertSuccess.classList.add("show");

        setTimeout(function(){
            alertSuccess.classList.remove("show");
            alertSuccess.classList.add("hide");  
        }, 2000);

            inputName.value = ""; // Clear the input values
            inputEmail.value = "";
            inputComments.value = "";

    }

}



formulario.addEventListener("submit", validar);
