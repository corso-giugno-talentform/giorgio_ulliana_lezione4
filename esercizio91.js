//esercizio91 - crea oggetto libro
//creazione oggetto
let libro = {
  titolo: 'cucinare zucchine',
  autore: 'giorgio',
  pagine: 30,
  letto: true,

  //metodi
  stampalibro: function () {
    console.log(`${this.titolo} ${this.autore} ${this.pagine} ${this.letto}`);
  },
  gialetto: function () {
    this.letto == false;
    console.log(this.letto);
  },
  tempolettura: function () {
    console.log(this.pagine * 2);
  },
};

//    UTILIZZO
//accesso alle proprieta'
console.log(libro.titolo);

//modifica proprieta' e stampa
libro.titolo = 'cucinare le zucchine';
console.log('nuovo titolo: ' + libro.titolo);

//stampa delle info:
console.log('');
console.log('  Informazioni sul libro aggiornate: ');
console.log('titolo: ' + libro.titolo);
console.log('autore: ' + libro.autore);
console.log('pagine: ' + libro.pagine);
console.log('tempo di lettura ' + libro.pagine * 2 + ' minuti');
if (libro.letto == true) {
  console.log('il libro e stato letto');
} else {
  console.log('il libro non e stato letto');
}

//stampa delle info:
console.log('');
console.log('  e in sintesi: ');
libro.stampalibro();
console.log('tempo di lettura ' + libro.pagine * 2 + ' minuti');
if (libro.letto == true) {
  console.log('il libro e stato letto');
} else {
  console.log('il libro non e stato letto');
}
