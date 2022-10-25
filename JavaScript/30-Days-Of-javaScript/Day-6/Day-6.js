// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// Iterate 0 to 10 using for loop, do the same using while and do while loop


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]
// 1. For loop
console.log("For loop:");
for(let i = 0;i<=10;i++)
{
    console.log(countries[i]);
}

console.log("\n");

// 2. while loop
console.log("While loop:");
let i = 0;
while(i<=10)
{
    console.log(countries[i]);
    i++;
}

console.log("\n");
//3. Do while loop
console.log("Do while loop:");
let j = 0;
do {
  console.log(countries[j])
  j++;
} while (j <= 10)
  
  
  
  // Write a loop that makes the following pattern using console.log():

//     #
//     ##
//     ###
//     ####
//     #####
//     ######
//     #######
let n = 7;
let s="";
for(let i = 0;i<n;i++)
{
    for(let j = 0;j<=i;j++)
    {
      s+= "#";
    }
    console.log(s);
    s = "";
}

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 X 10 = 100

for(let i = 0;i<=10;i++)
{
    console.log(i + " X " + i + " = " + i*i);
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log("i" + " " + "i^2" + " " + "i^3");
for(let i = 0;i<=10;i++)
{
    console.log(i + "   " + (i*i) + "   " + (i*i*i));
}

// Develop a small script which generate array of 5 random numbers

let arr = new Array();
for(let i = 0;i<=5;i++)
{
    arr[i] = Math.floor((Math.random() * 10) + 1);
}
console.log(arr);

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

// Develop a small script which generate a six characters random id:

// 5j2khz

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let result = ' ';
const charactersLength = characters.length;
let length = 7;
 for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
console.log(result);

