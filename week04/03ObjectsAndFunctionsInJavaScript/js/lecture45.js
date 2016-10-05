//object creation
/*var company = new Object();
company.name = "Twitter";
company.ceo = new Object();
company.ceo.firstname = "Luis";
company.ceo.color="blue";

console.log(company);
console.log("Company CEO name is: " + company.ceo.firstname);

console.log(company["name"]);
company["stock of company"] = 121;
console.log("Stock of company " + company["stock of company"]);*/

//Better way: object literal

var facebook = {
	name: "Facebook",
	ceo: {
		firstname: "Fran",
		color: "Blue"
	},
	"stock of company": 212
};

console.log(facebook);