# LES COLLECTIONS EN JAVASCRIPT

Les collections en JavaScript sont des structures qui permettent de stocker plusieurs valeurs dans une seule variable. Les deux types de collections les plus courants sont les tableaux (Arrays) et les objets (Objects), mais il existe aussi d'autres structures comme les Map, Set, etc.

## TABLEAUX (Arrays)

Un tableau est une collection ordonnée d'éléments. Chaque élément du tableau est indexé et peut être de n'importe quel type (nombre, chaîne de caractères, objets, etc.).

### Syntaxe et Initialisation

- Déclaration d'un tableau :
  En JavaScript, vous pouvez déclarer un tableau de plusieurs manières :

```js
// Déclaration d'un tableau vide //
const tableau1 = [];

// Déclaration d'un tableau contenant des éléments //
const tableau2 = [1, 2, 3, 4];

// Déclaration d'un tableau contenant des éléments de différents types //
const tableau3 = [1, "texte", true, [1, 2, 3]];

// Déclaration d'un tableau en utilisant la méthode Array, créé un tableau contenant 5 éléments "undefined" //
const tableau4 = new Array(5);
```

- Accéder à un élément d'un tableau :
  Les éléments d'un tableau sont indexés à partir de 0. Vous pouvez accéder à un élément en utilisant l'index.

```js
const tableau = ["a", "b", "c"];

// Affiche "a" //
console.log(tableau[0]);

// Affiche "b" //
console.log(tableau[1]);
```

- Modifications d'un élément :
  Vous pouvez modifier un élément du tableau en utilisant son index.

```js
const tableau = [10, 20, 30];

// je change la valeur de l'élément en deuxième position à 40 //
tableau[1] = 40;

// affiche [10, 40, 30] //
console.log(tableau);
```

### Manipulation d'un tableau

- Ajouter des éléments dans un tableau :
  - <code>push()</code> : Ajoute un ou plusieurs éléments à la fin du tableau.
  - <code>unshift()</code> : Ajoute un ou plusieurs éléments au début du tableau.

```js
const tableau = ["a", "b", "c"];

// affiche ["a", "b", "c", "d"] //
tableau.push("d");
console.log(tableau);

// affiche ["z", "a", "b", "c", "d"] //
tableau.unshift("z");
console.log(tableau);
```

- Supprimer des éléments dans un tableau
  - <code>pop()</code> : Supprime le dernier élément du tableau.
  - <code>shift()</code> : Supprime le premier élément du tableau.
  - <code>slice()</code> : Permet d'extraire une portion d'un tableau sans modifier le tableau d'origine.
  - <code>splice()</code> : Permet de supprimer, ajouter ou remplacer des éléments à une position spécifique.

```js
const tableau = ["joujou", "hibou", "caillou", "jenou"];

// affiche ["joujou", "hibou", "caillou"] //
tableau.pop();
console.log(tableau);

// affiche ["hibou", "caillou"] //
const nouveauTableau = tableau.slice(1, 3);
console.log(nouveauTableau);

// affiche ["hibou", "caillou"] //
tableau.shift();
console.log(tableau);

// affiche ["hibou", "chou", "caillou"] //
tableau.splice(1, 0, "chou");
console.log(tableau);
```

### Boucles et parcourir un tableau

- Boucle for classique :
  La boucle for est la manière la plus simple pour parcourir un tableau lorsque vous avez besoin de connaître l'index des éléments.

```js
const tableau = [10, 20, 30, 40];
for (let index = 0; index < tableau.length; index++) {
  // affiche chaque élément du tableau //
  console.log(tableau[i]);
}
```

- Boucle for ... of :
  Cette boucle permet de parcourir le tableau sans utiliser l'index.

```js
const tableau = ["a", "b", "c"];
for (const element of tableau) {
  // affiche chaque élément du tableau //
  console.log(element);
}
```

- La méthode <code>forEach()</code> :
  La méthode forEach() permet de parcourir un tableau et d'appliquer une fonction à chaque élément.

```js
const tableau = [10, 9, 8, 7, 6, 5];
tableau.forEach(function (element, index) {
  // affiche chaque élément et index du tableau //
  console.log(`Index: ${index}, valeur: ${element}`);
});
```

- Les méthodes <code>map()</code>, <code>filter()</code>, <code>find()</code> et <code>reduce()</code> :

