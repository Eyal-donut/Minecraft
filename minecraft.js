//--------------------------------------------------------global variables
let activeToolOrMaterial = 'dirt';


//--------------------------------------------------------Grid variables 

const gameGrid = document.getElementById('game-grid')
const totalGridRows = 15 
const totalGridColumns = 35 

//--------------------------------------------------------helping functions





//--------------------------------------------------------Classes
class Grid{
    constructor(row, column){
        this.row = row;
        this.column = column;
    }
    static createClickableGrid(){
        for(let row = 1; row <= totalGridRows; ++row){
            for(let column = 1; column <= totalGridColumns; ++column){
                const gridSquare = document.createElement('div')
                gridSquare.classList.add('empty')
                gridSquare.style.gridRowStart = row
                gridSquare.style.gridColumnStart = column
                gameGrid.appendChild(gridSquare);
                gridSquare.addEventListener('click', function addMaterial(){
                    gridSquare.classList.add(activeToolOrMaterial)

                })
            }
        }

    }
  
}
Grid.createClickableGrid();



class Materials{
    constructor(type, row, column) {
        this.row = row;
        this.column = column;
        this.type = type;
    }


    static createMaterial(type, rowStart, rowEnd, columnStart, columnEnd){
        // const materialsArray =[];
        for (let row = rowStart; row <= rowEnd; ++row){
            for(let column = columnStart; column <= columnEnd; ++column) {
                // const material = new Materials(type, false, row, column)
                const materialElement = document.createElement('div')
                materialElement.style.gridRowStart = row
                materialElement.style.gridColumnStart = column
                materialElement.classList.add(`${type}`);
                gameGrid.appendChild(materialElement);
                // materialsArray.push(material)     
            }
        }
        // console.log(materialsArray)
        // return materialsArray;
    }

    static makeDisappear(){
        // **function  makeDissapear() -  if you click on it with the correct active tool, it sets its background to '.no-background'. 

    }

    static collectMaterial(){
        // **function  makeDissapear() -  if you click on it with the currect active tool, it sets its background to '.no-background'. 
        //If it's the first collection of the material, it updates the photo of a square in the inventory to the material 
        //**function: Update inventory: waterInventory.count +=1. Also update local storage.
        //**function: update photo: add the class that you need (water, dirt etc) to the inventory slot. 
        //It updates a global variable of the number of the item and saves it to the local storage
    }

   

}

class Inventory extends Materials {
    constructor(type, row, column, count){
        super(type, row, column)
        this.count = count
    }

   
    static calculateCoordinates(){
        //find row and column
    }
}
const waterInventory = new Inventory('water', -1, -1, false, 0)
const stoneInventory = new Inventory('stone', -1, -1, false, 0)
//add the rest of the elements to the inventory

class Tools{
    constructor(name){
        this.name = name;
    }
    static cursorToTool(){

    }

    static activateTool(){
//2. tool active mode is on. it's property active is true, and it toggles the active property of the rest to false (add as a method in the class - set active). *function: toggle active property, with input of active tool, so only this is active and te rest are not.
//!better idea: define a global variable of active, that updates with each click
    }
}

//---------------------------------------------------------------------Created map-----------------------------------------------------

Materials.createMaterial('dirt', 12, 15, 1, 14)
Materials.createMaterial('dirt', 12, 15, 23, 37)
Materials.createMaterial('dirt', 13, 15, 13, 15)
Materials.createMaterial('dirt', 13, 15, 22, 23)



Materials.createMaterial('grass', 11, 11, 1, 14)
Materials.createMaterial('grass', 11, 11, 23, 37)

Materials.createMaterial('water', 11, 12, 15, 22)
Materials.createMaterial('water', 13, 15, 16, 21)

Materials.createMaterial('rock', 10, 10, 14, 14)
Materials.createMaterial('rock', 9, 9, 15, 15)
Materials.createMaterial('rock', 8, 8, 16, 16)
Materials.createMaterial('rock', 8, 8, 17, 21)
Materials.createMaterial('rock', 9, 9, 22, 22)
Materials.createMaterial('rock', 10, 10, 23, 23)

Materials.createMaterial('wood', 7 ,10, 30, 30)
Materials.createMaterial('leaf', 3 , 6, 29, 31)


Materials.createMaterial('cloud', 3, 4, 10, 12)
Materials.createMaterial('cloud', 2, 3, 12, 14)
Materials.createMaterial('cloud', 1, 2, 13, 16)

Materials.createMaterial('cloud', 1, 2, 24, 25)
Materials.createMaterial('cloud', 2, 3, 22, 25)
Materials.createMaterial('cloud', 3, 4, 24, 27)
Materials.createMaterial('cloud', 2, 3, 26, 26)

Materials.createMaterial('sun', 1, 4, 2, 5) 



//----------------------------------------------------------------------------

//click event on tool: 
//1. cursor becomes the tool. 
//redefine active global variable
// if you click on a material, it changes it so it disappears 

//click on material in inventory: makes the material active. 
//click on somewhere on the screen adds the material to there, and deactivates the tools 
//click on the screen: if there is an element on the screen - do nothing. If empty: **function: calculate row and column. **call method Materials.createMaterial

