var empObject = {};

var johnQualls = {
//Reflection of key value pairs.
//  key  :     value
	name : "John Qualls",
	age  : 39,
	hairColor : "Brown Hair"
};

console.log(johnQualls);
console.log(johnQualls.name);
console.log(johnQualls.name + " is of the age: " + + johnQualls.age);
console.log(johnQualls.height); //undefined height
johnQualls.height= "6ft";
console.log(johnQualls.height);

//Create an animal object with the properties of type, weight, commonINIndiana, and habitat

var snake = {
	type 			: "Snake",
	weight 			: "5 lbs",
	commonINIndiana : true,
	habitat			: "grass" 
};
var bear = {
	type			: "Bear",
	weight			: "400 lbs",
	commonINIndiana : false,
	habitat			: "forest"
};

snake["nickName"]="Kaa";

console.log(snake, bear["habitat"]);

//reassigning values
snake.type = "rattlesnake";
console.log(snake.type);

console.log(snake.nickName);
//change the weight of the animal property using square bracket notation
//then add a new array property of moviesAboutMe

bear["weight"] = "600 lbs";
console.log(bear.weight);

bear.moviesAboutMe = ["Rocky and Bullwinkle", "Monty Python", "National Lampoon's Vacation"];

console.log(Object.keys(bear));

//Objects with methods built into them! -- FUNCTIONS AND METHODS ARE INTERCHANGEABLE

/*var theBryceIsRight = {
	name 			: "Bryce Greene",
	age				:  55,
	vocation		: "TA",
	email			: "thebryceisright@gmail.com",
	greeting		: function(){
						console.log("Greetings, Earthlings." + " I am " + this.name + "." + " I am here to learn you.");
	}
};*/
//theBryceIsRight.greeting();

//create a method for contactMe and include the email property in a return statement

var theBryceIsRight = {
	name 			: "Bryce Greene",
	age				:  55,
	vocation		: "TA",
	email			: "thebryceisright@gmail.com",
	greeting		: function(){
						return "Greetings, Earthlings." + " I am " + this.name + "." + " I am here to learn you.";
					},
	contactMe		: function(){
						return("I can be contacted at" + this.email);
	},
	doBoth			: function(){
						return(this.greeting());
						return(this.contactMe());
	}
};


//theBryceIsRight.doBoth(console.log(theBryceIsRight.vocation));

console.log(theBryceIsRight.doBoth() + " " + theBryceIsRight.vocation);