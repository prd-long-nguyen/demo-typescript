// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["hello", "world"];

// Tuple
let tuple: [string, number] = ["hello", 10];

// Readonly array
const readOnlyNumbers: ReadonlyArray<number> = [1, 2, 3];

// Multi-dimensional array
let matrix: number[][] = [
    [1, 2],
    [3, 4]
];

// Array với union types
let mixedArray: (number | string)[] = [1, "hello", 2, "world"];

// Enum
enum Color {
    Red,
    Green,
    Blue
}

let color: Color = Color.Red; 