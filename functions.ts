// Function với kiểu dữ liệu tham số và kiểu trả về
function add(x: number, y: number): number {
    return x + y;
}

// Arrow function với kiểu dữ liệu
const multiply = (x: number, y: number): number => x * y;

// Function với tham số tùy chọn
function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    return firstName;
}

// Function với tham số mặc định
function greet(name: string = "Anonymous"): string {
    return `Hello ${name}!`;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
} 