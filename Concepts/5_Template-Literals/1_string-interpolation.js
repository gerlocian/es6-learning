/**
 * String Interpolation
 *
 * Strings can now be treated as templates in that they can include variable
 * names and interpret the values to be inserted in those locations in the
 * string. This is done with the "`" character flanking the string. In
 * addition, the strings can now be written in a multiline fashion without the
 * need to concatinate the various lines together.
 */

{
    'use strict';

    let person = {
        first_name: 'Patrick',
        last_name: 'Ortiz',
        middle_name: 'Finley'
    };

    console.log(`Hello, ${person.first_name}`); // Hello, Patrick

    let formal_name =
        `${person.first_name} ${person.middle_name} ${person.last_name}`;
    console.log(formal_name);       // Patrick Finley Ortiz

    let last_name_first =
        `${person.last_name}, ${person.first_name}`;
    console.log(last_name_first);   // Ortiz, Patrick

    let multiline_name =
        `${person.first_name}
         ${person.last_name}`;
    console.log(multiline_name);    // Patrick\n        Ortiz
}
