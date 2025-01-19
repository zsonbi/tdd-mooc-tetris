export class RotatingShape {
    constructor(grid) {
        this.grid = Object.freeze(grid.map(row => Object.freeze([...row])));
    }

    static fromString(shapeString) {
        const rows = shapeString.trim().split('\n').map(row => row.trim().split(''));
        return new RotatingShape(rows);
    }

    toString() {
        return this.grid.map(row => row.join('')).join('\n') + '\n';
    }

    rotateRight() {
       let gridSize = this.grid.length;
       let rotatedGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                rotatedGrid[col][gridSize - row - 1] = this.grid[row][col];
            }
        }
        const rotated = new RotatingShape(rotatedGrid)
        return rotated;
    }

    rotateLeft() {
        let gridSize = this.grid.length;
        const rotatedGrid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));;
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                rotatedGrid[gridSize - col - 1][row] = this.grid[row][col];
            }
        }
        const rotated = new RotatingShape(rotatedGrid)
        return rotated;
    }
}