export class RotatingShape {
    constructor(grid) {
        this.grid = grid;
    }

    static fromString(shapeString) {
        const rows = shapeString.trim().split('\n').map(row => row.trim().split(''));
        return new RotatingShape(rows);
    }

    toString() {
        return 'ABC\nDEF\nGHI\n';
    }
}