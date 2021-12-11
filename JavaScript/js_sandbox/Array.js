//------ARRAY-----------

//Create array

const numbers = [1,2,3,4,5];
const fruits = ['banana','apple','orange','strawberry'];
const mixed = [22,'banana',09,true,null,undefined];

console.log(mixed);

let val;
//get length of array
val = numbers.length;
console.log(val);
//check if it is array
val = Array.isArray(numbers);
console.log(val);
//get array elements using index
val = numbers[0];
console.log(val);
//Insert in an array at a index
val = numbers.indexOf(2);

console.log(val);

//MUTATING ARRAYS
const arr1 = [23,4,490,98,12];
//Add element on to end
arr1.push(23);
console.log(arr1);
//Add element on to front
arr1.unshift(12);
console.log(arr1);
//Remove element from end
arr1.pop();
console.log(arr1);
//Remove element from front
arr1.shift();
console.log(arr1);
//Splice values
arr1.splice(1,3);
console.log(arr1);
//Reverse
arr1.reverse();
console.log(arr1);

//Sorting arrays
//String array
val = fruits.sort();
console.log(val);
//Number array
//Here it will sort based on 1st digit of number
val = arr1.sort();
console.log(val);

//use compare function
val = arr1.sort(function(x,y){
    return x-y;
});
console.log(val);
