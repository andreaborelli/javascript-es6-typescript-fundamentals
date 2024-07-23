
/* per effettuare un clone di un oggetto o un merge 
tra due oggetti in JavaScript abbiamo sostanzialmente due possibilità,
1 è l'utilizzo di object.assign, e l'altro l'utilizzo di Object spread operator*/
const obj = {
	id: 123,
  name: 'Andrea'
}

const preferences = { color: 'red' };

// const cloned = Object.assign({}, obj); // clone passando l'oggetto che vogliamo clonare

// const cloned = Object.assign({}, obj, preferences, { pet: 'dog' }); 
/* Object.assign accetta un numero arbitrario (non specificato) 
di parametri, possiamo anche inserire un nuovo oggetto 
es: Object.assign({}, obj, preferences { pet: 'dog' }) */


const merged = {...obj, ...preferences, pet: 'dog'}; /* Object Spread Operator, è la versione sintetica dell'object.assign:
creiamo un nuovo oggetto è al posto di passare un array, 
andremo con il ... è il nostro oggetto {...obj} 
abbiamo anche la possibilità di fare il merge con es: preferences {...obj, ...preferences} 
possiamo anche aggiungere altre proprietà aggiungendo pet: 'dog' così: {...obj, ...preferences, pet: 'dog'} */

// cloned.id = 456; 
/* valore mutato infatti da lo stesso risulto se loggo obj, 
quindi bisogna aggiungere le {} così: Object.assign({}, obj); 
in pratica Object.assign crea un nuovo oggetto (reference) con {}, e fa il merge con obj
 quindi con ({}, obj) facciamo un merge tra un oggetto vuoto e obj,
 infatti aggiungendo preferences faremo il merge tra obj e preferences 
 
 Immutabilità: Creare nuovi oggetti piuttosto che modificare quelli esistenti 
 aiuta a mantenere l'immutabilità, che è una buona pratica nella programmazione 
 funzionale.*/

console.log(merged); // { "id": 123, "name": "Andrea", "color": "red", "pet": "dog"}