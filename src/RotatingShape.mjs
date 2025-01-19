export class RotatingShape {
    constructor(grid) {
        this.grid = grid;
    }

    static fromString(shapeString) {
        const rows = shapeString.trim().split('\n').map(row => row.trim().split(''));
        return new RotatingShape(rows);
    }

    toString() {
        return this.grid.map(row => row.join('')).join('\n')+'\n';
    }

    rotateRight(){
        gridSize = this.grid.size;
        rotatedGrid=Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                rotatedGrid[col][gridSize - row - 1] = this.grid[row][col];
            }
        }
        const rotated = new RotatingShape(rotatedGrid)
        return rotated;
    }

    rotateLeft(){
        gridSize = this.grid.size;
        rotatedGrid=Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                rotatedGrid[size - col - 1][row] = this.grid[row][col];}}
        const rotated = new RotatingShape(rotatedGrid)
        return rotated;
    }
}