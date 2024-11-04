/**
  una funzione che ha accesso a una variabile che non è usata 
 */

// Id generator

export function getId() {
  let id = 0;

  return function(){
    id++;
    return id;
  }
};
// id = 999; // hoisting
