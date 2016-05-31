/**
 * Raw string access
 *
 * Template literals can further be extended to allow you to manipulate a
 * string in template form using a function. With this setup, you can take a
 * string template and run it through a function that will do anything you
 * want.
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

    // This is a bit convaluded, but I'm attempting to highlight the point.
    function generator(strings, ...others) {
        if (strings[0] === 'Hello ' && strings[1] === ', how are you?') {
            return (name, lang) => {
                const ENG_STRING = `Hello ${name}, how are you?`;
                const SPA_STRING = `Hola ${name} , ¿cómo estás?`;
                const GER_STRING = `Hallo ${name}, wie geht es dir?`;
                const IRE_STRING = `Dia duit ${name} , conas atá tú ?`;

                switch (lang) {
                case 'eng':
                    return ENG_STRING;
                case 'spa':
                    return SPA_STRING;
                case 'ger':
                    return GER_STRING;
                case 'ire':
                    return IRE_STRING;
                default:
                    return 'Invalid language';
                }
            };
        } else {
            return 'Invalid template.';
        }
    }

    let greeting = generator `Hello ${0}, how are you?`;
    console.log(greeting('Patrick', 'eng'));
    console.log(greeting('Patrick', 'spa'));
    console.log(greeting('Patrick', 'dut'));

    let broken = generator `Hello world!`;
    console.log(broken);
}
