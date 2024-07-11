
const user = {
  first: 'Andrea',
  last: 'Borelli',
  // preference: 'red' // se decommento vedo red
}; 

//console.log(`${user.first}  (${user.last})`);

// per path più lunghi
// const first = user.first;
// const last = user.last;
// riduce la complessità, aumentando la leggibilità


/* con destructuring object quali proprietà estrapolare 
es. first e last, è da dove vogliamo 
e da dove vogliamo estrarre tali proprietà es dall'oggetto user */

// const {first, last} = user; // una sola riga per definire due espressioni

// console.log(`${first} (${last})`); 

/* possiamo anche effettuare il rename di una proprietà
*/

// const {first: f, last: l, preference} = user;


// let { first: f, last: l, preference } = user;


/* impostare default preference con not ! cioè 
che non sia impostato gestione di tutti i casi*/

/*if (!preference) { questo blocco agisce solo quando la condizione è false cioè non esiste una preference
  preference = 'Black';
} */


/* sintassi più moderna reale */

let { first: f, preference: pref = 'black' } = user; // agisce solo quando la condizione è false cioè non esiste una preference

console.log(`${f} (${pref})`); 

