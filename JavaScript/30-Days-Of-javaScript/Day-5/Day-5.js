Q1.// Declare an empty array;

const arr = Array();
console.log(arr);

Q2.// Declare an array with more than 5 number of elements

const arr = Array(1,2,3,4,"shubhra",8);
console.log(arr);

Q3.//Find the length of your array
const arr = Array(1,2,3,4,"shubhra",8);
console.log(arr);
console.log(arr.length)

Q4.// Get the first item, the middle item and the last item of the array

const arr = Array(1,2,3,4,"shubhra",8);
console.log(arr);
console.log(arr[0]);
console.log(arr[(0+arr.length)/2]);
console.log(arr[arr.length-1]);

Q5.// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = Array(1,2,3,"shubhra",[1, 2, 3]);
console.log(mixedDataTypes);
console.log(mixedDataTypes.length);

Q6.// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = Array("Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");

// Print the array using console.log()
console.log(itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[(0+itCompanies.length-1)/2]);
console.log(itCompanies[itCompanies.length-1]);
// Print out each company
for(let i = 0;i<itCompanies.length;i++)
{
  console.log(itCompanies[i]);
}
// Change each company name to uppercase one by one and print them out
for(let i = 0;i<itCompanies.length;i++)
{
  console.log((itCompanies[i]).toUpperCase());
}
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString() + " are big IT companies.");

const itCompanies = Array("Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon");let compExist = prompt("Please enter a company name to be checked in itCompanies");
  if(itCompanies.indexOf(compExist) != -1)
  {
    console.log("Company exist "+ compExist);
  }
// Sort the array using sort() method
console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
 console.log(itCompanies.slice(0,3));
 
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// Remove the first IT company from the array
itCompanies.splice(0,1);
console.log(itCompanies);

// Remove the middle IT company or companies from the array
itCompanies.splice(itCompanies.length/2,1);
console.log(itCompanies);

// Remove the last IT company from the array
itCompanies.splice(itCompanies.length-1,1);
console.log(itCompanies);

// Remove all IT companies
console.log(itCompanies.splice());
// console.log(itCompanies);

