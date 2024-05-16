'use strict';
window.onscroll = function() {scrollFunction()};
let header = document.getElementById("header");
let sticky = header.offsetTop; // para saber la posición de la cabecera

function scrollFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}