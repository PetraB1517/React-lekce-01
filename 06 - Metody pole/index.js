'use strict';
console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

/*
- Procházení pole - array.forEach()
- Filtrování pole - array.filter()
- Mapování pole - array.map()
- Řetězení metod pole
- Find
- Sort, Reduce
*/

const zviratka = [
  { jmeno: '🐱 Chlupík',  vek: 3, druh: 'kočka' },
  { jmeno: '🐶 Štěkálek', vek: 5, druh: 'pes' },
  { jmeno: '🐱 Míca',     vek: 1, druh: 'kočka' },
  { jmeno: '🐸 Kvákal',   vek: 1, druh: 'žába' },
  { jmeno: '🐶 Hafík',    vek: 2, druh: 'pes' },
  { jmeno: '🐹 Hrůzomor', vek: 1, druh: 'morče' },
  { jmeno: '🐱 Fousek',   vek: 4, druh: 'kočka' },
  { jmeno: '🐶 Špagetka', vek: 2, druh: 'pes' }
];


zviratka.forEach( (zvire)=>{
  console.log(zvire.jmeno)
});


zviratka.forEach( (zvire, index)=>{
  console.log(index + ': ' + zvire.jmeno)
});

const filterFunkce = (zvize) => {
  //   // if (zvize.vek > 1) {
  //   //   return true;
  //   // } else {
  //   //   return false;
  //   // }
  // //  return zvize.vek > 1 ? true : false;
  //  return zvize.vek > 1;
  // }
  // const filtrovanePole = zviratka.filter(zvize=> zvize.vek > 1 );
  // filtrovanePole.forEach(i => console.log(i));
  // console.log("--")
  // zviratka.forEach(i => console.log(i));
  // const mapovePole = zviratka.map(zvize=> `Jmeno zvizete ${zvize.jmeno}` );
  // mapovePole.forEach(i => console.log(i));
  //  zviratka
  //   .filter(zvize=> zvize.vek > 1 )
  //   .map(zvize=> `Jmeno zvizete ${zvize.jmeno}` )
  //   .forEach(i => console.log(i));
  //  const nalezenec = zviratka.find(zvize => zvize.vek === 1)
  //  console.log(nalezenec);
  zviratka
    .sort((zvize1,zvize2 )=> zvize1.vek - zvize2.vek  )
    .forEach(i => console.log(i));
  // -1  zvize1 se ma zaradit pred
  // 0  zvize1 jsou shodne
  // 1  zvize1 se ma zaradit za
}