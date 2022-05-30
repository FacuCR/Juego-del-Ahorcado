let arraySecretWords = [
  "SECRETA",
  "BOCA",
  "NOCHE",
  "HOGAR",
  "HORCA",
  "INOCENTE",
  "GUERRERO",
  "DAMA",
  "REY",
  "REINA",
  "LADRON",
  "MERCADO",
  "TRONO",
  "ESPADA",
  "ESCLAVO",
];

let goodSound = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"
);
let badSound = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"
);
let winSound = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"
);
let loseSound = new Audio(
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3"
);
sounds();

let gallowsColor = "black";
let humanColor = "rgba(0, 0, 200, 0.5)";
let basePosition = { x: 50, y: 300 };
let columnPosition = { x: 90, y: 50 };
let supportPosition = { x: 100, y: 50 };
let ropePosition = { x: 180, y: 50 };
let legsPosition = { x: 185, y: 250 };
let armsPosition = { x: 185, y: 170 };
let canvas = document.getElementById("ahorcado");

const inputWord = document.querySelector(".input-word");
const secretWordElement = document.querySelector(".secret-word");
const badLetters = document.querySelector(".bad-letters");

let chosenWord = "";
if (window.location.search.substring(15).toUpperCase()) {
  chosenWord = window.location.search.substring(15).toUpperCase();
} else {
  chosenWord = randomSelection(arraySecretWords);
}
let secretChosenWord = "";
let errorCont = 0;

for (let i = 0; i < chosenWord.length; i++) {
  secretChosenWord += "-";
}
modifySecretWord(secretChosenWord);

inputWord.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let newSecretWord = checkLetter();
    modifySecretWord(newSecretWord);
    secretChosenWord = newSecretWord;
    isVictory(secretChosenWord);
  }
});

function randomSelection(arrayStrings) {
  return arrayStrings[Math.floor(Math.random() * arrayStrings.length)];
}

function baseDrawing(x, y, color, canvasContext) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, 150, 10);
}

function columnDrawing(x, y, color, canvasContext) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, 10, 250);
}

function supportDrawing(x, y, color, canvasContext) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, 80, 10);
}

function ropeDrawing(x, y, color, canvasContext) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, 10, 40);
}

function gallowsDrawing(
  basePosition,
  columnPosition,
  supportPosition,
  ropePosition,
  gallowsColor,
  canvasContext
) {
  baseDrawing(basePosition.x, basePosition.y, gallowsColor, canvasContext);
  columnDrawing(
    columnPosition.x,
    columnPosition.y,
    gallowsColor,
    canvasContext
  );
  supportDrawing(
    supportPosition.x,
    supportPosition.y,
    gallowsColor,
    canvasContext
  );
  ropeDrawing(ropePosition.x, ropePosition.y, gallowsColor, canvasContext);
}

function headDrawing(color, canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = "3";
  canvasContext.strokeStyle = color;
  canvasContext.arc(185, 120, 30, 0, Math.PI * 2, true); // Outer circle
  canvasContext.moveTo(201.5, 135);
  canvasContext.arc(185, 135, 18, 0, Math.PI, true); // Mouth (clockwise)
  canvasContext.moveTo(180, 110);
  canvasContext.arc(175, 110, 5, 0, Math.PI * 2, true); // Left eye
  canvasContext.moveTo(200, 110);
  canvasContext.arc(195, 110, 5, 0, Math.PI * 2, true); // Right eye*/
  canvasContext.stroke();
}

function bodyDrawing(x, y, color, canvasContext) {
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, 5, 100);
}

function leftLegDrawing(x, y, color, canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = "3";
  canvasContext.strokeStyle = color;
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(x + 25, y + 30);
  canvasContext.stroke();
}

function rightLegDrawing(x, y, color, canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = "3";
  canvasContext.strokeStyle = color;
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(x - 25, y + 30);
  canvasContext.stroke();
}

function leftArmDrawing(x, y, color, canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = "3";
  canvasContext.strokeStyle = color;
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(x + 25, y + 30);
  canvasContext.stroke();
}

