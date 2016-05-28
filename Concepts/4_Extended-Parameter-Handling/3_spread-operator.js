/**
 * Spread Operator
 *
 * Sometimes you want to spread the values of an array over and into different
 * things. This is where the spread operation comes in handy. Similar to the
 * rest parameter, the spread operator allows you to spread the values of your
 * array into other arrays or function calls as needed so that you don't have
 * to unfold the array yourself or concatinate the arrays together.
 */

{
    'use strict';

    let myArray = [ 1, 2, 3, 4, 5 ];
    let newArray = [ 9, 10, ...myArray ];
    console.log(newArray);      // [ 9, 10, 1, 2, 3, 4, 5 ]

    function f (x, ...others) {
        console.log('x: ' + x + ', others length: ' + others.length);
    }

    f(...myArray);              // x: 1, others length: 4
}
