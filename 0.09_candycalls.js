var fs = require('fs');




/*
	request = prepare_the_request();
	send_request_asynchronously (request, function(response){
	display(response);
	});


*/
function removeR(arr){
	arr.forEach(function(i, a)
	{
		console.log(a);

	//	a.replace(/[\n\r]+/g, '');
	});
	return arr
};

//getCandy([path], callback)
function getCandy(filepath, done){
	//telling file system (noted as fs.) to read a file (readFile) that the user of the function passes in
	//as an argument. Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, candy){
		// error handling
		if (err) return done(err);
		
		fs.readFile('0.09_candy.dictionary', function(err, dict){
		//error handling
			if (err) return done(err);

			compareCandy(candy, dict)
		//do some logic here
		});
	});
	var compareCandy = function(candy, dict){
		//turn the items from these files into arrays then split them
		dict = dict.toString().split('\n');
		var foo = removeR(dict);
		candy = candy.toString().split('\n').filter(function(candy){
			//going over the dictionary, then it's checking if the candy are located inside of the dictionary. 
			//If it is, then the function is returning that value.
			console.log(foo);
			return foo.indexOf(candy.replace(/[\n\r]+/g, '')) !== -1
		})
		done(candy);
	};
};
// variable way of writing function


getCandy('0.09_candy.txt', function(candy){

	console.log(candy);	
});

//Another example of callback


console.log("Hey tell me your name?");
var printNameInThreeSeconds = setTimeout(function(){
	console.log("Bryce");

}, 3000);
console.log("Nice to meet you!");
//Running Asynchronously! How cool :D
