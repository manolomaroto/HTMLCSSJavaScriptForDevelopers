//console.log(document.getElementById("title"));

function sayHello(){
	var name = 
	document.getElementById("name").value;
	var message = "<h2>Hello " + name + "!</h2>";
	//document.getElementById("content").textContent = message;
	document.getElementById("content").innerHTML = message;

	if(name === "student"){
		var title = document.querySelector("#title").textContent;
		title += " & lovin it";
		document.querySelector("#title").textContent = title;
	}
		
}