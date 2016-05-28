/**
 * Custom Interpolation
 *
 * Simply put, the string interpolation allows flexibility for string
 * concatination and other string features as the interpolation is being done.
 */

{
    'use strict';

    let name = 'Patrick Ortiz';
    let bday = 'Sept 21';

    console.log(`${name.toUpperCase()}`);   // PATRICK ORTIZ
    console.log(`${name + ' ' + bday}`);    // Patrick Ortiz Sept 21

}
