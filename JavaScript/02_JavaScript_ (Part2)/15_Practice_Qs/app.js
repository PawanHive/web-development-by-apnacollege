/*
*********************** Practice Q1 ***********************

Q1. A "good string" is a string that starts with the letter 'a'
&  has a length > 3. Write a program to find if a string is good or not.
*/

//Solution: 

let str = "abcc";

if ((str.length > 3) && (str[0] === 'a')) {
    console.log("Good String")
} else {
    console.log("String is not good")
}

/*********************** Practice Q1 ***********************

Q2. Predict the ouput of the following code:

*/

let num = 12;

if ((num%3 === 0) && ( (num+1 == 15) || (num-1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

//output: True