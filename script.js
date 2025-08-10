const boxes = Array.from(document.querySelectorAll(".box"));
const playerTurn = document.querySelector(".player");
const playerWon = document.querySelector(".player-won");
const playAgain = document.querySelectorAll(".play-again");
const closebtn = document.querySelectorAll(".close");
const wonPopUp = document.querySelector(".message");
const drawPopUp = document.querySelector(".draw");
const replay = document.querySelector(".replay");
let xTurn = true;
let cnt = 0;
const array = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];

playAgain.forEach((cl) =>
  cl.addEventListener("click", () => window.location.reload())
);

closebtn.forEach((cl) =>
  cl.addEventListener("click", () => {
    wonPopUp.classList.add("hide")
    drawPopUp.classList.add("hide")
  })
);

replay.addEventListener("click", () => {
  const flag = confirm("Do you want to replay")
  if(flag) window.location.reload()
});

function checkWin(chance) {
  if (
    (array[0] == array[1] && array[1] == array[2]) ||
    (array[0] == array[3] && array[3] == array[6]) ||
    (array[0] == array[4] && array[4] == array[8]) ||
    (array[1] == array[4] && array[4] == array[7]) ||
    (array[2] == array[5] && array[5] == array[8]) ||
    (array[3] == array[4] && array[4] == array[5]) ||
    (array[6] == array[4] && array[4] == array[2]) ||
    (array[6] == array[7] && array[7] == array[8])
  ) {
    wonPopUp.classList.remove("hide");
    playerWon.innerHTML = chance;
  } else if (cnt === 9) {
    drawPopUp.classList.remove("hide");
  }
}

function handleClick(e) {
  id = parseInt(e.target.id) - 1;
  if (array[id] != "X" && array[id] != "O") {
    e.target.style.backgroundColor = "#453a3c";
    cnt++;
    if (xTurn) {
      e.target.style.color = "#e3d841";
      e.target.innerHTML = "X";
      array[id] = "X";
      playerTurn.innerHTML = "O";
      checkWin("X");
    } else {
      e.target.style.color = "#d24724";
      e.target.innerHTML = "O";
      array[id] = "O";
      playerTurn.innerHTML = "X";
      checkWin("O");
    }
    xTurn = !xTurn;
  }
}

boxes.forEach((box) => {
  box.addEventListener("click", handleClick);
});
