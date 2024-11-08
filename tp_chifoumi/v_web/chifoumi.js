console.log("Hello Chifoumi !");

// SETTINGS - TURN //
let indexTurn = 1;
const indexTurnMax = 5;

document.querySelector("#turn").innerText = indexTurn;

// SETTINGS - CHOICES //
const choices = ["pierre", "feuille", "ciseaux"];

// SETTINGS - SCORING //
const scoring = {
  player: 0,
  com: 0,
};

document.querySelector("#scoringPlayer").innerText = scoring.player;
document.querySelector("#scoringCom").innerText = scoring.com;

// SETTINGS - CHOICES CURRENT //
const choicesCurrent = {
  player: "",
  com: "",
};

document.querySelector("#choicePlayer").innerText = choicesCurrent.player;
document.querySelector("#choiceCom").innerText = choicesCurrent.com;

// EVENTS //
document
  .querySelector("#buttonPierre")
  .addEventListener("click", handleButtonClick);
document
  .querySelector("#buttonFeuille")
  .addEventListener("click", handleButtonClick);
document
  .querySelector("#buttonCiseaux")
  .addEventListener("click", handleButtonClick);

function handleButtonClick(event) {
  switch (event.target.innerText) {
    case "Pierre":
      choicesCurrent.player = "pierre";
      break;
    case "Feuille":
      choicesCurrent.player = "feuille";
      break;
    case "Ciseaux":
      choicesCurrent.player = "ciseaux";
      break;
    default:
      break;
  }

  document.querySelector("#choicePlayer").innerText = choicesCurrent.player;

  handleGameTurn();
}

// HANDLE GAME TURN //
function handleGameTurn() {
  if (indexTurn >= indexTurnMax) {
    return handleGameEnd();
  }

  getComChoice();

  const winner = getWinner();
  updateScoring(winner);

  indexTurn++;
  document.querySelector("#turn").innerText = indexTurn;
}

// HANDLE CHOICES //
// return string //
function getComChoice() {
  const indexRandom = Math.floor(Math.random() * 3);
  choicesCurrent.com = choices[indexRandom];

  document.querySelector("#choiceCom").innerText = choicesCurrent.com;
}

// COMPARE CHOICES //
// return string //
function getWinner() {
  if (choicesCurrent.player === choicesCurrent.com) {
    return;
  }

  if (
    (choicesCurrent.player === "pierre" && choicesCurrent.com === "ciseaux") ||
    (choicesCurrent.player === "ciseaux" && choicesCurrent.com === "feuille") ||
    (choicesCurrent.player === "feuille" && choicesCurrent.com === "pierre")
  ) {
    return "player";
  } else {
    return "com";
  }
}

function updateScoring(winner) {
  scoring[winner] = scoring[winner] + 1;

  document.querySelector("#scoringPlayer").innerText = scoring.player;
  document.querySelector("#scoringCom").innerText = scoring.com;
}

// HANDLE GAME END //
// return void //
function handleGameEnd() {
  if (scoring.player === scoring.com) {
    document.querySelector("#scoringPlayer").innerText = "Egalité !";
    document.querySelector("#scoringCom").innerText = "Egalité !";
  } else if (scoring.player > scoring.com) {
    document.querySelector("#scoringPlayer").innerText = "Victoire !";
    document.querySelector("#scoringCom").innerText = "Défaite !";
  } else {
    document.querySelector("#scoringPlayer").innerText = "Défaite !";
    document.querySelector("#scoringCom").innerText = "Victoire !";
  }
}
