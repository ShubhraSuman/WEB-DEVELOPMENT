//---------DOM-------------
/*
- DOM - stands for document object model
- Every web page resides inside a browser window which can be considered 
as an object.

- A Document object represents the HTML document that is displayed in 
that window. The Document object has various properties that refer to 
other objects which allow access to and modification of document content.

- The way a document content is accessed and modified is called the 
Document Object Model, or DOM. The Objects are organized in a hierarchy. 
This hierarchical structure applies to the organization of objects in a 
Web document.

Window object − Top of the hierarchy. It is the outmost element of the 
object hierarchy.

Document object − Each HTML document that gets loaded into a window 
becomes a document object. The document contains the contents of the page.

Form object − Everything enclosed in the <form>...</form> tags sets the form object.

Form control elements − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.
*/

let val;
//Document content whole html code
val = document;
// Gives an array of all the tags present in html
val = document.all;
// How many tags are there in html
val = document.all.length;
// Head and its content
val = document.head;
// Body and its content
val = document.body;
// Domain
val = document.domain;
val = document.URL;
// to get links 
val = document.links;
val = document.scripts;

//-----------------------------------------------------------------
/*
1) document.getElementById
- The getElementById() method returns the element that has the ID 
attribute with the specified value.
- Returns null if no elements with the specified ID exists.
*/

// Access elements by id and different values
val = document.getElementById('h1-tag');

//get things from element 
val = document.getElementById('h1-tag').id;
val = document.getElementById('h1-tag').className;

//Change styling of elements 
// Change CSS properties
//To change font color
document.getElementById('h1-tag').style.color = '#8b008b';
// To change background color
document.getElementById('h1-tag').style.background = '#d3d3d3';
// To change padding of element
document.getElementById('h1-tag').style.padding = '5px';
// To make element disapper
document.getElementById('h1-tag').style.display = 'none';
// To change content of element
document.getElementById('h1-tag').textContent = "Changing content from js";
// TO change content using html
/*span tag:
In HTML, the span tag is a generic inline container element. */
document.getElementById('h1-tag').innerHTML = '<span style= "color:red">Changing text from HTML</span>';
console.log(val);

/*
Insted of writting document.getElementById('h1-tag') multiple times
we can assign it in a variable and use that variable
let assign = document.getElementById('h1-tag')
assign.style.color = 'pink'
*/

//------------------------------------------------------------------------

/*
2) Document query selector:
- The querySelector() method returns the first element that matches a 
specified CSS selector(s) in the document.
*/

let value;
// get value by id
value = document.querySelector('#h1-tag');
// get element by className
value = document.querySelector('.h1-class-tag');
value = document.querySelector('h1');
// console.log(value);

/*
Using querySelector on unordered list.
*/
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(2)').style.color = 'red';
