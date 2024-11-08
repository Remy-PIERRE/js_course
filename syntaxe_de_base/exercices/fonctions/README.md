# EXERCICES \_ LES FONCTIONS

Développez les fonctions suivantes :

- <code>diviserParDeux</code> qui retourne la moitié de la valeur passée en paramètre
- <code>somme</code> qui retourne la somme des 3 paramètres entrés
- <code>factorielle</code> qui retourne le produit de tous les entiers consécutifs entre 1 et l’entier passé en paramètre
- <code>majorite</code> qui retourne un booléen en fonction de l'age passée en paramètre

```js
function diviserParDeux(nombre) {
  return nombre / 2;
}
```

```js
function somme(a, b, c) {
  return a + b + c;
}
```

```js
function factorielle(nombre) {
  let result = 1;

  for (let index = 2; index <= nombre; index++) {
    result *= index;
  }

  return result;
}
```

```js
function majorite(age) {
  return age < 18 ? false : true;
}
```
