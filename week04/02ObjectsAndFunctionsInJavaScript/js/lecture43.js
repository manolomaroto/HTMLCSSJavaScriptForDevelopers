
/*** string concatenations **
var string = "hello";
string += " world";
console.log(string + "!");*/

/* Regular math operators 
console.log((5+4)/3);
console.log(undefined/5);
function test1(a){
	console.log(a / 5);
}
test1(0);
*/

/* Equality 
var x=4,y=4;
if(x==y){
	console.log("x is equal to y");
}
x = '4';

if(x==y){
	console.log(" x = '4' is equal to y");
}


if (x === y){
	console.log("Strict: x='4' is equal to y=4");
}else{
	console.log("Strict: x='4' is not equal to y=4");
}


// if statement (all false)
if (false || null || undefined || "" || 0 || NaN){
	console.log("This line won't ever execute");
}else{
	console.log("All false");
}

/* if statements (all true) 
if(true && "hello" && 1 && -1 && "false"){
	console.log("All true");
}
*/
// best practices for {} style
// Curly brace on the same or next line...
//Is it just a style?
/*
function a()
{
	return
	{
		name:"Manolo"
	};
}
function b(){
	return{
		name:"Manolo"
	};
}

console.log(a());
console.log(b());
*/

/* for loop */
var sum = 0;
for (var i = 0; i<10; i++){
	console.log(i);
	sum = sum +i;
}
console.log(sum);