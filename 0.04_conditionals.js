//Conditionals

/*
Boolean Operators
	> Greater Than
	< Less Than
	>= Greater or Equal
	<= Less than or Equal
	== Equal to
	=== Strictly equal to
	! Not
	!= Not Equal to

*/
console.log(1 > 3);
console.log(10 != 10); //false
var name = "Quincy";
console.log(name == "quincy"); //false

console.log(name = "Quincy");//Problems with one equal sign. Don't do this.

console.log(6 == "6"); //true

console.log(6 === "6"); //false

//"If" statements. If this happens, then do this.
/*
if (boolean expression) {
	//some code goes here console.log or whatever
}
*/
if(name = "quincy") {
	console.log("Capitalize that first letter!");
}

if(242 % 2 === 0){
	console.log("This number is even.");
}
var userName = "admi";
var password = "test123";

if (userName == "admin"){
	console.log("You have been granted access!")}
/*Chaining boolean expressions
	&& and
	|| or
*/

if (userName == "admin" && password == "test13"){
	console.log("You got in!");
}else{
	console.log("Incorrect Details");
}
//Challenge: Check if the username is the wrong value, or the password.

if(userName == "admin"){
	console.log("the password is incorrect");
}else{
	console.log("the username is incorrect");
}