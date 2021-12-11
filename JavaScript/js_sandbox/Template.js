// -------TEMPLATE LITERALS-----------------
const name = "shubhra";
const age = 21;
const job = "ASE";
const city = " In my own world!";
let html;

//Without templte strings (es5)
html = '<ul>'+
       '<li>Name: '+ name +'</li>' +
       '<li>Age: '+ age + '</li>'  +
       '<li>Job: '+ job + '</li>'  +
       '<li>City: '+ city + '</li>'+
       '</ul>';

//With template string (es6)
html = `<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
</ul>`;

document.body.innerHTML = html;
