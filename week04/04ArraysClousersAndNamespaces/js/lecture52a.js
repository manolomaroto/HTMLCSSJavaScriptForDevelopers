(function(window){

	var manoloGreeter = {};

	manoloGreeter.name = "Manolo";
	var greeting = "Hello ";
	manoloGreeter.sayHello = function(){
	console.log(greeting + manoloGreeter.name);
	}

	window.manoloGreeter = manoloGreeter;

})(window);


