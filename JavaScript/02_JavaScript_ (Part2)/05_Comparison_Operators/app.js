//***************** Comparison Operator***********************

/*
> ... Greater than

>= ... greater than or equalto

< ... Less than 

<= ... Less than or equalto

== ... equal to

!= ... not equal to
*/

// Operators
let age = 18;
console.log(age > 18);      //output: false
console.log(age >= 18);     //output: true
console.log(age < 18);      //output: false
console.log(age >= 18);     //output: true
console.log(age == 18);     //output: true
console.log(age != 18);     //output: false
console.log(5 != 4);        //output: true
console.log(5 != 5);        //output: false

// Equal-to Operator (==)... only compares value, not type:

console.log(5 == '5');          //output: true.... because only compare NUMBER not TYPE
console.log('5' == 5);          //output: true
console.log(0 == ' ');         //output: true
console.log(0 == false);       //output: true
console.log(0 == true);          //output: false
console.log(1 == true);          //output: true
console.log(null == undefined);       //output: true

// Triple Equal-to Operator (===) ... Compares type & value:

console.log(5 === '5');       //output: false.... because compare VALUE as well as TYPE
console.log('5' === 5);       //output: false
console.log(0 === ' ');       //output: false
console.log(0 === false);       //output: false
console.log(0 === true);       //output: false
console.log(1 === true);       //output: false
console.log(null === undefined);       //output: false