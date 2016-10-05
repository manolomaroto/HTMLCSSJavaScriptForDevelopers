//Functions are First-Class data
//Funcions are objects
function multiply(x,y){
	return x*y;
}

//console.log(multiply(5,3));
multiply.version = "v.1.0.0";
console.log(multiply.toString());
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier){
	var func = function(x){
		return multiplier * x;
	};
	return func;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(2));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing functions as arguments
function doOperationOn(x, operation){
	return operation(x);
}

console.log(doOperationOn(5,multiplyBy3));
console.log(doOperationOn(10,doubleAll));
