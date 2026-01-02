/*
Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit. 
Eg : 32 and 27852 have the same last digit i.e. 2
*/

let num1 = 32;
let num2 = 27852;

if (num1%10 == num2%10) {
    console.log("numbers have the same last digit which is", num1%10);
} else {
    console.log("numbers don't have the same last digit");
}