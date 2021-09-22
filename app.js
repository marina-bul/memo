const images1 = [
  "apple.png",
  "cake.png",
  "car.png",
  "cat.png",
  "cherry.png",
  "factory.png",
];

const images = [
  "/molodkin/duck.jpg",
  "/molodkin/house.jpg",
  "/molodkin/man.jpg",
  "/molodkin/oak.jpg",
  "/molodkin/parrot.jpg",
  "/molodkin/sheep.jpg",
];

const modal = document.querySelector("#modal");
const startGameButton = document.querySelector("#startGame");
const reStartGameButton = document.querySelector("#reStartGame");
const board = document.querySelector("#board");
const score = document.querySelector("#atemptNumOutput");
const manager = new GameManager(images, board, score);

startGameButton.addEventListener("click", () => {
  modal.classList.add("hidden");
  manager.startGame();
});

reStartGameButton.addEventListener("click", () => {
  manager.startGame();
});

board.addEventListener("click", (e) => {
  let clickedCard = e.target.parentNode.connectedCard;
  if (clickedCard) {
    manager.selectCard(clickedCard);
  }
});