function rightArmDrawing(x, y, color, canvasContext) {
  canvasContext.beginPath();
  canvasContext.lineWidth = "3";
  canvasContext.strokeStyle = color;
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(x - 25, y + 30);
  canvasContext.stroke();
}

function errorDrawing(num) {
  let inputLetter = inputWord.value;
  let isPresent = letterErrorDrawing(inputLetter);

  canvas.classList.remove("shake");
  window.setTimeout(function () {
    canvas.classList.add("shake");
  }, 50);
  let ctx = canvas.getContext("2d");

  if (!isPresent) {
    switch (num) {
      case 0:
        gallowsDrawing(
          basePosition,
          columnPosition,
          supportPosition,
          ropePosition,
          gallowsColor,
          ctx
        );
        break;
      case 1:
        headDrawing(humanColor, ctx);
        break;
      case 2:
        bodyDrawing(182, 150, humanColor, ctx);
        break;
      case 3:
        leftLegDrawing(legsPosition.x, legsPosition.y, humanColor, ctx);
        break;
      case 4:
        rightLegDrawing(legsPosition.x, legsPosition.y, humanColor, ctx);
        break;
      case 5:
        leftArmDrawing(armsPosition.x, armsPosition.y, humanColor, ctx);
        break;
      default:
        rightArmDrawing(armsPosition.x, armsPosition.y, humanColor, ctx);
        inputWord.disabled = true;
        youLoss();
        break;
    }
    errorCont++;
  }
}

function isVictory(word) {
  if (word == chosenWord) {
    playSound(winSound);
    inputWord.disabled = true;
    const gameOver = document.querySelector(".game-over");
    const youWin = document.querySelector(".you-win");
    gameOver.style.visibility = "visible";
    youWin.style.display = "flex";
  }
}

function youLoss() {
  playSound(loseSound);
  const gameOver = document.querySelector(".game-over");
  const youLoss = document.querySelector(".you-loss");
  const lossText = document.querySelector(".loss-text");
  lossText.innerHTML += "<br> la palabra era: " + chosenWord;
  gameOver.style.visibility = "visible";
  youLoss.style.display = "flex";
}

function modifySecretWord(word) {
  secretWordElement.innerHTML = "";
  let textP = document.createTextNode(word);
  secretWordElement.append(textP);
}

function checkLetter() {
  let inputLetter = inputWord.value.toUpperCase();
  let newSecretWord = "";
  let isCorrect = false;
  for (let i = 0; i < chosenWord.length; i++) {
    if (chosenWord[i] == inputLetter) {
      newSecretWord += inputLetter;
      isCorrect = true;
      playSound(goodSound);
      secretWordElement.classList.remove("letter-anim");
      window.setTimeout(function () {
        secretWordElement.classList.add("letter-anim");
      }, 50);
    } else if (secretChosenWord[i] != "-") {
      newSecretWord += secretChosenWord[i];
    } else {
      newSecretWord += "-";
    }
  }
  if (!isCorrect) {
    errorDrawing(errorCont);
  }

  return newSecretWord;
}

function letterErrorDrawing(letter) {
  playSound(badSound);
  let isPresent = false;
  let letterInUppCase = letter.toUpperCase();
  let actualBadLetters = document.querySelectorAll(".bad-letter");
  for (let i = 0; i < actualBadLetters.length; i++) {
    if (actualBadLetters[i].textContent == letterInUppCase) {
      isPresent = true;
      break;
    }
  }
  if (!isPresent) {
    const badLetter = document.createTextNode(letterInUppCase);
    const badLetterElement = document.createElement("p");
    badLetterElement.append(badLetter);
    badLetterElement.classList.add("bad-letter");
    badLetters.append(badLetterElement);
  }

  return isPresent;
}

function sounds() {
  badSound.volume = 0.4;
  goodSound.volume = 0.4;
  winSound.volume = 0.8;
  loseSound.volume = 0.4;
}

function playSound(sound) {
  this.stopSound(sound);
  sound.play();
}
function stopSound(sound) {
  sound.pause();
  sound.currentTime = 0;
}
