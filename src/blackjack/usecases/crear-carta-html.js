/**
 * 
 * @param {HTMLElement} divcarta  imagen de la carta
 * @param {String} carta string de la carta
 */

export const crearCarta = ( divcarta, carta ) => {
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divcarta.append( imgCarta );
 }