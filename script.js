console.log("hello world!");

//Secciones

const seccionMainEl = document.querySelector(".seccion-main");
const seccionTecnologiasEl = document.querySelector(".seccion-conocimientos");
const seccionProyectosEl = document.querySelector(".seccion-proyectos");
const seccionContantoEl = document.querySelector(".seccion-contacto");
const seccionSobreMiEl = document.querySelector(".seccion-sobremi");

const secciones = [
  seccionMainEl,
  seccionTecnologiasEl,
  seccionProyectosEl,
  seccionContantoEl,
  seccionSobreMiEl,
];

const profesionEl = document.querySelector(".main-descripcion");
const cursoEl = document.querySelector(".cursor");
const profesiones = ["Programador  ", "Controlador Aéreo  "];

const escribirProfesion = function (profesiones) {
  let indexProfesion = 0;
  let indexLetra = 0;
  let borrando = false;

  efectoTipado();
  function efectoTipado() {
    if (!borrando) {
      // escribiendo
      profesionEl.textContent = profesiones[indexProfesion].slice(
        0,
        indexLetra++
      );
      if (indexLetra > profesiones[indexProfesion].length) {
        borrando = true;
        cursoEl.classList.add("titilar");
        setTimeout(efectoTipado, 3000);
        return;
      }
    } else {
      cursoEl.classList.remove("titilar");

      // borrando
      profesionEl.textContent = profesiones[indexProfesion].slice(
        0,
        indexLetra--
      );
      if (indexLetra < 0) {
        borrando = false;
        indexLetra = 0;
        if (indexProfesion === profesiones.length - 1) {
          indexProfesion = 0;
        } else {
          indexProfesion++;
        }
      }
    }
    setTimeout(efectoTipado, borrando ? 75 : 130);
  }
};

const iconosSecciones = document.querySelectorAll(".icono-nav");
escribirProfesion(profesiones);

const handleInterseccion = function (el) {
  const seccionActiva = el.id;
  handleIconoSeccionActiva(seccionActiva);
};

const handleIconoSeccionActiva = function (seccion) {
  iconosSecciones.forEach((iconoSec) => {
    const tieneLaClase = iconoSec.classList.contains(seccion);
    if (tieneLaClase) {
      iconoSec.classList.add("icono-nav-seleccionado");
    } else {
      iconoSec.classList.remove("icono-nav-seleccionado");
    }
  });
};
secciones.forEach((seccion) => {
  const opciones = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  };

  const observer = new IntersectionObserver((entries) => {
    const [evento] = entries;

    if (evento.isIntersecting) {
      handleInterseccion(evento.target);
    }
  }, opciones);
  observer.observe(seccion);
});
