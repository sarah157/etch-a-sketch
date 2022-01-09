// VARIABLES

const grid = document.querySelector(".grid");
const gridSize = grid.clientWidth;
let brushColor = "#ff5678";

// Create initial 16x16 grid
for (let i = 0; i < 256; i++) {
  let box = document.createElement("div");
  grid.appendChild(box);
}

// EVENT LISTENERS

addEventToBoxes();

pixelSizeRange.addEventListener("change", createNewGrid);

resetButton.addEventListener("click", resetGrid);

rainbowButton.addEventListener("click", () => (brushColor = getRandomColor()));

blackButton.addEventListener("click", () => (brushColor = "black"));

// FUNCTIONS

// function classicMode() {
//     for (let box of gridBoxes())
//     if (box.style.opacity == 1) return
//     box.style.opacity += 0.1
// }

// Select current set of grid divs/boxes
function gridBoxes() {
  return document.querySelectorAll(".grid div");
}

function addEventToBoxes() {
  for (let box of gridBoxes()) {
    box.addEventListener("mouseover", changeBoxColor);
  }
}

function changeBoxColor() {
  this.style.backgroundColor = brushColor;
}

function getRandomColor() {
  let i = () => Math.floor(Math.random() * 256);
  return `rgb(${i()},${i()},${i()})`;
}

function resetGrid() {
  for (let box of gridBoxes()) box.style.backgroundColor = "white";
}

function createNewGrid() {
  // remove all boxes/children in grid
  grid.textContent = "";

  // create new boxes with new pixel size
  const pixelScale = this.value;
  let pixelSize = 5
  for (let i = 1; i <= pixelScale; i++) pixelSize *= 2;

  let numOfPixels = Math.round((gridSize / pixelSize)) ** 2;

  for (let i = 0; i < numOfPixels; i++) {
    let box = document.createElement("div");
    box.style.width = `${pixelSize/10}rem`;
    box.style.height = `${pixelSize/10}rem`;
    grid.appendChild(box);
  }
  addEventToBoxes();
}
