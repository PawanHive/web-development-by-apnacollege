/*
********************* Alert & Prompt **********************

==> "Alert" displays a alert message on the page.
alert("something is wrong")

==> "Prompt" display a dialog box that asks user for some input.
prompt("please enter your roll no.");
*/


//alert ----------------------------------------

// alert("something is wrong")
console.log("this is a simple log")
console.error("this is an error msg")
console.warn("this is a warning msg")


//prompt ---------------------------------------

// prompt("enter your name:")

// let firstName = prompt("Enter your name: ");        // taking value from user
// console.log(firstName)                      //output: Pawan


let firstName = prompt("Enter first name: "); 
let lastName = prompt("Enter last name: "); 
console.log(`Welcome ${firstName} ${lastName}!`)