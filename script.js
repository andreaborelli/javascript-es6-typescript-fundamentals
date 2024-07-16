// il rename è utile perchè ci permette di rinominare una variabile in un'altra variabile// rename & short object syntax

const user = {
	name: 'Andrea',
    surname: 'Borelli',
  	profile: {
    	color: 'red',
      	location: {
			lat: 15, lng: 12
		}, 
    }
};

const { 
  profile: { 
    location: {
      lat: lt, lng: lg, zoom = 5  // nuovo valoe zoom, settiamo un nuovo valore di deafault
    } 
  } 
} = user; // destruttura da profile una sotto proprietà, es. location


const params = { lt, lg, zoom } 

	// lt, // rimuoviamo : lt
  	// lg,	// rimuoviamo : lg
  	// zoom // rimuoviamo : zoom
 /* short object syntax è possibile andare ad eliminare la parte in eccedenza 
nel momento in cui chiave e valore hanno lo stesso nome quindi nel caso in cui lt ed lg
coincidano possiamo rimuoverne uno dei due */

// ajax

console.log(params);

/* 
output:

{
  "lt": 15,
  "lg": 12,
  "zoom": 5
}
*/