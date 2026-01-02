/*
Qs4. A string is a "Golden String" if it starts with the character 'A' or 'a' and has a total length greater than 5.
    for a given string print if it is golden or not
*/

let str = "Apple";

if ((str.length > 3) && ((str[0] === 'a') || (str[0] === 'A'))) {
    console.log("Golden String")
} else {
    console.log("Not Golden String")
}