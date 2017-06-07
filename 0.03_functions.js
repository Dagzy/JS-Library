//Functions

/*

	function Name_of_Function(){
	
	}*/

//Declaring the function
	function greeting(){
		console.log("Good morning, Vietnam!");
//Calling the function	
}
	greeting();
	//HOISTING!

	//Challenge: Declare a function that prints the weather to the console.
	/*function currentweather(){
		console.log("It's sunny yall");
	}
	currentweather();

	function welcome(name){

		var name;
		console.log("Hi" + name);
	}
	welcome(prompt("What's your name?" , Name));
	//Using functions with parameters!
*/
	function shoes(brand){
		console.log("Man those " + brand + " are on fleek!");
		console.log("Nah, rock the Docs, not the Crocs.");
	}
	shoes("Crocs");

	function add(num1, num2){
		console.log(num1 + num2);
	}
	add(34 , 66);

	//VOID FUNCTION RETURNS NO DATA

	//functions that return data

	function sum(num1 , num2){
		return num1 + num2;
	}
	//console.log(sum(23, 17)); //prints to console, of course

	var answerToQuestion = sum(23, 17);

	function subtract(num1 , num2){
		return num1 - num2;
	}

	function divide(num1, num2){
		return num1 / num2;
	}

	function multiply(num1 , num2){
		return num1 * num2;
	}
	function modul(num1 , num2){
		return num1 % num2;
	}

	console.log(multiply(3 , 4));
	console.log(divide(12 , 4));
	console.log(subtract(12 , 4));

	var numbersMultiplied = multiply(3 , 4);
	console.log(numbersMultiplied + "These be the numbahs");
	var remainderMod = modul(50 , 2);
	//console.log(remainderMod + " is the remainder of" num1 + " and " + num2);

	function phrase(verb , noun){
		return verb + noun;
	}
	console.log(phrase("jump" , "cows"));

	function bills(mortgage , internet , electricity){
		return mortgage + internet + electricity;
	}
console.log("The total charges for this month are: $" + bills(350, 150, 100));
	

	function totalWithTax(each , quantity){
		var tax = .07
		var totalWithTax = each * quantity + each * quantity * tax.toFixed (2);
		console.log("For" + quantity + "sodas, your total including tax is: " + totalWithTax);
	}
	totalWithTax(.99 , 100);