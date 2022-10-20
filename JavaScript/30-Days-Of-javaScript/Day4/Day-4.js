Q1.// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

let age = prompt("Enter your age");
if(age>18)
{
    console.log("You are old enough to drive");
}
else
{
    console.log("You need to wait for " + (18-`${age}`)  + " years to drive");
}

Q2.
// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you).
//Use prompt(“Enter your age:”) to get the age as input.

let shubhsAge = prompt("Enter your age shubhra");
let yourAge = prompt("Enter your age");
if(shubhsAge > yourAge)
{
    console.log("Shubhra is " + (`${shubhsAge}` - `${yourAge}`) + " year\'s older");
}
else
{
    console.log("Shubhra is " + (`${yourAge}` - `${shubhsAge}`) + " year\'s younger");
}

Q3.// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a = prompt("Enter the value of a");
let b = prompt("Enter the value of b");
a > b? console.log(`${a}` + " is greater than " +`${b}`):
console.log(`${b}` + " is greater than " +`${a}`);

Q4.// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let a = prompt("Enter the number");
a%2 == 0 ? console.log("Even"):console.log("odd");

Q5.// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let season = prompt("Enter a month to check season");
if(season === "September" || season === "October" || season === "November")
console.log("Season is Autumn");
else if(season === "December" || season === "January" || season === "February")
console.log("Season is Winter");
else if(season === "March" || season === "April" || season === "May")
console.log("Season is spring");
else
console.log("Season is summer");



