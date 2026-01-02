/* 
************* Template Literals **********************
==> Syntax:
`any string ${variables} any string`;
*/

let pencilPrice = 10;
let erasorPrice = 5;
// let output = "the total price is: "+  (pencilPrice + erasorPrice) + " Rupees. ";
let output = `The total Price is: ${pencilPrice + erasorPrice} Rupees.`;  //back ticks
console.log(output);
