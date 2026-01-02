/*
Qs5. Write a program to find the largest of 3 numbers.
*/

let a = 41;
let b = 20;
let c = 3;

if (a > b) {
    if (a > c) {
        console.log(`${a}, is largest`)
    } else {
        console.log(`${c}, is largest`)
        
    }
} else {
    if (b > c) {
        console.log(`${b}, is largest`)
        
    } else {
        console.log(`${c}, is largest`)
        
    }
}