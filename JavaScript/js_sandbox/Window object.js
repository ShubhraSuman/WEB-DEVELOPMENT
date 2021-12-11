//--------------WINDOW OBJECT-------------------

/* 1) Prompt
The prompt() method in JavaScript is used to display a 
prompt box that prompts the user for the input.
*/

const input = prompt(' Say something to browser! ');
alert(input);

/* 2) Confirm
The confirm() method displays a dialog box with a specified message, 
along with an OK and a Cancel button.
A confirm box is often used if you want the user to verify or 
accept something.
*/

if(confirm(' Are your sure you are liable for your actions? '))
{
    console.log('Okay great success!!');
}
else
{
    console.log(' Phew, next time ');
}

/* 3) OuterWidth and OuterHeight
TheouterHeight property returns the outer height of the browser window,
 including all interface elements (like toolbars/scrollbars)
*/
let val;

val = window.outerHeight;
console.log(val);
val = window.outerWidth;
console.log(val);

/* 4) InnerWidth and InnerWidth
The innerWidth property returns the width of a window's content area.
*/
val = window.innerHeight;
console.log(val);
val = window.innerWidth;
console.log(val);
console.log('\n');
console.log('\n');
console.log('\n');
/* 5) Scroll Points
It determines width and height of scroll bar
*/
val = window.scrollX;
console.log(val);
val = window.scrollY;
console.log(val);

/* 6) Redirect
To redirect it to some other website
*/
window.location.href = 'http://google.com';

/* 7) Reload
To constantly reload a website
*/
window.location.reload();

/* 8) history.go()
To visit the previously visited websites
-1 -> last visited
-2 -> 2nd last visited */
window.history.go(-1);

/* 9) History length
To see how many websites are behind
*/
val = window.history.length;
console.log(val);   
