//variables que toman las imagenes de los cursos
const botonFormacionAlura = document.querySelector(".study__image--alura");
const botonFormacionTripleten = document.querySelector(
  ".study__image--tripleten"
);
//al hacer click se abren los links de los cursos
botonFormacionAlura.addEventListener("click", function () {
  window.open("https://www.oracle.com/lad/one", "_blank");
});
botonFormacionTripleten.addEventListener("click", function () {
  window.open("https://tripleten.com/", "_blank");
});
