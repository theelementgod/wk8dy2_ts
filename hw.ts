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



// Codewars: Python to Javascript

// Problem #1
// DESCRIPTION:
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// Python Solution:
// def make_negative( number ):
// if number < 0:
//     return number
// elif number > 0:
//     return number * -1
// else: 
//     return 0

function makeNegative(num) {
    if (num < 0){
      return num;
    } else if (num > 0){
      return (num * -1);
    } else {
      return 0;
    }
    }
makeNegative(62)


// Problem #2
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1**2+2**2+2**2=9.

// Python Solution:
// def square_sum(numbers):
//     answer = 0
//     for num in numbers:
//         answer += (num ** 2)
//     return answer

function squareSum(numbers){
  let answer = 0
  for(let num of numbers){
    answer += (num ** 2)
  }
  return answer
}
squareSum([1, 2, 2])