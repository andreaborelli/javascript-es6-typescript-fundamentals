import Panel  from './utility.js';

const a = new Panel();


const p = new Promise((resolve, reject) => {
    setTimeout(() => resolve(5), 3000);
});

p.then(
    () => new Promise((resolve, reject) => {
        setTimeout(() => resolve(50), 3000);
    })
).then(
    data => console.log(data)
).catch(
    err => console.log(err)
);

/* una promise è un oggetto che rappresenta un'operazione asincrona e il suo eventuale completamento o fallimento. 
Le promise sono un modo per gestire il codice asincrono, facilitando il lavoro con operazioni 
che non avvengono immediatamente, come richieste HTTP, timeout, o operazioni di lettura/scrittura su file. */
