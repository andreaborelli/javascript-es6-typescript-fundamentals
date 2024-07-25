const users = [
  {"id": 1, "name": "Silvia", "age": 2, "gender": "F", city: "Gorizia"},
  {"id": 2, "name": "Fabio", "age": 40, "gender": "M", city: "Trieste"},
  {"id": 3, "name": "Lorenzo", "age": 6, "gender": "M", city: "Pordenone"},
  {"id": 4, "name": "Lisa", "age": 40, "gender": "F", city: "Gorizia"}
];

/* ES6 fornisce una serie di metodi per lavorare con gli array, uno dei più utilizzati è map,
che ci permette di creare una nuova collezione dati, una nuova reference, una nuova locazione di memoria, 
a partire di un array, il metodo map accetta un parametro chiamato funzione di trasformazione,
quindi un funzione che tramite una certa sintassi ci permette di trasformare la presente collezione in un'altra,
in particolar modo ci permetterà di andare a manipolare la presente collezione nel caso volessimo ottenere una nuova lista in cui
abbiamo gli id */

// const newList = users.map(function(user, index) { // il metodo map accetta un parametro chiamato funzione di trasformazione
	 // console.log('ciao');
  	// console.log(user);

 // return user.id;
//}); 
/* map andrà ad iterare ogni elemento della nostra collezione e ci permetterà di effettuare un operazione all'interno */


const newList = users.map( user => `${user.name}  (${user.age})`);
  //return user.name + '(' + user.age + ')';
 
	 console.log(newList); // ["Silvia(2)", "Fabio(40)", "Lorenzo(6)", "Lisa(40)"]