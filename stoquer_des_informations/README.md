# STOQUER DES INFORMATIONS AVEC JAVASCRIPT

En JavaScript, il existe plusieurs mécanismes pour stocker des informations côté client (c'est à dire depuis le navigateur de l'utilisateur). Ces mécanismes sont souvent utilisés pour sauvegarder des données de manière persistante ou temporaire, en fonction des besoins de l'application. Les trois principales options sont : <code>localStorage</code>, <code>sessionStorage</code> et <code>IndexedDB</code>.

## LocalStorage

<code>localStorage</code> est un mécanisme de stockage web qui permet de conserver des données de manière persistante dans le navigateur. Les données stockées avec localStorage ne sont pas supprimées lorsque la page est fermée, ce qui signifie que les informations peuvent être conservées même après la fermeture et la réouverture du navigateur.

- Stocker des données :

```js
// je stock mes informations dans le localStorage sous forme de clef-valeur //
window.localStorage.setItem("nom", "John");

// pour stocker une collection ou un objet, je doit convertir mes données sous forme de chaine JSON //
const chaine = JSON.stringify([1, 2, 3, 4];
window.localStorage.setItem("index", chaine));
```

- Accéder à des données :

```js
// affiche "John"
const nom = window.localStorage.getItem("nom");
console.log(nom);

// je doit convertir ma chaine JSON en tableau pour pouvoir l'exploiter à nouveau //
const index = JSON.parse(window.localStorage.getItem("index"));
// affiche [1, 2, 3, 4] //
console.log(index);
```

- Supprimer des données :

```js
// mes données sont supprimées //
window.localStorage.removeItem("nom");
```

- Vider le localStorage :

```js
// le localStorage est nettoyé //
window.localStorage.clear();
```

## SessionStorage

<code>sessionStorage</code> est similaire à localStorage, mais les données stockées avec sessionStorage sont supprimées dès que la session de navigation est terminée, c'est-à-dire lorsque l'onglet ou la fenêtre du navigateur est fermée. Il est donc utilisé pour stocker des informations temporaires pendant la durée d'une session.

Les méthodes utilisées avec sessionStorage sont les mêmes que celles de localStorage.

```js
// je stock mes informations dans le sessionStorage sous forme de clef-valeur //
window.sessionStorage.setItem("nom", "John");

// pour stocker une collection ou un objet, je doit convertir mes données sous forme de chaine JSON //
const chaine = JSON.stringify([1, 2, 3, 4];
window.sessionStorage.setItem("index", chaine));
```

Pour les autres méthodes, reportez vous au chapitre <code>sessionStorage</code>.

## INDEXEDDB

IndexedDB est un système de gestion de bases de données plus complexe que <code>localStorage</code> et <code>sessionStorage</code>. Il permet de stocker des données structurées (comme des objets, des tableaux, etc.) sous forme de bases de données côté client. Il est conçu pour des applications plus sophistiquées qui nécessitent de stocker une grande quantité de données ou de faire des requêtes complexes.

IndexedDB utilise une API asynchrone et basée sur des promesses, et la gestion des bases de données se fait via des objets comme des transactions et des magasins d'objets (object stores).

- Ouvrir une base de données :

```js
const request = window.indexedDB.open("maBaseDeDonnees", 1);

// il faut ensuite gérer le succès ou l'échec de la requête //
request.onsuccess = function (event) {
  const db = event.target.result;
  console.log("Ma base de données à été crée !");
};

request.onerror = function (event) {
  console.log("La création de ma base de données à échoué !");
};
```

- Ajouter des données :

```js
const request = indexedDB.open("maBaseDeDonnees", 1);

request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction(["utilisateurs"], "readwrite");
  const store = transaction.objectStore("utilisateurs");

  const utilisateur = { nom: "John", age: 18 };
  store.add(utilisateur);
};
```

[Documentation sur IndexedDb](https://developer.mozilla.org/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)

## Comparaison entre les méthodes

| Critère               | `localStorage`                                        | `sessionStorage`                                                        | `IndexedDB`                                                                        |
| --------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **Durée de vie**      | Persistance des données                               | Temporaire                                                              | Persistance des données                                                            |
| **Capacité**          | 5 à 10 Mo par domaine                                 | 5 à 10 Mo par domaine                                                   | Plusieurs centaines de Mo ou plus                                                  |
| **Type de données**   | Chaînes de caractères                                 | Chaînes de caractères                                                   | Données structurées                                                                |
| **API**               | Simple (synchrones)                                   | Simple (synchrones)                                                     | Complexe (asynchrone, transactions)                                                |
| **Sécurité**          | Aucune (données en texte brut)                        | Aucune (données en texte brut)                                          | Mieux sécurisé, mais accessible côté client                                        |
| **Cas d'utilisation** | Stockage de préférences, données persistantes simples | Stockage temporaire de données de session (par exemple, panier d'achat) | Applications avec de grandes quantités de données et besoins de requêtes complexes |

- Utilisez localStorage pour des données persistantes simples et de petite taille.
- Utilisez sessionStorage pour des informations temporaires pendant une session.
- Utilisez IndexedDB pour des applications plus complexes nécessitant une gestion de données structurées, de grande taille ou avec des requêtes complexes.
