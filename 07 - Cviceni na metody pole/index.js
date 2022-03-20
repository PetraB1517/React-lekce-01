console.log('%c JavaScript funguje! ', 'background-color: black; color: lime;');

// Cvičení na metody pole

const zasoby = [
  { nazev: '🍏 jablka',    typ: 'ovoce',    pocet: 2,  trvanlivost: 26  },
  { nazev: '🥔 brambory',  typ: 'zelenina', pocet: 27, trvanlivost: 180 },
  { nazev: '🥩 hovězí',    typ: 'maso',     pocet: 3,  trvanlivost: 3   },
  { nazev: '🍞 chleba',    typ: 'pečivo',   pocet: 4,  trvanlivost: 2   },
  { nazev: '🥦 brokolice', typ: 'zelenina', pocet: 1,  trvanlivost: 11  },
  { nazev: '🍩 koblihy',   typ: 'pečivo',   pocet: 6,  trvanlivost: 2   },
  { nazev: '🍓 jahody',    typ: 'ovoce',    pocet: 12, trvanlivost: 7   },
  { nazev: '🥕 mrkev',     typ: 'zelenina', pocet: 7,  trvanlivost: 40  },
  { nazev: '🧀 sýr',       typ: 'sýr',      pocet: 2,  trvanlivost: 10  },
  { nazev: '🍗 kuřecí',    typ: 'maso',     pocet: 4,  trvanlivost: 4   },
];

// Úkoly:

// 1) Projdi pole metodou forEach a vypiš do konzole
// jednu po druhé seznam všech zásob, stačí vždy jen název a počet.
console.log('%c Vypíšeme všechny potraviny ', 'background-color: black; color: tomato;');

zasoby.forEach(
  potravina => console.log(`${potravina.nazev} (${potravina.pocet} ks)`)
);

// 2) Přidej na konec pole nové zásoby.
// (JavaScriptem! Ne že je připíšeš ručně do pole nahoře :D)
// - 🧅 cibule, zelenina, 4 kusy, trvanlivost 120 dnů
// - 🍰 dortík, pečivo, 1 kus, trvanlivost 1 den
console.log('%c Přidáme do pole 2 potraviny ', 'background-color: black; color: tomato;');

zasoby.push({
  nazev: '🧅 cibule',
  typ: 'zelenina',
  pocet: 4,
  trvanlivost: 120,
});
zasoby.push({
  nazev: '🍰 dortík',
  typ: 'pečivo',
  pocet: 1,
  trvanlivost: 1,
});

// 3) Vytvoř nové pole zelenina, a pomocí filter do něj
// vyber všechny zeleninové zásoby.
console.log('%c Jen zeleniny ', 'background-color: black; color: tomato;');

const zelenina = zasoby.filter(potravina => potravina.typ === 'zelenina');

zelenina.forEach(potravina => console.log(`${potravina.nazev} (${potravina.typ})`));

// 4) Odjíždíš na 5 dnů pryč. Vyfiltruj a vypiš všechny
// zásoby, které je potřeba rychle sníst, aby se nezkazily.
// Tj. mají trvanlivost <= 5.
console.log('%c Trvanlivost < 5 dní ', 'background-color: black; color: tomato;');

zasoby
  .filter(potravina => potravina.trvanlivost <= 5)
  .forEach(potravina => console.log(`${potravina.nazev} (${potravina.trvanlivost} dny)`));


// 5) Vrátila ses z výletu a máš dojem, že máš prázdnou spižírnu.
// Zeleninu a ovoce moc nejíš, takže ty tě nezajímají,
// ale vyfiltruj a vypiš všechny ostatní potraviny,
// od kterých máš jen 3 kusy nebo méně - jde se nakupovat!

console.log('%c Jen 3 kusy nebo méně, ale ne zelenina a ovoce ', 'background-color: black; color: tomato;');

zasoby
  .filter(potravina => 
    potravina.pocet <= 3
    && potravina.typ !== 'zelenina'
    && potravina.typ !== 'ovoce'
  )
  .forEach(potravina => console.log(`${potravina.nazev} (${potravina.pocet} ks)`));


