const users = [
  {"id": 10, "name": "Silvia", "age": 2, "gender": "F", city: "Gorizia"},
  {"id": 20, "name": "Fabio", "age": 40, "gender": "M", city: "Trieste"},
  {"id": 30, "name": "Lorenzo", "age": 6, "gender": "M", city: "Pordenone"},
  {"id": 40, "name": "Lisa", "age": 40, "gender": "F", city: "Gorizia"}
];

/* Il metodo findIndex tramite un funzione ci permette di andare a recuperare 
l'indice di un elemento della nostra collezione  */

const ID = 30

// const index = users.findIndex(user => user.id === ID)

// users.splice(index, 1);

const user = users.find(user => user.id === ID)

console.log(user); // { id: 30, name: 'Lorenzo', age:

/* Il metodo find permette di cercare direttamente l'elemento che stiamo cercando */