//--------------FUNCTIONS----------------
function greet(firstName = 'sample',lastName='simple')
{
    return 'Hello' + ' ' + firstName + ' ' + lastName;
}

console.log(greet('shubhra','suman'));

//Default arguments when calling function is not giving parameters
console.log(greet());

//function expression
//function is treated as an expression
const square = function(x){
   return x*x;
};
console.log(square(19));

//Immediately invokable function expression - IIFE
// These functions are declared and run at same time
// (function(){
// console.log("IIFE ran...")
// ;})()-> Here we specify arguments/parameters of function

(function(firstName){
    console.log('My name is'+ firstName);
})('sampleName')
