let gallowsColor = "black";
let humanColor = "rgba(0, 0, 200, 0.5)";
let basePosition = { x: 50, y: 300 };
let columnPosition = { x: 90, y: 50 };
let supportPosition = { x: 100, y: 50 };
let ropePosition = { x: 180, y: 50 };
let legsPosition = { x: 185, y: 250 };
let armsPosition = { x: 185, y: 170 };

const inputWord = document.querySelector(".input-word");
let secretWordElement = document.querySelector(".secret-word");

let testWord = "SECRETA";
let secretTestWord = "";

for (let i = 0; i < testWord.length; i++) {
  secretTestWord += "-";
}
modifySecretWord(secretTestWord);

inputWord.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    let newSecretWord = checkLetter();
    modifySecretWord(newSecretWord);
    secretTestWord = newSecretWord;
  }
});

let canvas = document.getElementById("ahorcado");
if (canvas.getContext) {
  let ctx = canvas.getContext("2d");
  gallowsDrawing(
    basePosition,
    columnPosition,
    supportPosition,
    ropePosition,
    gallowsColor,
    ctx
  );
  headDrawing(humanColor, ctx);
  bodyDrawing(182, 150, humanColor, ctx);
  leftLegDrawing(legsPosition.x, legsPosition.y, humanColor, ctx);
  rightLegDrawing(legsPosition.x, legsPosition.y, humanColor, ctx);
  leftArmDrawing(armsPosition.x, armsPosition.y, humanColor, ctx);
  rightArmDrawing(armsPosition.x, armsPosition.y, humanColor, ctx);
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

function modifySecretWord(word) {
  secretWordElement.innerHTML = "";
  let textP = document.createTextNode(word);
  secretWordElement.append(textP);
}

function checkLetter() {
  let inputLetter = inputWord.value.toUpperCase();
  let newSecretWord = "";
  for (let i = 0; i < testWord.length; i++) {
    if (testWord[i] == inputLetter) {
      newSecretWord += inputLetter;
    } else if (secretTestWord[i] != "-") {
      newSecretWord += secretTestWord[i];
    } else {
      newSecretWord += "-";
    }
  }
  return newSecretWord;
}