La méthode <code>map()</code> permet de créer un nouveau tableau avec les résultats d'une fonction appliquée à chaque élément du tableau.

```js
const tableau = [10, 20, 30];
const nouveauTableau = tableau.map(function (element) {
  return element + 1;
});

// affiche [10, 20, 30] //
console.log(tableau);
// affiche [11, 21, 31] //
console.log(nouveauTableau);
```

La méthode <code>filter()</code> permet de créer un nouveau tableau en ne conservant que les éléments vérifiant une condition appliquée à chaque élément du tableau.

```js
const tableau = [1, 2, 3, 4];
const elementsPairs = tableau.filter(function (element) {
  return element % 2 === 0;
});

// affiche [1, 2, 3, 4] //
console.log(tableau);
// affiche [2, 4] //
console.log(elementsPairs);
```

La méthode <code>find()</code> retourne la valeur du premier élément vérifiant une condition appliquée à chaque élément du tableau.

```js
const tableau = [10, 15, 20, 25, 30];
const multiple10 = tableau.find(function (element) {
  return element % 10 === 0;
});

// affiche [10, 15, 20, 25, 30] //
console.log(tableau);
// affiche 10 //
console.log(multiple10);
```

La méthode <code>reduce()</code> permet d'accumuler une valeur à partir des éléments d'un tableau en appliquant une fonction de rappel sur chaque élément. Elle prend deux arguments principaux : une fonction de rappel (callback) et une valeur initiale pour l'accumulateur (optionnelle).

```js
array.reduce(function (accumulateur, valeurActuelle, index) {
  // ... fonction à appliquer //
}, valeurInitiale);
```

    - accumulateur : la valeur accumulée retournée à chaque itération
    - valeurActuelle : l'élément actuel du tableau
    - index : l'index de l'élément actuel (optionnel)
    - valeurInitiale : la valeur initiale de l'accumulateur (optionnel)

```js
const tableau = [1, 2, 3, 4, 5];

const somme = tableau.reduce((accumulateur, valeurActuelle) => {
  return accumulateur + valeurActuelle;
}, 5);

// affiche 20 //
// 1 + 2 + 3 + 4 + 5 = 15 //
// 15 + 5 (valeur initiale) = 20 //
console.log(somme);
```

## OBJETS (Objects)

Les objets sont des collections de paires clé-valeur. Chaque clé (ou propriété) doit être unique et correspond à une valeur qui peut être de n'importe quel type.

### Syntaxe et Initialisation

- Déclaration d'un objet :

```js
const personne = {
  nom: "John",
  age: 18,
  ville: "Paris",
};
```

- Accéder aux propriétés d'un objet :

```js
// affiche "John" //
console.log(personne.nom);
// affiche 18 //
console.log(personne["age"]);
```

### Manipulation des propriétés d'un objet

- Ajouter ou modifier une propriété :

```js
// j'ajoute une nouvelle propriété //
personne.profession = "Développeur";
// je modifie l'âge de ma personne //
personne.age = 19;
```

- Supprimer une propriété :

```js
// je supprime la propriété "ville" de ma personne //
delete personne.ville;
// affiche { nom: "John", age: 19, profession: "Développeur" } //
console.log(personne);
```

### Pour aller plus loin

- <code>Map</code> :
  Un Map est une collection d'éléments où chaque élément est une paire clé-valeur. Contrairement aux objets, les clés d'un Map peuvent être de n'importe quel type (pas seulement des chaînes de caractères).

```js
const map = new Map();

map.set("a", 1);
map.set("b", 2);
map.set("c", 3);

// affiche 1 //
console.log(map.get("a"));

map.set("a", 97);

// affiche 97 //
console.log(map.get("a"));

// affiche 3 //
console.log(map.size);

map.delete("b");

// affiche 2 //
console.log(map.size);
```

[Documentation sur Map](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Map)

- <code>Set</code> :
  Un Set est une collection d'éléments uniques, sans ordre particulier. Il ne permet pas de duplications.

```js
const set = new Set();

set.add(10);
set.add(20);
set.add(30);
// la valeur 20 n'est pas ajouté car déjà presente dans le set //
set.add(20);

// affiche true //
console.log(set.has(20));
// affiche false //
console.log(set.has(40));

// supprime 20 //
set.delete(20);
```

[Documentation sur Set](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
