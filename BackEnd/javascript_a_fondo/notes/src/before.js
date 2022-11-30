window.onclick = function() {
  //Crea un elemento de DOM
  let header = document.createElement('h1');
  let subheader = document.createElement('h6');
  const text = document.createTextNode("¡Hola amigos!");
  const subtext = document.createTextNode("Subtitulo");
  subheader.appendChild(subtext);
  header.appendChild(text);
  header.appendChild(subheader);
  const mainSection = document.getElementsByTagName('main')[0];
  mainSection.appendChild(header);
}

//Tipos de datos en JavaScript

let variable = 42; //Number
console.log(typeof variable);
variable = "42"; //String
console.log(typeof variable);
variable = 42;
console.log(variable + variable);
variable = !!-2; //Boolean
console.log(variable);