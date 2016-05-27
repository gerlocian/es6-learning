/**
 * Block-Scoped Functions
 *
 * IIFE's (Immediately Invoked Functional Expressions) are now simplified. They
 * are now recognized as a { ... } block in the code and no longer are required
 * to have a function declaration to them. We've actually been using them in
 * other files as the closures, but haven't called them out until now. In
 * concert with "let" you can more accurately protect your variable scope while
 * not getting bogged down with creating a bunch of anonymous methods.
 */

{
    'use strict';

    let foo = () => 1;

    console.log(foo() === 1);

    {
        /*eslint no-inner-declarations: "off"*/
        let foo = () => 2;
        let bar = () => 3;

        console.log(foo() === 2);
        console.log(bar() === 3);
    }

    console.log(foo() === 1);
    console.log(foo() === 2);

    try {
        /*eslint no-undef: "off"*/
        console.log(bar() === 3);
    } catch (e) {
        console.log('"bar" is not declared in this closure, only the inner one.');
        console.log(String(e));
    }
}