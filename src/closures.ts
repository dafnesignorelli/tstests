/**
  una funzione che ha accesso a una variabile che non è usata 
 */

// Id generator

// let id = 0;

export const getId = () => {
  let id = 0;
  id++;
  return id;
};

// id = 999; // hoisting
