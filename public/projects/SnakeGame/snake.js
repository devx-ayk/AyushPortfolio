const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScoreElement = document.querySelector(".high-score");

const Arrowup = document.getElementById("button-one");
const Arrowright = document.getElementById("button-two");
const Arrowdown = document.getElementById("button-three");
const Arrowleft = document.getElementById("button-four");

Arrowup.addEventListener("click", () => {
    changeDirection("ArrowUp");
});

Arrowright.addEventListener("click", () => {
    changeDirection("ArrowRight");
});

Arrowdown.addEventListener("click", () => {
    changeDirection("ArrowDown");
});

Arrowleft.addEventListener("click", () => {
    changeDirection("ArrowLeft");
});

let gameOver = false;
let foodX, foodY;
let snakeX = 5, snakeY = 10;
let snakeBody = [];
let velocityX = 0, velocityY = 0;
let setIntervalId;
let score = 0;

// Getting high score from the local storage
let highScore = localStorage.getItem("high-score") || 0;

const changeFoodPosition = () => {
    // Passing a random 0 - 30 value as food position
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}
const handelGameOver = () => {
    // Clearing the timer and reloading the page on game over
    clearInterval(setIntervalId);
    alert("Game Over! Press OK to replay...");
    location.reload();
}
const changeDirection = (direction) => {
// changing velocity value based on key press
    if (direction == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    } else if (direction === "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
    }
    else if (direction === "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
    }
    else if (direction === "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

document.addEventListener("keydown", (e) => {

    const keys = {
        ArrowUp: "ArrowUp",
        ArrowDown: "ArrowDown",
        ArrowLeft: "ArrowLeft",
        ArrowRight: "ArrowRight",
        w: "ArrowUp",
        s: "ArrowDown",
        a: "ArrowLeft",
        d: "ArrowRight"
    };

    if (keys[e.key]) {
        e.preventDefault();
        changeDirection(keys[e.key]);
    }
});

const initGame = () => {
    if (gameOver) return handelGameOver();
    let htmlMarkup = `<div class= "food" style="grid-area: ${foodY} / ${foodX}"></div>`;

    if (snakeX === foodX && snakeY === foodY) {
        changeFoodPosition();
        snakeBody.push([foodX, foodY]); // Pushing food position to snake body array
        console.log(snakeBody);
        score++; // increment score by 1

        highScore = score >= highScore ? score : highScore;
        localStorage.setItem("high-score", highScore);
        scoreElement.innerText = `🍎: ${score}`;
        highScoreElement.innerText = `🏆: ${highScore}`;
        // scoreElement.innerText = `Score: ${score}`;
        // highScoreElement.innerText = `High Score: ${highScore}`;
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
        // Shifting forward the values of the elements in the snake body by one
        snakeBody[i] = snakeBody[i - 1]
    }

    snakeBody[0] = [snakeX, snakeY];  // Setting first element of snake body to current snake position

    // Updating the snake's head position based on the current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    // Checking if the snake's head position based on the current velocity

    if (snakeX <= 0 || snakeX > 30 || snakeY <= 0 || snakeY > 30) {
        gameOver = true;
    }

    for (let i = 0; i < snakeBody.length; i++) {
        // Adding a div for each part of the snake's body
        htmlMarkup += `<div class= "head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]} "></div>`;
        // Checking if the snake head hit the body, if so set gameOver to true
        if (i !== 0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) {
            gameOver = true;
        }
    }

    playBoard.innerHTML = htmlMarkup;
}
changeFoodPosition();
setIntervalId = setInterval(initGame, 125);
