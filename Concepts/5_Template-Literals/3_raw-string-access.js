/**
 * Raw string access
 *
 * I'm not really sure what this is for.
 * TODO: Do more investigation on this feature.
 * TODO: Find use cases for why this is important or what the intention is.
 */

{
    'use strict';

    function test (strings, ...others) {
        console.log(strings, strings.raw,  others);
    }

    let value1 = 'has a birthday on';
    let value2 = '!';

    test `Patrick Ortiz ${ value1 } Sept 21 ${ value2 }`;
    test(`Patrick Ortiz ${ value1 } Sept 21 ${ value2 }`);
}
