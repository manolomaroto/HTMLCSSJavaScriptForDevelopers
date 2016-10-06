//Array
/*var array = new Array();
array[0] = "Manolo";
array[1] = 2;
array[2] = function(name){
	console.log("Hello " + name);
};
array[3] = {course: " HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);
*/

/*var names = ["Manolo", "Jose", "Juan"];
console.log(names);

for (var i = 0; i < names.length; i++){
	console.log("Hello " + names[i]);
}

names[100] = "Jaime";
for (var i = 0; i < names.length; i++){
	console.log("Hello " + names[i]);
}*/

var names2 = ["Manolo","Juan","Pepe"];

/*var myObj = {
	name: "Manolo",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};

for (var prop in myObj){
	console.log(prop + ": " + myObj[prop]);
}*/

for (var name in names2){
	console.log("Hello " + names2[name]);
}

names2.greeting = "Hi";

for (var name in names2){
	console.log("Hello " + names2[name]);
}

