// j'initialise ma liste de fruits //

// j'écoute l'évenement "click" sur le bouton "ajouter" //

// si "click" ajouter //
//    je récupère ma valeur //
//    je vérifie ma valeur //
//    je met à jour ma liste de fruits => add //
//    je réinitialise la valeur de l'input //

// si "click" supprimer //
//    je récupère la valeur à suprimer //
//    je met à jour ma liste de fruits => delete //

// si mise à jour de ma liste de fruits //
//    je réinitialise mon affichage //
//    pour chacun des fruits présent dans ma liste //
//        je créé ma ligne fruit en utilisant un template //
//        j'écoute l'évenement "click" du bouton "supprimer" //

// j'initialise ma collection de fruits //
const data = JSON.parse(window.localStorage.getItem("fruits"));

const fruits = data || [];
// const fruits = ["banane", "fraise"];
updateFruits();

// j'écoute l'évenement "click" sur le bouton "ajouter" //
document
  .querySelector("#buttonAddFruits")
  .addEventListener("click", handleAddFruit);

// si "click" ajouter //
function handleAddFruit() {
  // je récupère ma valeur //
  const value = document.querySelector("#inputFruit").value.trim();

  // je vérifie ma valeur //
  if (!value) {
    return console.log("Veuillez entrer un fruit !");
  }

  // je met à jour ma liste de fruits => add //
  addFruit(value);

  // je réinitialise la valeur de l'input //
  document.querySelector("#inputFruit").value = "";
}

// si "click" supprimer //
function handleRemoveFruit(event) {
  // je récupère la valeur à suprimer //
  const value = event.target.closest("tr").dataset.value;

  // je met à jour ma liste de fruits => delete //
  deleteFruit(value);
}

// je met à jour ma liste de fruits => add //
function addFruit(value) {
  fruits.push(value);

  storeData();
  updateFruits();
}

// je met à jour ma liste de fruits => delete //
function deleteFruit(value) {
  const index = fruits.indexOf(value);
  fruits.splice(index, 1);

  storeData();
  updateFruits();
}

// si mise à jour de ma liste de fruits //
function updateFruits() {
  // je réinitialise mon affichage //
  const tableBody = document.querySelector("tbody");
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.lastChild);
  }

  // pour chacun des fruits présent dans ma liste //
  for (const fruit of fruits) {
    // je créé ma ligne fruit en utilisant mon template //
    const template = document.querySelector("#templateFruit");
    const clone = template.content.cloneNode(true);

    clone.querySelector("tr").dataset.value = fruit;
    clone.querySelector("td").innerText = fruit;

    // j'écoute l'évenement "click" du bouton "supprimer" //
    clone
      .querySelector(".btn-danger")
      .addEventListener("click", handleRemoveFruit);

    document.querySelector("tbody").appendChild(clone);
  }
}

function storeData() {
  window.localStorage.setItem("fruits", JSON.stringify(fruits));
}
