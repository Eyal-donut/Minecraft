//--------------------------------------------------------global variables
let activeToolOrMaterial = "dirt";
// let gridSquare = "";
console.log(activeToolOrMaterial);

//--------------------------------------------------------Grid variables

const gameGrid = document.getElementById("game-grid");
const totalGridRows = 15;
const totalGridColumns = 35;

//--------------------------------------------------------Tools variables----------------------------------------------------------
const axe = document.getElementById("axe");
const shovel = document.getElementById("shovel");
const pick = document.getElementById("pick");
const bucket = document.getElementById("bucket");
//--------------------------------------------------------helping functions

class Materials {
  constructor(type, row, column) {
    this.row = row;
    this.column = column;
    this.type = type;
  }

  static makeDisappear() {
    // **function  makeDissapear() -  if you click on it with the correct active tool, it sets its background to '.no-background'
    materialElement.addEventListener("click", function () {
      materialElement.classList.remove("grass");
    });
  }

  static collectMaterial() {
    // **function  makeDissapear() -  if you click on it with the currect active tool, it sets its background to '.no-background'.
    //If it's the first collection of the material, it updates the photo of a square in the inventory to the material
    //**function: Update inventory: waterInventory.count +=1. Also update local storage.
    //**function: update photo: add the class that you need (water, dirt etc) to the inventory slot.
    //It updates a global variable of the number of the item and saves it to the local storage
  }
}
console.log(gameGrid);

class Inventory extends Materials {
  constructor(type, row, column, count) {
    super(type, row, column);
    this.count = count;
  }

  static calculateCoordinates() {
    //find row and column
  }
}
const waterInventory = new Inventory("water", -1, -1, false, 0);
const stoneInventory = new Inventory("stone", -1, -1, false, 0);
//add the rest of the elements to the inventory

class Tools {
  constructor(name) {
    this.name = name;
  }
  static cursorToTool() {}

  static activateByClick(toolVariable) {
    toolVariable.addEventListener("click", function () {
      activeToolOrMaterial = toolVariable;
      console.log(activeToolOrMaterial);
    });
  }
}
Tools.activateByClick(axe);
Tools.activateByClick(shovel);
Tools.activateByClick(pick);
Tools.activateByClick(bucket);

//----------------------------------------------------------------------------

// function createMaterial() {
//   if (
//     activeToolOrMaterial !== axe &&
//     activeToolOrMaterial !== pick &&
//     activeToolOrMaterial !== shovel &&
//     activeToolOrMaterial !== bucket
//   )
//   gridSquare.classList.remove('empty');
//   gridSquare.classList.add('dirt');
//   console.log(gridSquare)
// }

//-----------------------------------------------Help functions
function removeMaterial(element, toolVariable, type) {
  if (activeToolOrMaterial === toolVariable && element.className === type) {
    element.classList.remove(type);
    //add to inventory
    //update inventory photo
  }
}


function addMaterial(input) {
  if (
    activeToolOrMaterial !== axe &&
    activeToolOrMaterial !== pick &&
    activeToolOrMaterial !== shovel &&
    activeToolOrMaterial !== bucket
  )
    input.classList.add(activeToolOrMaterial);
}

//--------------------------------------------------------Classes
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

  static clickHandler() {
    gameGrid.addEventListener("click", function (e) {
        removeMaterial(e.target, axe, 'wood')
        removeMaterial(e.target, shovel, 'dirt')
        removeMaterial(e.target, shovel, 'grass')
        removeMaterial(e.target, pick, 'rock')
        removeMaterial(e.target, bucket, 'water')
      
       if (e.target.className === "empty") {
          e.target.classList.remove("empty");
          addMaterial(e.target);
         }
    });
  }
}
Grid.createEmptyGrid();
Grid.clickHandler();
// Grid.clickHandler(Grid.removeMaterial);

//click event on tool:
//1. cursor becomes the tool.
//redefine active global variable
// if you click on a material, it changes it so it disappears

//click on material in inventory: makes the material active.
//click on somewhere on the screen adds the material to there, and deactivates the tools
//click on the screen: if there is an element on the screen - do nothing. If empty: **function: calculate row and column. **call method Materials.createMaterial

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
