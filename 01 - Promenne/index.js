'use strict';

/*  strict kontroluje deklarace promennych atd.*/ 
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

/*
- Co je to strict mód
- Deklarace proměnných - let, const
- Proměná je const, ale objekt nebo pole jdou stále změnit!
- Zápis objektů - vlastnost, klíč, hodnota, tečková konvence vs. "závorková"
- Datové typy - hodnotové vs. referenční - VYHLEDAT VIC
*/
var x = 1; //takto nedeklarovat
let z = 2; //lze lehce menit       
const y = 3; // pouzivat prednostne - pouze pokud je potreba tak udelat volitelnou, nelze prirazovat znovu hodnotu, ale menit vlastnosti objektu muzu


/* 
osoba. jmeno = 'Mirek';

osoba ['jmeno'] = 'Mirek';

JS stredniky povinne, kompilatory doplnuji stredniky - doplnovat je ale sam, necekat na doplneni
*/


