//--------------------------------------------------------global variable -------------------------------------------------------------
let activeToolOrMaterial = "dirt";

//--------------------------------------------------------Grid variables------------------------------------------------------------------

const gameGrid = document.getElementById("game-grid");
const totalGridRows = 15;
const totalGridColumns = 35;

//--------------------------------------------------------Tools variables-----------------------------------------------------------------
const axe = document.getElementById("axe");
const shovel = document.getElementById("shovel");
const pick = document.getElementById("pick");
const bucket = document.getElementById("bucket");
//--------------------------------------------------------Inventory variables---------------------------------------------------------------
const waterInventory = document.getElementById("water-inventory");
const rockInventory = document.getElementById("rock-inventory");
const leafInventory = document.getElementById("leaf-inventory");
const woodInventory = document.getElementById("wood-inventory");
const dirtInventory = document.getElementById("dirt-inventory");
const grassInventory = document.getElementById("grass-inventory");

//-----------------------------------------------------------------------------------------------------------------------------------------


//!---------------------------------------------------------------Global functions -------------------------------------------------------

function addToInventory(type) {
  switch (type) {
    case "water":
      ++waterInventory.innerText;
      break;
    case "wood":
      ++woodInventory.innerText;
      break;
    case "dirt":
      ++dirtInventory.innerText;
      break;
    case "grass":
      ++grassInventory.innerText;
      break;
    case "rock":
      ++rockInventory.innerText;
      break;
    case "leaf":
      ++leafInventory.innerText;
  }
}

function removeMaterial(element, type) {
  if (
    (activeToolOrMaterial === axe && element.className === "wood") ||
    (activeToolOrMaterial === axe && element.className === "leaf") ||
    (activeToolOrMaterial === shovel && element.className === "dirt") ||
    (activeToolOrMaterial === shovel && element.className === "grass") ||
    (activeToolOrMaterial === pick && element.className === "rock") ||
    (activeToolOrMaterial === bucket && element.className === "water")
  ) {
    element.setAttribute("class", "empty");
    addToInventory(type);
  }
}

function addMaterial(clickTarget) {

    if (activeToolOrMaterial === waterInventory && waterInventory.innerText > 0) {
        clickTarget.classList.add('water');
        --waterInventory.innerText
    }
    if (activeToolOrMaterial === woodInventory && woodInventory.innerText > 0) {
        clickTarget.classList.add('wood');
        --woodInventory.innerText
    }
    if (activeToolOrMaterial === rockInventory && rockInventory.innerText > 0) {
        clickTarget.classList.add('rock');
        --rockInventory.innerText
    }
    if (activeToolOrMaterial === leafInventory && leafInventory.innerText > 0) {
        clickTarget.classList.add('leaf');
        --leafInventory.innerText
    }
    if (activeToolOrMaterial === dirtInventory && dirtInventory.innerText > 0) {
        clickTarget.classList.add('dirt');
        --dirtInventory.innerText
    }
    if (activeToolOrMaterial === grassInventory && grassInventory.innerText > 0) {
        clickTarget.classList.add('grass');
        --grassInventory.innerText
    }

    
    console.log(clickTarget)
}

//!---------------------------------------------------Window Event listener- "Click to activate"-----------------------------------------------

document.addEventListener("click", function (e) {
  if (e.target === axe) activeToolOrMaterial = axe;
  if (e.target === shovel) activeToolOrMaterial = shovel;
  if (e.target === pick) activeToolOrMaterial = pick;
  if (e.target === bucket) activeToolOrMaterial = bucket;
  if (e.target === waterInventory) activeToolOrMaterial = waterInventory;
  if (e.target === woodInventory) activeToolOrMaterial = woodInventory;
  if (e.target === rockInventory) activeToolOrMaterial = rockInventory;
  if (e.target === dirtInventory) activeToolOrMaterial = dirtInventory;
  if (e.target === grassInventory) activeToolOrMaterial = grassInventory;
  if (e.target === leafInventory) activeToolOrMaterial = leafInventory;
});

//?--------------------------------------------------------------------Class Grid -------------------------------------------------------------

class Grid {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }
  static createEmptyGrid() {
    for (let row = 1; row <= totalGridRows; ++row) {
      for (let column = 1; column <= totalGridColumns; ++column) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("empty");
        gridSquare.style.gridRowStart = row;
        gridSquare.style.gridColumnStart = column;
        gameGrid.appendChild(gridSquare);
      }
    }
  }

  static createMap(type, rowStart, rowEnd, columnStart, columnEnd) {
    for (let row = rowStart; row <= rowEnd; ++row) {
      for (let column = columnStart; column <= columnEnd; ++column) {
        const materialElement = document.createElement("div");
        materialElement.style.gridRowStart = row;
        materialElement.style.gridColumnStart = column;
        materialElement.classList.add(`${type}`);
        gameGrid.appendChild(materialElement);
      }
    }
  }

  static gridClickHandler() {
    gameGrid.addEventListener("click", function (e) {
      removeMaterial(e.target, e.target.className);
      if (e.target.className === "empty") {
        e.target.classList.remove("empty");
        addMaterial(e.target);
      }
    });
  }
}
Grid.createEmptyGrid();
Grid.gridClickHandler();


//?---------------------------------------------------------------------------------------------------------------------------------------


//click event on tool:
//1. cursor becomes the tool.


//---------------------------------------------------------------------Created map-----------------------------------------------------

Grid.createMap("dirt", 12, 15, 1, 14);
Grid.createMap("dirt", 12, 15, 23, 37);
Grid.createMap("dirt", 13, 15, 13, 15);
Grid.createMap("dirt", 13, 15, 22, 23);

Grid.createMap("grass", 11, 11, 1, 14);
Grid.createMap("grass", 11, 11, 23, 37);

Grid.createMap("water", 11, 12, 15, 22);
Grid.createMap("water", 13, 15, 16, 21);

Grid.createMap("rock", 10, 10, 14, 14);
Grid.createMap("rock", 9, 9, 15, 15);
Grid.createMap("rock", 8, 8, 16, 16);
Grid.createMap("rock", 8, 8, 17, 21);
Grid.createMap("rock", 9, 9, 22, 22);
Grid.createMap("rock", 10, 10, 23, 23);

Grid.createMap("wood", 7, 10, 30, 30);
Grid.createMap("leaf", 3, 6, 29, 31);

Grid.createMap("cloud", 3, 4, 10, 12);
Grid.createMap("cloud", 2, 3, 12, 14);
Grid.createMap("cloud", 1, 2, 13, 16);

Grid.createMap("cloud", 1, 2, 24, 25);
Grid.createMap("cloud", 2, 3, 22, 25);
Grid.createMap("cloud", 3, 4, 24, 27);
Grid.createMap("cloud", 2, 3, 26, 26);

Grid.createMap("sun", 1, 4, 2, 5);
