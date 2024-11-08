// SETTINGS - TURN //
let indexTurn = 0;
const indexTurnMax = 5;

// SETTINGS - CHOICES //
const choices = ["pierre", "feuille", "ciseaux"];

// SETTINGS - SCORING //
const scoring = {
  player: 0,
  com: 0,
};

// HANDLE GAME TURN //
function handleGameTurn() {
  if (indexTurn >= indexTurnMax) {
    return handleGameEnd();
  }

  const playerChoice = getPlayerChoice();
  const comChoice = getComChoice();

  const winner = getWinner(playerChoice, comChoice);
  updateScoring(winner);
  displayScoring();

  indexTurn++;
  handleGameTurn();
}

// HANDLE CHOICES //
// return string //
function getPlayerChoice() {
  let choice = prompt("Faites votre choix : 'pierre', 'feuille' ou 'ciseaux'.");

  while (!choices.includes(choice)) {
    choice = prompt("Choix invalide : 'pierre', 'feuille' ou 'ciseaux'.");
  }

  return choice;
}

// return string //
function getComChoice() {
  const indexRandom = Math.floor(Math.random() * 3);
  const choice = choices[indexRandom];

  return choice;
}

// COMPARE CHOICES //
// return string //
function getWinner(playerChoice, comChoice) {
  if (playerChoice === comChoice) {
    return;
  }

  if (
    (playerChoice === "pierre" && comChoice === "ciseaux") ||
    (playerChoice === "ciseaux" && comChoice === "feuille") ||
    (playerChoice === "feuille" && comChoice === "pierre")
  ) {
    return "player";
  } else {
    return "com";
  }
}

// HANDLE SCORING //
// return void //
function updateScoring(winner) {
  scoring[winner] = scoring[winner] + 1;
}

// return void //
function displayScoring() {
  alert(`Joueur : ${scoring.player}, Ordinateur : ${scoring.com}`);
}

// HANDLE GAME END //
// return void //
function handleGameEnd() {
  if (scoring.player === scoring.com) {
    return alert(`Egalité !`);
  } else if (scoring.player > scoring.com) {
    return alert("Vous avez gagné !");
  } else {
    return alert("L'ordinateur à gagné !");
  }
}

// START GAME //
handleGameTurn();
