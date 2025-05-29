let currentPlayer = "X";

function makeBoard() {
  const board = document.querySelector(".tic-tac-toe");
  board.innerHTML = ""; // clear any existing squares
  for (let i = 0; i < 9; i++) {
    const square = document.createElement("div");
    square.classList.add("square", "empty");
    square.addEventListener("click", makeMove);
    board.appendChild(square);
  }
}

function makeMove(event) {
  const square = event.target;
  if (!square.classList.contains("empty")) return;

  square.textContent = currentPlayer;
  square.classList.remove("empty");

  if (checkWinner(currentPlayer)) {
    setTimeout(() => alert(`${currentPlayer} wins!`), 100);
    return;
  }

  if (isBoardFull()) {
    setTimeout(() => alert("Game Over"), 100);
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function reset() {
  currentPlayer = "X";
  makeBoard();
}

function isBoardFull() {
  return [...document.querySelectorAll(".square")].every(
    (sq) => !sq.classList.contains("empty")
  );
}

function checkWinner(player) {
  const squares = document.querySelectorAll(".square");
  const winPatterns = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];

  return winPatterns.some((pattern) =>
    pattern.every((index) => squares[index].textContent === player)
  );
}

document.querySelector("button").addEventListener("click", reset);
window.addEventListener("DOMContentLoaded", makeBoard);
