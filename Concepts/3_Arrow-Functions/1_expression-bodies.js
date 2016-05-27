/**
 * Arrow function: Expression Bodies
 *
 * Arrow functions are a solid replacement for anonymous functions where you
 * want to preserve the scope of the parent block or closure. Arrow functions
 * do not create a new "this" context, and can be written as either a single
 * line expression body (with an implicit return) or a multiline statement.
 *
 * This example examines the single line expression body.
 */

{
    'use strict';

    // In a single line, I can create a method that checks if the value passed
    // is even or odd. Before this would have required an anonymous function
    // declaration.
    let isOdd = num => num % 2 > 0;

    console.log(isOdd(1)); // true
    console.log(isOdd(2)); // false

    // Additionally, I can have that expression body return any other type of
    // value that I want. In the following example, we'll use the previous
    // method to return if a value is even or odd and the previous and next
    // numbers from the value. We can return this as an object.
    let getInfo = num => ({ isOdd: isOdd(num), prev: num - 1, next: num + 1 });

    console.log(getInfo(4));  // { isOdd: false, prev: 3, next: 5 }
    console.log(getInfo(10)); // { isOdd: false, prev: 9, next: 11 }
    console.log(getInfo(1));  // { isOdd: true, prev: 0, next: 2 }

    // Using expression bodies in an array sort method.
    let sortable = [4, 5, 3, 6, 1, 7, 2];
    sortable.sort((x, y) => x - y);

    console.log(sortable); // [ 1, 2, 3, 4, 5, 6, 7 ]
}
