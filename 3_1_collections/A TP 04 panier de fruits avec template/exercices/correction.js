// SYNTAXE ET MODIFICATION D'UN ARRAY //

// a //

const tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const autreTableau = [];
for (let index = 1; index <= 10; index++) {
  autreTableau.push(index);
}

const dernierTableau = Array(10)
  .fill()
  .map((element, index) => index + 1);

console.log(`Mon tableau : ${tableau}`);
console.log(`Mon autre tableau : ${autreTableau}`);
console.log(`Mon dernier tableau : ${dernierTableau}`);

// b //

tableau.push(11);
tableau.unshift(0);

console.log(`Mon tableau : ${tableau}`);

// c //

tableau[2] = 20;

console.log(`Mon tableau : ${tableau}`);

// d //

tableau.splice(1, 1);

console.log(`Mon tableau : ${tableau}`);

// e //

const index = tableau.findIndex((element) => element === 5);

console.log(`l'index de l'élément ayat une valeur de 5 est : ${index}`);

let index;

tableau.forEach((element, i) => {
  if (element === 5) {
    index = i;
  }
});

console.log(`L'index de l'élément ayant une valeur de 5 est : ${index}`);

// LES BOUCLES //

const tableau = [0, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// a //

for (let index = 0; index < tableau.length; index++) {
  console.log(tableau[index]);
}

for (const element of tableau) {
  console.log(element);
}

tableau.forEach((element) => {
  console.log(element);
});

// b //

let somme = 0;

for (const element of tableau) {
  somme += element;
}

console.log(`La somme de tous les éléments de mon tableau est de ${somme}`);

// c //

for (const [index, element] of tableau.entries()) {
  if (element > 5) {
    console.log(index);
  }
}

// Les Méthodes map, find et filter //

const tableau = [0, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// a //

const nouveauTableau = tableau.map((element) => element * 2);

console.log(`Mon nouveau tableau : ${nouveauTableau}`);

// b //

const valeur = tableau.find((element) => element > 8);

console.log(`Le premier element ayant une valeur d'au moins 8 est ${valeur}`);

// c //

const pairs = tableau.filter((element) => element % 2 === 0);

console.log(`Le tableau ne comportant que des paires : ${pairs}`);

// d //

const tableau = [0, 20, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const resultat = tableau.map((element) => {
  let value = "";

  if (element % 3 === 0) value += "Fizz";
  if (element % 5 === 0) value += "Buzz";
  if (value === "") value = element;

  return value;
});

console.log(resultat);
