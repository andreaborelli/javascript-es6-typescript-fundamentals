// oggetto che contiene diveri nodi al suo interno
// Destructuring - Nested - nidificato

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
      lat, lng, zoom = 5  // nuovo valoe zoom, settiamo un nuovo valore di deafault
    } 
  } 
} = user; // destruttura da profile una sotto proprietà, es. location

console.log(lat, lng, zoom );