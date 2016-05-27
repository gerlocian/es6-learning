/**
 * Arrow function: Statement Bodies
 *
 * Arrow functions are a solid replacement for anonymous functions where you
 * want to preserve the scope of the parent block or closure. Arrow functions
 * do not create a new "this" context, and can be written as either a single
 * line expression body (with an implicit return) or a multiline statement.
 *
 * This example examines the multiline statement body.
 */

{
    'use strict';

    // Multiline statements are similar to expression bodies, however, you need
    // to specify the return value. Otherwise they work just like standard
    // method definitions.
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    nums.forEach(v => {
        if (v % 3 === 0) {
            console.log('Multiple of three: ' + v); // 3, 6, 9
        }
    });

    // I know this can be done with indexOf, but it highlights the point about
    // explicit returns.
    let index = (values => {
        for (let i = 0; i < values.length; i += 1) {
            if (values[i] === 3) {
                return i;
            }
        }
    })(nums);
    console.log(index); // 2
}