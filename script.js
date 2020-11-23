class Renctangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Renctangle(10, 10);

console.log(square.calcArea());