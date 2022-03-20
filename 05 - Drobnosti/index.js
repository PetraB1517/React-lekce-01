'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

/*
- Template string Ahoj ${x} světe!
- Ternární operátor
 */

let plnoletost;

plnoletost = vek >= 18 ? 'dospela' : 'miminko';

//statements X vyraz

const text = "kokos";
const text = 'kokos';

const text = `kokos`; //tactic se interpretuje s dolarem nemusi se spojovat text retezce

const text3 = `kokos ma ${vek} let`;