
/**
 * Esta funcion retorna una carta del deck
 * @param {Array<String>} deck arreglo de string 
 * @returns {String} retorna la carta
 */
export const pedirCarta = (deck) => {

    if ( !deck ||deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}