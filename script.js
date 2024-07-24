// 1 modo di scrittura funzione
/*function add(a, b){
/* return 'Hello';
  return a + b;
}
add();
console.log(add(3, 4));*/

// 2 modo di scrittura funzione associandola ad una variabile
/* var add = function addOperation(a, b){
  return a + b;
}
add();
console.log(add(3, 4));*/

/* una funzione arrow è una funzione nella quale abbiamo 
omesso la parola chiave function, 
è abbiamo utilizzato dopo i parametri i segni di => per indicare una freccia, 
il vantaggio è quello di essere una sintassi più coincisa, 
ci permette dei vantaggi per l'utilizzo del this  */

const add = (a, b) => {
  return a + b;
}

/* const divide = (a, b) => { 
  return a / b; 
} */
/* quando il blocco di istruzioni ha solo una righa, 
possiamo portare la riga in linea, togliere il return e le {}  */

const divide = (a, b) =>  a / b; // il return sarà implicito

const pow = a => a * a; /* con un solo parametro possiamo omettere ' togliere ' le parentesi () in (a) 
						così l'istruzione diventa ancora più coincisa */
const greetings = () => console.log('Hello'); /* se non ci sono parametri nella funzione possiamo lasciare le () vuote, 
												in alcuni casi invece di trovare le () possiamo trovare underscore _ */
greetings(); // chiamo la funzione
console.log(pow(4)); // 16