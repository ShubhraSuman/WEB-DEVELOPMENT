// ---------STRING METHODS------------
let firstName = "Shubhra";
let lastName = "Suman"
let val;

//Escaping
// \ backslash indicates compiler to escape '
val = 'That\'s awesome how you express your thought\'s';

// Length
val = firstName.length; //7

// Concat()
val = firstName.concat(' ',lastName);

//Change case
val = firstName.toUpperCase();//SHUBHRA
val = firstName.toLowerCase();

// IndexOF
val = firstName.indexOf('a');//6
val = firstName.lastIndexOf('h'); //4

// CharAt
val = firstName.charAt('2'); //u

//substring
val = firstName.substring(0,4);//Shub

// slice()
val = firstName.slice(0,4);//Shub
val = firstName.slice(-3);//hra

// split()
let str = "Hello! you know my name so lets split it by space.";
val = str.split(' ');
console.log(val);
