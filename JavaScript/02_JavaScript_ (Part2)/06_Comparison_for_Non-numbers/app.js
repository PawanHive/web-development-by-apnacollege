/*
************* Comparison for Non-Numbers ********************

'A' -> 41,  'B' -> 42...
'a' -> 61,  'b' -> 62...        // REMEMBER: small letter ('a') values are bigger than capital letter ('A')



A < B < C < D < E...

a < b < c < d < e...

*/

console.log('a' < 'b')      //output: true
console.log('a' > 'b')      //output: false
console.log('a' < 'A')      //output: false
console.log('a' > 'A')      //output: true
console.log('B' < 'b')      //output: true
console.log('B' < 'c')      //output: true
console.log('*' < '&')      //output: false
console.log('*' > '&')      //output: true