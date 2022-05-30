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
let secretWordElement = document.querySelector(".secret-word");

let testWord = "SECRETA";
let secretTestWord = "";
let errorCont = 0;

for (let i = 0; i < testWord.length; i++) {
  secretTestWord += "-";
}
modifySecretWord(secretTestWord);

inputWord.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let newSecretWord = checkLetter();
    modifySecretWord(newSecretWord);
    secretTestWord = newSecretWord;
    isVictory(secretTestWord);
  }
});

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
  canvas.classList.remove("shake");
  window.setTimeout(function () {
    canvas.classList.add("shake");
  }, 50);
  let ctx = canvas.getContext("2d");
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
}

function isVictory(word) {
  if (word == testWord) {
    inputWord.disabled = true;
    const gameOver = document.querySelector(".game-over");
    const youWin = document.querySelector(".you-win");
    gameOver.style.visibility = "visible";
    youWin.style.display = "flex";
  }
}

function youLoss() {
  const gameOver = document.querySelector(".game-over");
  const youLoss = document.querySelector(".you-loss");
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
  for (let i = 0; i < testWord.length; i++) {
    if (testWord[i] == inputLetter) {
      newSecretWord += inputLetter;
      isCorrect = true;
    } else if (secretTestWord[i] != "-") {
      newSecretWord += secretTestWord[i];
    } else {
      newSecretWord += "-";
    }
  }
  if (!isCorrect) {
    errorDrawing(errorCont);
    errorCont++;
  }

  return newSecretWord;
}
