/**
 * Default Parameter Handling
 *
 * Function definitions can list the expected arguments as normal, but are now
 * able to specify default values for those arguments. In this way, we no
 * longer need to worry about checking argument values for undefined and
 * setting an initial value.
 */

{
    'use strict';

    function f (x=1, y=2, z=3) {
        console.log('x: ' + x + ', y: ' + y + ', z: ' + z);
    }

    f();                    // x: 1, y: 2, z: 3
    f(4);                   // x: 4, y: 2, z: 3
    f(4, 5);                // x: 4, y: 5, z: 3
    f(4, 5, 6);             // x: 4, y: 5, z: 6
    f(undefined, 7, 8);     // x: 1, y: 7, z: 8
}
