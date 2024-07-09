/* Short Object syntax: la possibilità di creare oggetti 
con una sintassi molto più coincisa */

const user = {
  id: 123,
  name: 'Andrea',
  surname: 'Borelli',
  profile: {
    color: 'blue',
    location: 'Genova'
  }

};

/* const params = {
	id: user.id, // recupera valori da user
  	color: user.profile.color
} */


const id = user.id
const color = user.profile.color

const params = { id, color }

// scambio dati server ajax
console.log(params);