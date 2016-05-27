/**
 * Constants
 * 
 * Constants are a new way of declaring variables in ECMAScript 6. They
 * allow a single assignment when they are declared, and prevent reassignment
 * during the rest of the script execution. They behave exactly the same
 * regardless of strict mode declaration, and as such, will throw exceptions
 * if an attempt to reassign them is made.
 */

{
    'use strict';

    // Constants can be declared like this.
    const PI = 3.141593;
    console.log(PI);

    // They can not be changed.
    try {
        /*eslint no-const-assign: "off"*/
        PI = 'something else';
    } catch (e) {
        console.log('You can not change a constant value.');
        console.log(String(e));
    }
}
