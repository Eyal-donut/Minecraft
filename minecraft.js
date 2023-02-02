//?generate land
const gameGrid = document.getElementById('game-grid')

class Material{
    constructor(type, active, row, column) {
        this.row = row;
        this.column = column;
        this.type = type;
        this.active = active;
    }

    static createMaterial(gameGrid, type, rowStart, rowEnd, columnStart, columnEnd){

        for (let row = rowStart; row <= rowEnd; ++row){
            for(let column = columnStart; column <= columnEnd; ++column) {
                const materialElement = document.createElement('div')
                materialElement.style.gridRowStart = row
                materialElement.style.gridColumnStart = column
                materialElement.classList.add(`${type}`);
                gameGrid.appendChild(materialElement);       
            }
        }
    }
}

Material.createMaterial(gameGrid, 'grass', 1, 2, 1, 5)
