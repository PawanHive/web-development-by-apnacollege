/*
**********************Nested if-else************************************
==> Nesting is writing if-else inside if-else statements. It can have many levels.
*/

let marks = 45;

if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {                  // from here is NESTED IF-ELSE
        console.log("Grade: O")
    } else {
        console.log("Grade: A")
    }
} else {
    console.log("Better luch next time!");
}
