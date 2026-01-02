/*
************** truthy & falsy ********************

==> Everything in JS is true or false (in boolean context)

==> This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean context



***FAlSY VALUES***
==> false, 0, -0, On (BigInt value), ""(empty string), null, undefined, NaN


***TRUTHY VALUES***
==> Everything else
*/

if (0) {
    console.log("it has true value");
} else {
    console.log("it has false value");
}
//output: it has false value   