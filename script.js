/* il concetto di classe è stato introdotto in javascript dalla versione ES6 
è un costrutto utilizzabile in qualunque linguaggio di programmazione orientato agli oggetti 
ma in javascript mancava, ma ora lo abbiamo a disposizione.
in realta se scriviamo una classe vedremo che in fase di traspiling/compilazione 
il tutto verrà tradotto in una funzione per essere compatibile con i browser che supportano 
la versione ES5 del browser, tuttavia adesso possiamo utilizzare la classe come 
un normalissimo linguaggio orientato agli oggetti, quindi possiamo 
creare la classe istanziarla con un var o meglio ancora con un const 
che tramite una keyword new possiamo creare una nuova istanza di es Pippo();
potra avere al suo interno un metodo hello() che accetta un valore (value), 
invocheremo il metodo hello p.hello('Andrea');

abbiamo anche la possibilità di avere un costruttore, 
che viene invocato ogni qualvolta viene creata una nuova istanza di una classe 
infatti viene invocato prima il costruttore.

con extends possiamo estendere una classe infatti invece di istanziare Pippo
possiamo istanziare Pluto, questo: const p = new Pippo(); con const p = new Pluto();

rappresenta la base class: class Pippo
estende la class Pippo: class Pluto extends Pippo

per accedere alle proprietà di una classe bisogna utilizzare la parola chiave this



class Pippo{

 constructor(){
    console.log('constructor');
  }
  
	hello(value){
    	console.log('ciao' + value);
    }

}
class Pluto extends Pippo{

}

const p = new Pippo();
*/

/*  */

class Pippo{
  
  text = 'Ciao';
  
  constructor() {
  	setTimeout(() => {
        console.log(this.text); 
     }, 2000) // Ciao 
  }


	hello(value){
    	console.log( this.text +' ' + value); // per accedere alle proprietà di una classe bisogna utilizzare la parola chiave this
    }

}


const p = new Pippo();
p.hello('Andrea'); // Ciao Andrea