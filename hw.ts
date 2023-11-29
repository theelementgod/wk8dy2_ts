// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean

let d = {age: number};
// A:any

let e = [3]
// A: number[]

let f;
// A: originally put void.  saw any when i hovered over f;

let g = []
// A:originally put void.  when i hovered over g, i saw never[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A:There is no releaseYear in the values.  a realeaseYear? could have been used here.

let prices = [100, 200, 300];
prices[0] = '$100';
// A: the array prices is a number[] and we are trying to put in a string

function myFunc(a: number, b: number): number {}
// A: we have not defined what is being returned