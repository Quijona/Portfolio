/* let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
squares.forEach(function (square) {
  square.addEventListener("click", function () {
    if (this.style.backgroundColor === pickedColor) {
      message.textContent = "¡Correcto!";
    } else {
      this.style.backgroundColor = document.body.style.backgroundColor;
      message.textContent = "Inténtalo nuevamente!";
    }
  });
});

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(numColors) {
  const arreglo = [];
  for (let i = 0; i < numColors; i++) {
    arreglo.push(randomColor());
  }
  return colors.slice(0, numColors);
}
function changeColors(colors) {
  squares.forEach(function (square) {
    square.style.backgroundColor = colors;
  });
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
    if(mode === "easy"){
        colors = generateRandomColors(3);
    } else {
        colors = generateRandomColors(6);
    }
  generateRandomColors(colors.length);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }

  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

function changeColors(color) {
  // Cambiar los colores de todos los cuadrados al color ganador
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function checkWin() {
  if (clickedColor === pickedColor) {
    messageDisplay.textContent = "¡Correcto!";
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    resetButton.textContent = "Play Again?";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Inténtalo nuevamente";
  }
}
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", checkWin);
}

let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");

hardButton.addEventListener("click", function () {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
});

easyButton.addEventListener("click", function() {
    mode = "easy";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    reset();
    for (let i = 0; i < squares.length; i++) {
      if (i < 3) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
      } else {
        squares[i].style.display = "none";
      }
    }
  });
   */

  let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easyButton");
let hardButton = document.querySelector("#hardButton");
let mode = "hard";

resetButton.addEventListener("click", resetGame);

function resetGame() {
  if (mode === "easy") {
    colors = generateRandomColors(3);
  } else {
    colors = generateRandomColors(6);
  }
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }

  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  resetButton.textContent = "New Colors";
}

function changeColors(color) {
  squares.forEach(function (square) {
    square.style.backgroundColor = color;
  });
}

function checkWin() {
  let clickedColor = this.style.backgroundColor;

  if (clickedColor === pickedColor) {
    messageDisplay.textContent = "¡Correcto!";
    changeColors(clickedColor);
    h1.style.backgroundColor = clickedColor;
    resetButton.textContent = "Play Again?";
  } else {
    this.style.backgroundColor = "#232323";
    messageDisplay.textContent = "Inténtalo nuevamente";
  }
}

squares.forEach(function (square) {
  square.addEventListener("click", checkWin);
});

hardButton.addEventListener("click", function () {
  if (mode !== "hard") {
    mode = "hard";
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    resetGame();
  }
});

easyButton.addEventListener("click", function () {
  if (mode !== "easy") {
    mode = "easy";
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    resetGame();
  }
});

function pickColor() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateRandomColors(numColors) {
  const arr = [];
  for (let i = 0; i < numColors; i++) {
    arr.push(randomColor());
  }
  return arr;
}


