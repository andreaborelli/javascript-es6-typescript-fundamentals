export const add = (a) => {
    return a + 2;
  };


  /* nel caso in cui avessimo due file es. operations.js e utility.js 
    che contengono entrambi un metodo con lo stesso nome es. add
    solo con implementazioni differenti, per distinguere es. in main.js 
    per andare a distinguere i due metodi add da utility.js e operations.js 
   importando sia add da utility.js che anche da operations.js possiamo usare una sintassi diversa 
   andando ad identificare ho ad rinominare il metodo che abbiamo effettivamente importato, 
   per rinominrlo bisogna aggiungere as nuovoNome così: import { add as newAdd } from './operations.js';
*/