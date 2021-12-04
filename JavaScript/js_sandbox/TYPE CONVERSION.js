//-----------------TYPE CONVERSION--------------------------------
// Either use string or  toString()
// 1) NUMBER TO STRING

let val;
val = 5;
console.log(val); // 5 
console.log(typeof val); // NUMBER
console.log(val.length); //undefined since length works with string

val = String(5);
console.log(val); // 5 
console.log(typeof val); // STRING
console.log(val.length); //1

// 2) Bool to String
let val1;
val1 = String(true); 
console.log(val1); //  true
console.log(typeof val1); // String
console.log(val1.length); // 4

// 3) Date to String
let val2 = String(new Date());
console.log(val2); //  Sat Dec 04 2021 03:59:25 GMT+0530 (India Standard Time)
console.log(typeof val2); // String
console.log(val2.length); // 55

//--------------------------------STRING TO NUMBER---------------------
let val3 = '5';
console.log(val3); // 5
console.log(typeof val3); //String

val3 = Number('5');
console.log(val3); // 5
console.log(typeof val3); //Number

