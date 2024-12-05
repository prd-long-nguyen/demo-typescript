// Class cơ bản
class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public makeSound(): void {
        console.log("Some sound");
    }
}

// Kế thừa
class Dog extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }

    public makeSound(): void {
        console.log("Woof! Woof!");
    }

    public getAge(): number {
        return this.age; // Có thể truy cập thuộc tính protected
    }
}

// Abstract class
abstract class Shape {
    abstract getArea(): number;

    printArea(): void {
        console.log(`Area: ${this.getArea()}`);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
} 