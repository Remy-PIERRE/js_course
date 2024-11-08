# TP : Création d'un jeu de Chifoumi en JavaScript

## Objectif

L'objectif de ce TP est d'apprendre à manipuler JavaScript à travers la création d'un jeu de Chifoumi ("Pierre-papier-ciseaux"). Vous développerez d'abord une version console (sans interface graphique) que vous pourrez tester depuis la console de votre navigateur, puis une version web interactive avec HTML, CSS et JavaScript.

## Version Console du jeu (sans interface graphique)

Dans cette première partie, vous allez créer une version simple du jeu Chifoumi qui s'exécute dans la console. L'utilisateur choisira son coup, et le programme choisira aléatoirement l'un des trois coups possibles (Pierre, Papier, Ciseaux). Le résultat sera ensuite affiché dans la console.

### Affichage du menu et des règles du jeu

Lorsque l'utilisateur lance le programme, affichez les règles du jeu. Le jeu oppose trois choix :

- Pierre
- Papier
- Ciseaux

### Demande du choix de l'utilisateur

Demandez à l'utilisateur de saisir son choix parmi les trois options. Vous pouvez utiliser prompt() pour capturer l'entrée de l'utilisateur dans la console.

### Génération du choix de l'ordinateur

Le programme doit choisir aléatoirement entre Pierre, Papier ou Ciseaux. Pour cela, vous pouvez utiliser Math.random() pour générer un nombre aléatoire et en déduire le coup de l'ordinateur.

### Détermination du gagnant

Pierre bat Ciseaux.
Ciseaux bat Papier.
Papier bat Pierre.

Comparez les choix de l'utilisateur et de l'ordinateur, puis affichez le résultat du jeu : qui est le gagnant ou s'il y a égalité.

### Proposer de rejouer

Après chaque partie, demandez à l'utilisateur s'il veut rejouer. Si la réponse est "oui", relancez le jeu, sinon, affichez un message de fin et terminez le programme.

## Version Web du jeu (avec interface graphique)

Dans cette seconde partie, vous allez créer une interface web permettant de jouer au Chifoumi directement dans le navigateur. Vous utiliserez HTML pour la structure, CSS pour le style, et JavaScript pour la logique du jeu.

### Création de la page HTML

Créez une page HTML qui contient :

- Un titre indiquant le nom du jeu (Chifoumi).
- Trois boutons permettant de choisir entre Pierre, Papier ou Ciseaux.
- Un espace pour afficher le choix de l'utilisateur, celui de l'ordinateur et le résultat du jeu.
- Un bouton permettant de rejouer.

### Ajout du style CSS

Ajoutez un peu de style pour rendre l'interface agréable et claire. Vous pouvez utiliser des couleurs, des bordures et des espaces pour bien organiser les éléments.

### Logique JavaScript pour le jeu

Utilisez les mêmes fonctions que pour la version console, mais adaptez-les à l'interface web :

- Lorsque l'utilisateur clique sur l'un des boutons, son choix est capturé (addEventListerner).
- Le programme génère un choix aléatoire pour l'ordinateur.
- Le résultat (gagnant ou égalité) est affiché sur la page.
- Le bouton "Rejouer" doit réinitialiser l'interface pour permettre de jouer à nouveau.
