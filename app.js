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

const modalContainer = document.querySelector("#modal");
const modal = document.querySelector(".start");
const startGameButton = document.querySelector("#startGame");
const reStartGameButton = document.querySelector("#reStartGame");
const closeCopyrightWindow = document.querySelector("#closeModal");
const openCopyrightWindow = document.querySelector("#openCopyright");
const copyrightModal = document.querySelector(".copyright");
const board = document.querySelector("#board");
const score = document.querySelector("#atemptNumOutput");
const manager = new GameManager(images, board, score);

window.onload = function () {
  modal.style.transform = "scale(2)";
};

startGameButton.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
  manager.startGame();
});

openCopyrightWindow.addEventListener("click", () => {
  copyrightModal.classList.remove("hidden");
  modal.classList.add("hidden");
});

closeCopyrightWindow.addEventListener("click", () => {
  copyrightModal.classList.add("hidden");
  modal.classList.remove("hidden");
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
