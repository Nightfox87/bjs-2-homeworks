function parseCount(itemsQuantity) {
    let value = Number.parseInt(itemsQuantity);
    if (isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value;
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    } 
}

class Triangle{
    constructor(firstSide, secondSide, thirdSide){
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        if ((firstSide + secondSide < thirdSide) || (secondSide + thirdSide < firstSide) || (thirdSide + firstSide < secondSide)) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }
    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }
    getArea() {
        let p2 = this.getPerimeter() / 2;
        return Number(Math.sqrt(p2 * (p2 - this.firstSide) * (p2 - this.secondSide) * (p2 - this.thirdSide)).toFixed(3));
    }

}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    }
    catch {
        let errorTriangle = {
            getPerimeter: function () {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function () {
                return "Ошибка! Треугольник не существует";
            }
        }
        return errorTriangle;
        
    } 
}
