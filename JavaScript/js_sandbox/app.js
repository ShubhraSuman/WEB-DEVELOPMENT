// ----------------VAR-----------------------------
var myName = "Shubhra suman";
console.log(myName);
myName = "Shubhra yet suman";
console.log(myName);

//Init var
var greet;
//since it is not initialised
//so it will give undefined
console.log(greet);
greet = "Hi there!";
console.log(greet);

// Variables can start with
// Letters,numbers,_,$
// Cannot start with number.

// ----------------LET-----------------------------
let myName = "Shubhra suman";
console.log(myName);
myName = "Shubhra yet suman";
console.log(myName);

//Init var
let greet;
//since it is not initialised
//so it will give undefined
console.log(greet);
greet = "Hi there!";
console.log(greet);


// ----------------CONST-----------------------------
const myName = "Shubhra";
console.log(myName);

//------------------WRONG!!-------------------------------
//Const cannot be reassigned
//myName = "suman"; // WRONG!!
//const greet;// Have to assign value at time of initialisation

const Person{
    name: "Shubhra",
    age: 21
}
//Allowed 
// member variables of class can be changed.
//We can change what is declared but we cannot reassign.
Person.name = "Suman";
Person.age = 20;

