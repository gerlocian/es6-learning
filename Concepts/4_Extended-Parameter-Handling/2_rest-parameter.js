/**
 * Rest Parameter
 *
 * In addition to being able to set default values for parameters in a function
 * argument list, we now have access to the rest parameter. The rest parameter
 * is a special parameter that takes in any additional data that is passed to
 * the function and stores it in an array for retrieval later. It is
 * characterized by three preceding dots before the variable name (...variable)
 * at the end of the parameter list.
 */

{
    'use strict';

    function f(x=1, y=2, ...other) {
        console.log(
            'x: ' + x + ', y: ' + y + ', other length: ' + other.length
        );
    }

    f();                // x: 1, y: 2, other length: 0
    f(3, 4, 5);         // x: 3, y: 4, other length: 1
    f(1, 2, 3, 4, 5);   // x: 1, y: 2, other length: 3

    function g(...parameters) {
        console.log(parameters);
    }

    g();                // []
    g(1, 2, 3, 4, 5);   // [ 1, 2, 3, 4, 5 ]
}
