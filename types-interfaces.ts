// Basic Types (Các kiểu dữ liệu cơ bản)
let isDone: number = 0;
let decimal: number = 6;
let myColor: string = "blue";
let list: number[] = [1, 2, 3];
let notSure: any = 4;
let u: undefined = undefined;
let n: null = null;



// Interface (Giao diện)
interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property (Thuộc tính tùy chọn)
    readonly id: number; // Readonly property (Thuộc tính chỉ đọc)
}

// Sử dụng interface
const person: Person = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

// Interface cho functions
interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function (src: string, sub: string): boolean {
    return src.search(sub) > -1;
};