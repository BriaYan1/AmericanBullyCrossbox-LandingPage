//* ~~~~~~~~~~~~~~~~~~~~~ Menu Hamburguesa ~~~~~~~~~~~~~~~~~~~~~ */

const nav = document.querySelector('#nav'); /*Selecciona el id nav*/
const abrir = document.querySelector('#abrir'); /*Selecciona el id abrir*/
const menuItems = document.querySelectorAll('#nav ul li a'); /*seleciona el id nav y las etiquetas dentro del contenedor*/
const botonContacto = document.querySelector('#boton-contacto-movil'); /*selecciona el boton de contacto movil*/

/* ~~~~~~~~~Lineas~~~~~~~~~ */
const linea1 = document.querySelector('.linea1');
const linea2 = document.querySelector('.linea2');
const linea3 = document.querySelector('.linea3');
/* ~~~~~~~~~~~~~~~~~~~~~~~~ */

let menuHamburguesa = () => {
    /* La variable menuHamburguesa almacena una funcion tipo flecha que luego sera llamada por el nombre de la variable en otra parte del codigo. */
    if (nav.classList.contains('nav--elements-visible')) {
        /* Se valida si el HTML contiene la clase nav-elements-visible, si es asi se ejecuta la condicion */
        nav.classList.remove('nav--elements-visible');
        linea1.classList.remove('linea1-visible');
        linea2.classList.remove('linea2-visible');
        linea3.classList.remove('linea3-visible');
    } else {
        nav.classList.add('nav--elements-visible'); /* Agrega la clase en el HTML, ver el CSS donde esta el estilo predeterminado */
        linea1.classList.add('linea1-visible');
        linea2.classList.add('linea2-visible');
        linea3.classList.add('linea3-visible');
    }
};

abrir.onclick = menuHamburguesa; // Al hacer click en el icono del menu hamburguesa se va a ejecutar la funcion menuHamburguesa
botonContacto.onclick = menuHamburguesa;

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menuHamburguesa();
    });
}); /* Para cada elemento que esta dentro del nav al hacer click se ejecuta la funcion del menuHamburguesa */
