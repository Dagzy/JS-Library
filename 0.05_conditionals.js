var colts = 3
var patriots = 1
var score = colts + patriots
if (colts > patriots){
	console.log("Whoooo, football");
}else if(colts == 2){
	console.log("Meh, football");
}else if(patriots > colts){
	console.log("Foosball is the devil!");
}else if(score == 0){
	console.log("The lockout caused this!");
}

var num = 1
console.log(num);
//This is a FOR loop.
for (i=1; i <= 100; i++) {
	if(i % 3 == 0 && i % 5 == 0){
		console.log("FizzBuzz");
	}else if (i % 3 == 0){
		console.log("Fizz");
	}else if (i % 5 == 0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}

// Use WHILE here
var num = 1;
while(num<101){
	if(num % 3 == 0 && num % 5 == 0){
	console.log("FizzBuzz");
}else if(num % 3 == 0){
	console.log("Fizz");
}else if(num % 5 == 0){
	console.log("Buzz");
}else{
	console.log(num);
}num + = 1;
}
