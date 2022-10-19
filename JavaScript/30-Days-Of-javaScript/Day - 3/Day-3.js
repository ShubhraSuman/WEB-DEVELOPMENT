Q1. //Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = "Shubhra";
let lastName = "Suman";
let country = "India";
let city = "ranchi";
let age = 20;
let isMarried = false;
const now = new Date();
let year = now.getFullYear();
console.log(typeof(firstName));
console.log(typeof(lastName));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));


Output:
string
string
string
string
number
boolean
number

Q2. // Check if type of '10' is equal to 10

let num = '10';
console.log(num == 10); // checks value
console.log(num === 10); // checks type
 
Q3.// Check if parseInt('9.8') is equal to 10

let numInt = parseInt(9.8)
console.log(numInt);
console.log(numInt == 10);
console.log(numInt === 10);

Output:
9
false
false

Q4.
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
o/p:
true
true
false
false
true
true
false
false
false
true
false

Q5.// Use the Date object to do the following activities

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
// Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
O/p:
2022-10-19T12:19:36.269Z
2022
9
19
3
12
19
36

Q6. // Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100

let base = prompt('Enter base', '');
let height = prompt('Enter height', '');
console.log(" The area of the triangle is " + base*height);


