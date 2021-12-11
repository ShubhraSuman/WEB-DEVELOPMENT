//--------------------LOOPS---------------------
const cars = ['Ford','Honda','Mercedes','Swift'];

// For loop
for(let i = 0;i<cars.length;i++)
{
    console.log(cars[i]);
}
console.log('\n');
console.log('\n');
// For each loop
cars.forEach(function(curr){
   console.log(curr);
});

// For In loop
const users = {
    firstName : 'Shubhra',
    lastName : 'Suman',
    Age : 21
}
console.log('\n');
console.log('\n');
for(let x in users)
{
    console.log(`${x} : ${users[x]}`);
}
