/*
******************* Switch Statement *******************

==> Used when we have some fixed values that we need to compare to.
*/

let color = "red";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("go slow");
        break;
    default:
        console.log("Light is broken");
}