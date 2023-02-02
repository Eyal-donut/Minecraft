//?generate land
const gameGrid = document.getElementById('game-grid')

class Material{
    constructor(type, active, row, column) {
        this.row = row;
        this.column = column;
        this.type = type;
        this.active = active;
    }

    static createMaterial(type, rowStart, rowEnd, columnStart, columnEnd){

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

Material.createMaterial('dirt', 12, 15, 1, 14)
Material.createMaterial('dirt', 12, 15, 23, 37)
Material.createMaterial('dirt', 13, 15, 13, 15)
Material.createMaterial('dirt', 13, 15, 22, 23)



Material.createMaterial('grass', 11, 11, 1, 14)
Material.createMaterial('grass', 11, 11, 23, 37)

Material.createMaterial('water', 11, 12, 15, 22)
Material.createMaterial('water', 13, 15, 16, 21)

Material.createMaterial('rock', 10, 10, 14, 14)
Material.createMaterial('rock', 9, 9, 15, 15)
Material.createMaterial('rock', 8, 8, 16, 16)
Material.createMaterial('rock', 8, 8, 17, 21)
Material.createMaterial('rock', 9, 9, 22, 22)
Material.createMaterial('rock', 10, 10, 23, 23)

Material.createMaterial('wood',)



Material.createMaterial('clouds',)
Material.createMaterial('sun', )

