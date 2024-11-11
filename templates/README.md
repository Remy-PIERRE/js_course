# L'UTILISATION DES TEMPLATES HTML AVEC JAVASCRIPT

Les templates HTML permettent de définir des structures HTML réutilisables qui peuvent être insérées dans le DOM de manière dynamique. En combinant les templates HTML avec JavaScript, on peut créer des interfaces interactives et réactives, où le contenu peut être mis à jour en fonction des actions de l'utilisateur ou des données reçues. Ce mécanisme est couramment utilisé dans le développement d'applications web modernes, particulièrement avec des frameworks comme React, Vue.js ou Angular. Cependant, il est également possible d'utiliser des templates HTML purs avec JavaScript, sans framework, pour manipuler le DOM de manière efficace.

## Syntaxe et utilisation du template

- Définir un template HTML :

```html
<template id="monTemplate">
  <div class="article">
    <h2></h2>
    <p></p>
  </div>
</template>
```

- Utiliser le template avec JavaScript :

```js
// je récupère mon template en utilisant son id //
const template = document.querySelector("#monTemplate");

// je clone (duplique) mon template pour pouvoir le réutiliser à volonté //
const clone = template.content.cloneNode(true);

// je dispatch mes informations au sein de mon template //
clone.querySelector("h2").innerText = "Voici mon titre";
clone.querySelector("p").innerText = "Et mon paragraphe associé";

// j'intègre mon template fraichement créé au DOM //
document.body.appendChild(clone);
```
