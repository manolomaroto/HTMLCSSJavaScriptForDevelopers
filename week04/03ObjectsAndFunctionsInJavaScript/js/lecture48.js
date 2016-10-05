/*function test(){
	console.log(this);
	this.name = "Manolo";
}

test();
console.log(window.name);*/

//function constructors
function Circle(radius){
	this.radius = radius;
	/*ponemos esto en la propiedad prototype para que cada vez que 
	lo creeemos no haga falta ejecutar este código
	this.getArea = function(){
		return Math.PI * Math.pow(this.radius, 2);
	};*/
}

Circle.prototype.getArea = function(){
	return Math.PI * Math.pow(this.radius, 2);
}

var myCircle = new Circle(10);
console.log(myCircle);

