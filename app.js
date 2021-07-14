// VARIABLES

const grid = document.querySelector(".grid")
const gridSize = grid.clientWidth
let brushColor = "#ff5678"

// MAIN

// create initial 16x16 grid
for (let i = 0; i < 256; i++) {
    let box = document.createElement("div");
    grid.appendChild(box)
}


// EVENT LISTENERS

addEventToBoxes()

pixelSizeRange.addEventListener("change", createNewGrid)

resetButton.addEventListener("click", resetGrid)

rainbowButton.addEventListener("click", () => brushColor = rainbowColors())

blackButton.addEventListener("click", () =>  brushColor = "black")


// FUNCTIONS
function gridBoxes() {
    return document.querySelectorAll(".grid div")
}

function addEventToBoxes() {
    for (let box of gridBoxes()) {
        box.addEventListener("mouseover", changeBoxColor)
    }
}

function changeBoxColor() {
    this.style.backgroundColor = brushColor;
}

function rainbowColors() {
    let i = () => (Math.floor(Math.random() * 256))
    return `rgb(${i()},${i()},${i()})`
        
}

function resetGrid() {
    for (let box of gridBoxes()) box.style.backgroundColor = "white"
} 


function createNewGrid() {
    // remove all boxes/children in grid
    grid.textContent = ""

    // create new boxes with new pixel size
    let pixelSize = this.value
    let numOfPixels = (gridSize / pixelSize) ** 2
    
    for (let i = 0; i < numOfPixels; i++) {
        let box = document.createElement("div");
        box.style.width = `${pixelSize / 16}em`
        box.classList.toggle('trans')
        grid.appendChild(box)
    }
    addEventToBoxes()
}