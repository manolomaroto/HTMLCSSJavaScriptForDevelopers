var message = "in global";
console.log("Global: message = " + message);

var a = function(){
	var message = "iside a";
	console.log("a: message = " + message);

	function b(){
	console.log("b: message = " + message);
	}

	b();
}



a();