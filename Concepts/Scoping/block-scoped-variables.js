/**
 * Let
 *
 * The "let" keyword is a way of declaring variables that locks them into the
 * scope of the block that they are declared within. This goes beyond closure
 * scoping, in that things that would not normally constitute a scope would
 * only have the ability to use the new variable (as in the case with if or for
 * blocks).
 *
 * "let" prevents the variables from being hoisted to the top of the closure
 */

{
    'use strict';

    // Since let is used to declare "i", the console statement after the for
    // loop should not have access to it.
    for (let i = 0; i < 10; i += 1) {
        console.log(i);
    }

    try {
        /*eslint no-undef: "off"*/
        console.log(i);
    } catch (e) {
        console.log('"i" is not available outside of the for loop');
        console.log(String(e));
    }

    // Let also works within if statements.
    if (undefined === undefined) {
        let x = 1001;
        console.log(x);
    }

    try {
        /*eslint no-undef: "off"*/
        console.log(x);
    } catch (e) {
        console.log('"x" is not available outside the if block');
        console.log(String(e));
    }
}
