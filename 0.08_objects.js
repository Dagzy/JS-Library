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


//object constructors
var paul = new Object;
//object constructor template
paul.name = "Paul O'Connor";
console.log(paul);
paul.vocation = "Curriculum Master";
paul.hobbies = ["rocking out code", "listening to good music", "baking banana muffins"];

function Hotel(name, rooms, booked){
	this.name = name;
	this.room = rooms;
	this.booked = booked;
	this.checkAvailability = function (){
		return "There are " + (this.room - this.booked) + " rooms left."
	};
};

var jw = new Hotel("JW Marriott", 300, 250);
var jwExp = new Hotel("Mini J'Dubs", 100, 50);
var alohaHotels = new Hotel("Aloha", 125, 50);

console.log(jwExp.checkAvailability());
//adding objects to an array
//var hotels = ""

var adult = {
	hair 		: "Brown",
	eyes 		: "Blue",
	skin		: "Fair",
	getHair		: function(){
					return (this.hair);
	},
	getEyes		: function(){
					return(this.eyes);
	},
	getSkin		: function(){
					return(this.skin);
	},

	}


var child = {
	hair : adult.getHair(),
	eyes : adult.getEyes(),
	skin : adult.getSkin(),
	height : "150 cm",
}

console.log(child);

var child2 = adult
child2["height"] = "5ft"

console.log(child2);
/*	inherit		: function(){
		this.hair = adult.getHair();
		this.eyes = adult.getEyes();
		this.skin = adult.getSkin();
*/

/*var person1 = {
	name 			: "Quincy",
	age				: 34,
	favoriteShows	: ["Adventure Time", "Family Guy", "Downton Abbey", "Rick And Morty", "Jeopardy"],
	agePlusOne		: function(){
		return (this.age + 1);
	},
};
var person2 = {
	name 			: "Heather",
	age				: 24,
	favoriteShows	: ["Orange Is The New Black", "Rick And Morty", "My Little Pony", "Adventure Time", "Annoying Orange"],

};
var person3 = {
	name 			: "Sean",
	age 			: 20,
	favoriteShows 	: ["Rick And Morty", "Adventure Time", "Twitch", "Candyland", "Hello Kitty"],
}
console.log(person1.agePlusOne());
*/
function people (name, age, favoriteShows){
	this.name = name;
	this.age = age;
	this.favoriteShows = favoriteShows;
};

var quincy = new people ("Quincy", 34, ["Adventure Time", "Family Guy", "Downton Abbey", "Rick And Morty", "Jeopardy"]);
var heather = new people ("Heather", 24, ["Orange Is The New Black", "Rick And Morty", "Hello Kitty", "Adventure Time", "Annoying Orange"]);
var sean = new people ("Sean", 20, ["Rick And Morty", "Adventure Time", "Twitch", "Candyland", "Hello Kitty"]);

//console.log(quincy);

function commonShows (){
	for (var i in quincy.favoriteShows){
		for (var j in heather.favoriteShows){
			if (quincy.favoriteShows[i] == heather.favoriteShows[j]){
				console.log(favoriteShows[i]);
			};
		};
	};
};
		
commonShows();	

