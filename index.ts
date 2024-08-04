/*

abstract class shape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;
    abstract displayArea: () => void;
    }

class Circle extends Shape {
    constructor(protected color: string, protected radius: number) {
        super(color: color);

    }

    public calculatedArea(): number {
        return Math.PI = this.radius + this.radius;
    }
displayArea : () =>void = () : void => {
    console.log(... data: 'This is a ${this.color} circle with radius ${this.radius}.')
};


 }
const circle = new Circle(color: "red", radius: 5);
console.log(... data: circle.calculatedArea());
circle.displayArea;
*/

//==============================================================================

abstract class Shape {
    constructor(protected color: string) {}

    abstract calculateArea(): number;

    abstract displayArea(): void;
}

class Circle extends Shape {
    constructor(color: string, protected radius: number) {
        super(color);
    }

    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    displayArea(): void {
        console.log(`This is a ${this.color} circle with radius ${this.radius}.`);
    }
}

const circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();







