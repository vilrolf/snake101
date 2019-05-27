const SQUARE_WIDTH = 10
const SQUARE_FILL_COLOR = "black";
const SQUARE_STROKE_COLOR = "blue";

const SPEED = 10;

const canvas = document.getElementById("gameCanvas");
const WIDTH = canvas.width;
const HEIGHT = canvas.width;


const ctx = gameCanvas.getContext("2d");
document.addEventListener("keydown", changeDirection);


main()
function drawSquare(x, y) {
    ctx.fillStyle = SQUARE_STROKE_COLOR;
    ctx.strokeStyle = SQUARE_FILL_COLOR;
    ctx.fillRect(x, y, SQUARE_WIDTH, SQUARE_WIDTH)
    ctx.strokeRect(x, y, SQUARE_WIDTH, SQUARE_WIDTH)
}

function main() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setTimeout(main, 100)
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;



    if (keyPressed === LEFT_KEY) {
      
    }

    if (keyPressed === UP_KEY) {
      
    }

    if (keyPressed === RIGHT_KEY) {
      
    }

    if (keyPressed === DOWN_KEY) {
       
    }
}
