"use strict";

const btt = document.getElementsByTagName('button');
console.log(btt);

window.addEventListener('beforeunload', (e) => {
  e.preventDefault();
  e.returnValue = "";
  alert("!No tienes permitido cerrar la pestaña!");
});