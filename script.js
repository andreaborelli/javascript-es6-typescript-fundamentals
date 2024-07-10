/* il Destructuring Array o destrutturazione 
è una nuova espressione introdotta in javascript ES6 
per estrarre da array o da oggetti dei valori rispettivamente 
o delle proprietà creando delle nuove variabili 
che conterranno tali valori */

const list = [10, 20, 30, 40, 50];

// const [a, b, c, d, e = 50] = list; // ad variabile e assegno un dato di default

//const [a, b] = list;

const [a, b, ...rest] = list; /* con destructuring invece di utilizzare il nome della costante 
						direttamente subito dopo const, utilizzeremo le parentesi quadre 
                        per indicare che stiamo facendo il destructuring di un array, 
                        creando delle variabili a, e b, 
                        dove a sarà assegnato automaticamente al primo valore dell'array, 
                        e b al secondo valore dell'array, 
                        semplicemente scrivendo il segno = 
                        e definendo l'oggetto, list
                        in questo caso l'array che vogliamo estrapolare tali proprietà
                        sintassi più pulita */
/* non sapendo la lunghezza dell'array, impostiamo i primi due valori, 
è aggiungendo lo spread operator aggiungendo ... 
con il nome di un ulteriore proprietà che potremmo chiamare come vogliamo es ...rest 
così facendo recupereremo i valori rimanenti successivi ai primi 2 array */

// const a = list[0];
// console.log(list[0]);
// console.log(a);
//console.log(a, b, c, d, e );
//console.log(a, b, );
console.log(a, b, rest );