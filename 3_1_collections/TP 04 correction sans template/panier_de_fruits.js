console.log("Bonjour panier de fruits !");

// je séléctionne mon bouton et écoute l'évenement "click" //
document
  .querySelector("#buttonAddFruits")
  .addEventListener("click", handleAddFruit);

// évenement "click" sur le bouton ajouter //
function handleAddFruit() {
  // je récupère la valeur de mon input //
  const value = document.querySelector("#inputFruit").value;

  // je vérifie la validité de ma valeur //
  if (!value) {
    return console.log("Veuillez entrer un fruit !");
  }

  // je créé une nouvelle ligne dans ma table //
  createTableRow(value);

  // je vide mon input //
  document.querySelector("#inputFruit").value = "";
}

function createTableRow(fruit) {
  // création de la balise row //
  const row = document.createElement("tr");

  // création de la balise cell et ajout de son contenue //
  const cellFruit = document.createElement("td");
  cellFruit.innerText = capitalizeFirstLetter(fruit);

  // création de la seconde balise cell et ajoute de son contenue avec innerHTML //
  const cellButton = document.createElement("td");
  cellButton.innerHTML = `
      <button class="btn btn-danger">
          <i class="fa fa-trash"></i>
      </button>
    `;

  // création de la seconde balise cell et ajoute de son contenue sans innerHTML //
  //   const button = document.createElement("button");
  //   button.className = "btn btn-danger";
  //   const icon = document.createElement("i");
  //   icon.className = "fa fa-trash";
  //   button.appendChild(icon);
  //   cellButton.appendChild(button);

  // intégrations des cells dans la row //
  row.appendChild(cellFruit);
  row.appendChild(cellButton);

  // intégration de la row dans la table //
  const table = document.querySelector("#tableFruitsBody");
  table.appendChild(row);

  // j'écoute l'évenement "click" sur le bouton //
  row.querySelector("button").addEventListener("click", handleRowRemove);
}

// évenement "click" sur le bouton supprimer //
function handleRowRemove(event) {
  // je séléctionne la row parente de mon bouton //
  const row = event.target.closest("tr");
  // ... et la supprime //
  row.remove();
}

// return string //
function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
