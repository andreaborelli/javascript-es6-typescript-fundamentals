const users = [
  {"id": 1, "name": "Silvia", "age": 2, "gender": "F", city: "Gorizia"},
  {"id": 2, "name": "Fabio", "age": 40, "gender": "M", city: "Trieste"},
  {"id": 3, "name": "Lorenzo", "age": 6, "gender": "M", city: "Pordenone"},
  {"id": 4, "name": "Lisa", "age": 40, "gender": "F", city: "Gorizia"}
];

/* il metodo filter degli array ci permette di filtrare una collezione, 
quindi di partire di un array e arrivare a restituire un nuovo array, 
quindi ci restituirà una nuova collezione senza alcun riferimento alla precedente,
andando ad iterare su ogni singola voce della collezione, 
è andando a definire con un predicato, 
ovvero un espressione che ci restituisce un booleano true o false, 
se quello elemento sarà incluso nella collezione con un true oppure escluso con un false*/

//const newList = users.filter(user =>{
	// return user.age > 18;
// })


const newList = users.filter(user => user.age > 18)
					.map(user => user.id); // per ogni elemento filtrato a noi interessa esclusivamente l'id
// anche il map ci permette di iterare sugli elementi filtrati  

// risultato sarà un array solo con gli id che corrispondono alla nostra condizione user.age > 18

console.log(newList); // [2, 4]
