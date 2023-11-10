let playerText = document.getElementById("playerText");
let restartBTN = document.getElementById("restartBTN");
let boxes = Array.from(document.getElementsByClassName("box"));

let winnerIndicator = getComputedStyle(document.body).getPropertyValue(
  "--winning_block"
);

const O_Text = "O";
const X_Text = "X";
let currentPlayer = X_Text;
let spaces = Array(9).fill(null);

const StartGame = () => {
  boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon() !== false) {
      playerText.innerText = `${currentPlayer} has Won`;
      let winning_block = playerHasWon();

      console.log(winning_block);
    }

    currentPlayer = currentPlayer == X_Text ? O_Text : X_Text;
  }
}

const winningComobo = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function playerHasWon() {
  for (const condition of winningComobo) {
    let [a, b, c] = condition;

    if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c])
      return [a, b, c];
  }
  return false;
}

restartBTN.addEventListener("click", restart);

function restart() {
  spaces.fill(null);

  boxes.forEach((box) => {
    box.innerText = "";
    box.style.backgroundcolor = "";
  });

  playerText.innerText = "TiC-TaC-ToE Game";

  currentPlayer = X_Text;
}

StartGame();
