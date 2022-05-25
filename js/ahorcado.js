let gallowsColor = "black";
let humanColor = "rgba(0, 0, 200, 0.5)";
let basePosition = { x: 50, y: 300 };
let columnPosition = { x: 90, y: 50 };
let supportPosition = { x: 100, y: 50 };
let ropePosition = { x: 180, y: 50 };

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
