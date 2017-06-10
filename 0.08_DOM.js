function Hotel(name, rooms, booked){
	this.name = name;
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function(){
		return this.rooms - this.booked;
	};
};

var rri = new Hotel("Red Roof Inn", 250, 230);
var alex = new Hotel("The Alexander", 500, 150);



var hotels = [rri, alex];

function showAllHotelsInfo(){
	for (var h in hotels){
		var hotelName = hotels[h].name
		var hotelHtmlText = document.createTextNode(hotelName);
		var listItem = document.createElement("li");
		listItem.appendChild(hotelHtmlText);
		document.getElementById("Hotels").appendChild(listItem);
		//This is some crazy shiz right here...-It makes elements within the HTML and populates them using objects created earlier in the document.
	};
};
showAllHotelsInfo();
//This command simply calls the function we built on line 17 which is then executed, displaying the list of hotels that was created within the function
//The empty parens perform the function without parameters.