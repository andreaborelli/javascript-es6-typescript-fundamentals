/* template literals: sono la possibilità 
di inserire all'interno di una stringa un'espressione */

const age = 40;
// const a = 'hello Andrea' + ' ' + (1+1) + ' ' + age;

const a = `hello Andrea (${1+1}) ${age}`

// const url = `${API}/${endpoint}/${id}` // es. molto più leggibile,invece di avere / '+' ecc..

/* con i backtick la stringa può essere anche multiline, 
e l'output corrisponte a quanto scritto, 
molto comodo perchè in contesti come angular 
es. usando i backtick in template in typescript: `
    <h1>
      Hello world!
    </h1>
  `;  */

const name = `
	hello 
		Andrea 
		(${1+1}) 
	${age}`

console.log(a);

console.log(name);