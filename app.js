const message = document.querySelector(".info-display");

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const frameRate = 1000 / 7;
const gridCount = 20;
const gridSize = canvas.width / gridCount - 2;

const snake = new Snake();
const appple = new Food();
const snakeParts = [];
let tailLength = 2;
let isGameStarted = false;
let iterationCount = 0;

document.addEventListener("keydown", keyPressed);
const loop = setInterval(draw, frameRate);


function draw() {
    iterationCount++;
    clearScreen();
    snake.update();
    appple.show();
    snake.show();
    if (checkIsGameOver()) {
        clearInterval(loop);
        message.classList.remove("info-display--hidden");
        return;
    }
    checkCollision();
}

function clearScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1F2029";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function checkCollision() {
    if (snake.pos_x == appple.pos_x && snake.pos_y == appple.pos_y) {
        appple.updateLocation();
        tailLength++;
    }
}

function checkIsGameOver() {
    let isGameOver = false;

    // Checking if snake touched walls
    if (snake.pos_x < 0 || snake.pos_x == gridCount) {
        isGameOver = true;
    } else if (snake.pos_y < 0 || snake.pos_y == gridCount) {
        isGameOver = true;
    }
    // TO-DO:
    // Checking if snake's head touched snake's part
    // for (let i = 0; i < snakeParts.length; i++) {
    //     const part = snakeParts[i];
    //     if (snake.pos_x == part.pos_x && snake.pos_y == part.pos_y) {
    //         isGameOver = true;
    //         break;
    //     }
    // }
    return isGameOver;
}

function keyPressed(e) {
    if (!isGameStarted) {
        isGameStarted = true;
    }
    // Arrow LEFT
    if (e.keyCode == 37) {
        if (snake.x_speed == 1) {
            return;
        }
        snake.changeDirection(-1, 0);
    }
    // Arrow UP
    if (e.keyCode == 38) {
        if (snake.y_speed == 1) {
            return;
        }
        snake.changeDirection(0, -1);
    }
    // Arrow RIGHT
    if (e.keyCode == 39) {
        if (snake.x_speed == -1) {
            return;
        }
        snake.changeDirection(1, 0);
    }
    // Arrow DOWN
    if (e.keyCode == 40) {
        if (snake.y_speed == -1) {
            return;
        }
        snake.changeDirection(0, 1);
    }
}
