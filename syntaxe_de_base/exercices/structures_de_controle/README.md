# EXERCICES \_ LES STRUCTURES DE CONTROLE

## Conditions (if, else, else if, switch)

a - Vérification de l'âge
Créez un programme qui demande à l'utilisateur son âge et affiche s'il est mineur, majeur ou senior.
=> Demandez à l'utilisateur de saisir son âge via prompt().
=> Déterminez si la personne est mineure (moins de 18 ans), majeure (18 ans ou plus) ou senior (plus de 65 ans).
=> Affichez le résultat via alert().

```js
let age = prompt("Entrez votre âge : ");

if (age < 18) {
  alert("Vous êtes mineur.");
} else if (age >= 18 && age <= 65) {
  alert("Vous êtes majeur.");
} else {
  alert("Vous êtes senior.");
}
```

b - Vérification du nombre pair ou impair
Demandez un nombre à l'utilisateur et vérifiez s'il est pair ou impair à l'aide d'une condition if-else.
=> Demandez à l'utilisateur de saisir un nombre entier via prompt().
=> Si le nombre est pair, affichez via alert() "Le nombre est pair", sinon affichez "Le nombre est impair".

```js
let number = parseInt(prompt("Entrez un nombre entier : "));

if (number % 2 === 0) {
  alert("Le nombre est pair");
} else {
  alert("Le nombre est impair");
}
```

c - Choix de la saison
Demandez à l'utilisateur d'entrer un mois de l'année, puis affichez la saison correspondante.
=> Demandez à l'utilisateur de saisir un mois sous forme de texte via prompt().
=> Utilisez une structure switch pour déterminer la saison (hiver, printemps, été, automne).
=> Affichez le résultat via alert().

```js
let month = prompt("Entrez un mois de l'année : ").toLowerCase();

switch (month) {
  case "décembre":
  case "janvier":
  case "février":
    alert("C'est l'hiver.");
    break;
  case "mars":
  case "avril":
  case "mai":
    alert("C'est le printemps.");
    break;
  case "juin":
  case "juillet":
  case "août":
    alert("C'est l'été.");
    break;
  case "septembre":
  case "octobre":
  case "novembre":
    alert("C'est l'automne.");
    break;
  default:
    alert("Mois invalide.");
}
```

d - Vérification de l'année bissextile
Demandez à l'utilisateur d'entrer une annéeet vérifiez si elle est bissextile.
=> Demandez à l'utilisateur de saisir une année via prompt().
=> Utilisez des conditions if-else pour déterminer si l'année est bissextile (divisible par 4, mais pas par 100, sauf si elle est divisible par 400).
=> Affichez le résultat via alert().

```js
let year = parseInt(prompt("Entrez une année : "));
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  alert("L'année est bissextile.");
} else {
  alert("L'année n'est pas bissextile.");
}
```

## Boucle for

a - Affichage des nombres de 1 à 10
Utilisez une boucle for pour afficher les nombres de 1 à 10.
=> Affichez les nombres de 1 à 10 via console.log().

```js
for (let index = 1; index <= 10; index++) {
  console.log(index);
}
```

b - Somme des nombres de 1 à 100
Utilisez une boucle for pour calculer la somme des nombres de 1 à 100.
=> Créez une boucle for qui additionne tous les nombres de 1 à 100.
=> Affichez le résultat via console.log().

```js
let sum = 0;

for (let index = 1; index <= 100; index++) {
  sum += index;
}

console.log(`La somme des nombres de 1 à 100 est : ${sum}`);
```

c - Affichage des nombres pairs entre 1 et 20
Utilisez une boucle for pour afficher tous les nombres pairs entre 1 et 20.
=> Créez une boucle for qui parcourt les nombres de 1 à 20.
=> Affichez chacun des résultats via console.log().

```js
for (let index = 1; index <= 20; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}
```

d - Multiplication des nombres de 1 à 10
Créez une boucle for qui affiche la table de multiplication de 7.
=> Créez une boucle for qui multiplie 7 par les nombres de 1 à 10.
=> Affichez chacun des résultats via console.log().

```js
for (let index = 1; index <= 10; index++) {
  const result = 7 * index;
  console.log(`7 * ${index} = ${result}`);
}
```

e - Affichage des multiples de 3 entre 1 et 30
Créez une boucle for qui affiche tous les multiples de 3 entre 1 et 30.
=> Créez une boucle for qui affiche via console.log() tous les multiples de 3 dans cette plage.

```js
for (let index = 3; index <= 30; index += 3) {
  console.log(index);
}
```

### Boucle while

a - Affichage des nombres de 1 à 5
Utilisez une boucle while pour afficher les nombres de 1 à 5.

```js
let index = 1;

while (index <= 5) {
  console.log(index);
  index++;
}
```

b - Demander un nombre jusqu'à obtenir un nombre positif
Demandez à l'utilisateur un nombre via prompt() et continuez à demander tant que le nombre est négatif.

```js
let number = -1;

while (number <= 0) {
  number = parseInt(prompt("Entrez un nombre positif : "));
}

alert("Vous avez entré un nombre positif : " + number);
```

c - Somme des nombres de 1 à 100
Utilisez une boucle while pour calculer la somme des nombres de 1 à 100.
=> Créez une boucle while qui additionne tous les nombres de 1 à 100.
=> Affichez le résultat via console.log().

```js
let sum = 0;
let index = 1;

while (index <= 100) {
  sum += index;
}

console.log(`La somme des nombres de 1 à 100 est : ${sum}`);
```
