/**
 * Unicode String and Regex Literals
 *
 * ES6 has extended support for using Unicode characters within strings and
 * regular expressions.
 */

{
    'use strict';

    let pattern = /./u;

    console.log('𠮷'.length === 2);
    console.log('𠮷'.match(pattern)[0].length === 2);

    console.log('Ŧ'.length === 1);
    console.log('Ŧ'.match(pattern)[0].length === 1);
}
