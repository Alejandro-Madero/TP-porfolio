console.log("hello world!");

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

escribirProfesion(profesiones);
