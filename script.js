

/* Immutabilita, stato immutabile, oggetto immutabile,
sono tutti termini che ultimamente vanno molto di moda,
in particolar modo un oggetto immutabile è un oggetto 
che non può essere modificato dopo la sua creazione 
e che va un pò in contrasto con il concetto di mutabilità dove 
invece un oggetto può essere effettivamente modificato,
questo termine, concetto di immutability è stato reso noto dopo l'uscita di redax
che è un pattern architetturale per la gestione dello stato applicativo, definito anche state manager
può essere abbinato ad un react, a un angular, a un viewer o semplicemente a un play javascript
per la gestione di tutto quello che riguarda il dato,
è serve per applicazioni molto complesse nelle quali effettivamente abbiamo 
un flow dei dati molto articolato vari componenti o parti dell'applicazione che devono rimanere sincronizzate,
è ci sono una serie di casistiche che necessitano di utilizzare uno state manager,
ma in realtà in framework come angular, o librerie come react, un approccio immutabile 
può essere anche utilizzato per aumentare le performance dell'applicazione tramite alcuni stratagemmi 
e delle API offerte da framework e librerie che effettivamente sfruttano questo approccio
per ottimizzare le performance ed evitare per esempio render superflui di componenti*/

const users = [
  {"id": 10, "name": "Silvia", "age": 2, "gender": "F", city: "Gorizia"},
  {"id": 20, "name": "Fabio", "age": 40, "gender": "M", city: "Trieste"},
  {"id": 30, "name": "Lorenzo", "age": 6, "gender": "M", city: "Pordenone"},
  {"id": 40, "name": "Lisa", "age": 40, "gender": "F", city: "Gorizia"}
];

// approccio mutabile stiamo modificando l'oggetto originale
/* cosa vuol dire mutare un oggetto?   
es. se dovessimo aggiungere un elemento a questa collezione potremmo effettuare un push es.users.push({});
un push modifica semplicemente l'oggetto originale, inserendo un nuovo oggetto all'utima posizione dell'array
*/

// add inserimento
// users.push({});

// delete cancellazione
// users.splice(2, 1 ); 
/* che attraverso un indice es. id 30, l'indice sarà 2,
per quanti elementi vogliamo cancellarne es: 1 per uno solo, 
quindi abbiamo eliminato l'oggetto con id 30, 
se eliminiamo (2, 2 ) verrà eliminato anche l'oggetto con id 40 */


// edit editare
// users[0].name = 'Andrea'; 
/* definire quale l'indice dell'elemento da modificare es il primo elemento con indice 0 
es. modifichiamo il nome */

// console.log(users);

/* approccio immutabile senza modificare l'oggetto originale: 
semplicemente dovremmo, per ogni operazione andare a creare una sorta di clone
della collezione o dell'oggetto originale per poi andare effettivamente 
a modificare questo nuovo oggetto clonato lasciando inalterato la collezione originale  */


// add immutabile
const user = { id: 50, name: 'Mario' };
let newList =  [...users, user ]; /* creiamo una nuova collezione, con spread operator per creare un nuovo oggetto
creiamo un nuovo array, andando a clonare l'oggetto originale es. users con lo spread operator 
che ci permette di inserire solo gli elementi all'interno dell'array e non creare un array di array, se evitassimo i ...users
quindi andiamo ad aggiungere un nuovo user in pratica abbiamo la lista di oggetti users originale e la nuova lista newList modificata */

// delete immutabile
const ID = 40;
newList = users.filter(u => u.id !== ID)
/* per la delete andiamo a definire quale ID vogliamo cancellare es. id 40, 
a questo punto potremmo eliminare l'oggetto filtrando la collezione originale users 
ed eliminando tramite una condizione gli elementi che non ci interessano es. id 40, 
quindi creiamo una nuova lista: newList (const newList in let newList) e andiamo a filtrare users con filter
che richiede una funzione come parametro che ci restituisce l'utente su cui stiamo iterando
chiamandola u e non user perchè abbiamo già una costante user ed andremo a creare una shadow property cioè potenziali conflitti.
quindi u è l'elemento su cui stiamo iterando, ed scegliamo cosa includere nella collezione 
cioè tutti gli elementi che hanno un id diverso dall'ID che vogliamo cancellare u => u.id !== ID  */

// edit immutabile
/* const updateUser = {id: 20, name: 'Ciccio', age: 25}
newList = users.map(u => {
	if(u.id === updateUser.id){
      return Object.assign({}, u, updateUser)
       }
  return u
}) */
/* map fa si che tutta la lista venga rimappata con gli elementi identici, 
quindi la funzione di trasformazione restituirà lo stesso identico elemento eccetto per elemento con id: 20 
che farà un merge tra l'oggetto originale e il nuovo updateUser che in realtà andrà a piazzare name: ed age: 
la funzione ci restituirà un id, potremmo restituire qualcosa, con return, se restituimo u abbiamo clonato users, 
perchè per ogni elemento su cui iteriamo restituiremo lo stesso elemento praticamente un array identico, 
ma possiamo mettere una condizione se u cioè l'utente su cui stiamo iterando u.id è === a updateUser.id 
cioè quello che vogliamo editare/modificare, restituisci l'elemento aggiornato return updateUser
ma dall'oggetto abbiamo perso gender: e city: 
per risolvere il problema bisogna creare un merge tra updateUser quindi l'elemento che vogliamo modificare e quello su cui stiamo iterando 
che contiene tutte le informazioni cioè u quindi possiamo Object.assign tra tutti i dati dell'utente su cui stiamo iterando cioè u effettuando un merge con tutti quelli di updateUser  */

// edit immutabile più coinciso con ternario
//const updateUser = {id: 20, name: 'Ciccio', age: 25}
//newList = users.map(u => {
// condizione se è vera mi restituisci Object.assign({}, u, updateUser) altrimenti u cioè l'oggetto intero
 // return (u.id === updateUser.id) ?  Object.assign({}, u, updateUser): u;
  
/* in alternativa a Object.assign({}) possiamo utilizzare l'object spread operator quindi con ...u ...updateUser 
cioè sugli oggetti anzichè sugli array */  
    // return (u.id === updateUser.id) ?  Object.assign({}, u, updateUser): u;

//})

// edit immutabile più coinciso con ternario in line togliendo anche le parentesi tonde
const updateUser = {id: 20, name: 'Ciccio', age: 25}
newList = users.map(u => u.id === updateUser.id ?  Object.assign({}, u, updateUser): u)
console.log(newList); 