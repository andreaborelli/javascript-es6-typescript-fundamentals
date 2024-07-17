/* lo spread operator è una nuova funzionalità 
offerta da ES6 ed è rappresentata 
da 3 punti uno dietro l'altro ... 
è funziona sia con gli array che con gli oggetti*/

// const data = [1, 2, 3, 4];

// const result = [data];


const data = [1, 2, 3, 4];

const list = [5, 6];

// al posto di usare push, usiamo concat data.push();

// const result = data.concat([5]); 
/* data.concat([5]); questo meccanismo ci permette di sfruttare 
anche il concetto di immutabilità soprattutto in framework 
come Angular e React */

// const cloned =[...data, ...list, 7, 8]; // cloniamo array data

// abbiamo creato un nuovo array che è un merge di data e lista e con l'aggiunta di due elementi in linea

const merged =[...data, ...list, 7, 8]; // cloniamo array data

console.log(merged);