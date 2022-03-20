'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

/*
- Funkce - vstupní a výstupní parametry
- Funkce je také hodnota
- Volání funkce → závorky, odkaz na funkci jako hodnotu → bez závorek
- Anonymní funkce
- Arrow funkce
*/

function vypocet(){
    return 5+3;
}

const vypocet2 = function(){
    return 5+3;
}

const  vzpocet = (a,b) => {
    return a+b;
}

const vypoc = a => a * 2;

const handleClick = () => {
    console.log('Klikni na tlacitko!');
}

const btn = document.querySelector('#tlacidlo');

btn.addEventListener('click', handleClick); 

//anonymni fce  kdyz misto handleclick rovnou napisu fci do eventListeneru