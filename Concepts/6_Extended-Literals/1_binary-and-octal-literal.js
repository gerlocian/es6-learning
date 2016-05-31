/**
 * Binary and Octal Literals
 *
 * ES6 provides safer and more robust support for handling binary literals.
 */

{
    'use strict';

    // Binary
    console.log(0b00000001 === 1);
    console.log(0b00000010 === 2);
    console.log(0b00000100 === 4);

    // Octal
    console.log(0o001 === 1);
    console.log(0o002 === 2);
    console.log(0o010 === 8);
    console.log(0o100 === 64);
}
