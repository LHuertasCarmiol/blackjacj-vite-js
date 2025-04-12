import _ from 'underscore';

/**
 * Esta funciona crea nuevo deck
 * @param {Array<string>} tiposDeCarta ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna una nuevo deck 
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es obligatorio como un arreglo string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio como un arreglo string');


    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}