// conditions //

// a //

const age = prompt("Entrez votre age :");

if (age < 18) {
  alert("Vous êtes mineur");
} else if (age < 65) {
  alert("Vous êtes majeur");
} else {
  alert("Vous êtes senior");
}

// b //

const number = prompt("Entrez un nombre entier");

if (number % 2 === 0) {
  alert("Le nombre est pair");
} else {
  alert("Le nombre est impair");
}

// c //
const month = prompt("Entrez le mois de votre choix :");

switch (month) {
  case "janvier":
  case "fevrier":
  case "mars":
    alert("Nous sommes en hivers");
    break;
  case "avril":
  case "mai":
  case "juin":
    alert("Nous sommes au printemps");
    break;
  case "juillet":
  case "aout":
  case "septembre":
    alert("Nous sommes en été");
    break;
  case "octobre":
  case "novembre":
  case "decembre":
    alert("Nous sommes en automne");
    break;
  default:
    alert("Ce mois n'existe pas");
}

// d //
const year = prompt("Entrez une année");

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  alert(`L'année ${year} est bissextile`);
} else {
  alert(`L'année ${year} n'est pas bissextile`);
}

// boucle for //

// a //

for (let index = 1; index <= 10; index++) {
  console.log(index);
}

// b //

let total = 0;

for (let index = 1; index <= 100; index++) {
  total += index;
}

console.log(`Le total est de ${total}`);

// c //

for (let index = 1; index <= 20; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

for (let index = 2; index <= 20; index += 2) {
  console.log(index);
}

// d //

for (let index = 1; index <= 10; index++) {
  console.log(`Le resultat de l'opération ${index} * 7 est de ${index * 7}`);
}

// e //

for (let index = 1; index <= 30; index++) {
  if (index % 3 === 0) {
    console.log(index);
  }
}

// boucle while //

// a //

let index = 1;

while (index <= 5) {
  console.log(index);
  index++;
}

// b //

let input = -1;

while (input <= 0) {
  input = prompt("Saississez un nombre");
}

// c //

let index = 1;
let total = 0;

while (index <= 100) {
  total += index;
  index++;
}

console.log(`La somme de tous les nombres de 1 à 100 est de ${total}.`);

// fonctions //

// a //

function diviserParDeux(number) {
  return number / 2;
}

diviserParDeux(7);

// b //

function somme(a, b, c) {
  return a + b + c;
}

somme(1, 4, 5);

// c //

function factorielle(number) {
  let result = 1;

  for (let index = 1; index <= number; index++) {
    result = result * index;
  }

  return result;
}

factorielle(5);

// d //

function majorite(age) {
  return age < 18 ? false : true;
}

majorite(16);

// FIZZBUZZ //

for (let index = 1; index <= 100; index++) {
  let answer = "";

  if (index % 3 === 0) {
    answer += "Fizz";
  }

  if (index % 5 === 0) {
    answer += "Buzz";
  }

  if (answer === "") {
    answer = index;
  }

  console.log(answer);
}
