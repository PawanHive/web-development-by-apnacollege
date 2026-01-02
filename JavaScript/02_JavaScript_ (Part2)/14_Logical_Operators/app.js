/*
***************** Logical Operators ***********************
==> Logical Operators uses to combine expressions

&& -- Logical AND: both condition should be TRUE.

|| -- Logical OR: any one condition should be TRUE.

! -- Logical NOT: TRUE become FALSE, FALSE become TRUE.


REMEMBER: to calculate logical operators we move LEFT to RIGHT
*/

// Example 1 -----------------------------------------

let marks = 23;

if ((marks > 33 && marks <= 80) || !false) {        //REMEMBER: to calculate logical operators we move LEFT to RIGHT
    console.log("Pass"); //pass
}