/**
 * Arrow Functions: Lexical this.
 *
 * Arrow functions do not distort the scope of the containing block or context.
 * Because of this, the "this" in the block where an arrow function is defined
 * is the "this" within the arrow function. Because of this, there is no more
 * need to store "this" in another variable to preserve it for use in the arrow
 * function.
 */

{
    'use strict';

    // Create an object to populate.
    let obj = {};

    // Define a method that will populate the object.
    function populate() {
        let values = [ 1, 2, 3 ];
        
        values.forEach((v) => {
            // Notice in the next line, we did not move "this" into another
            // variable to preserve it, yet it's usable in the arrow function.
            this['value_' + v] = v;
        });
    }

    // Now call the method and bind "obj" as "this".
    populate.call(obj);

    console.log(obj); // { value_1: 1, value_2: 2, value_3: 3 }
}