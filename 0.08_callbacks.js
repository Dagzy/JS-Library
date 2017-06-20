var fs = require('fs');




/*
	request = prepare_the_request();
	send_request_asynchronously (request, function(response){
	display(response);
	});


*/

function getBulls(filepath, done){
	//telling file system (noted as fs.) to read a file (readFile) that the user of the function passes in
	//as an argument. Then we are creating a callback to handle that case.
	fs.readFile(filepath, function(err, bulls){
		// error handling
		if (err) return done(err);
		
		fs.readFile('0.08_bulls.dictionary', function(err, dict){
		//error handling
			if (err) return done(err);

			compareBulls(bulls, dict)
		//do some logic here
		});
	});
	var compareBulls = function(bulls, dict){
		//turn the items from these files into arrays then split them
		dict = dict.toString().split('\n');
		bulls = bulls.toString().split('\n').filter(function(bulls){
			//going over the dictionary, then it's checking if the bulls are located inside of the dictionary. 
			//If it is, then the function is returning that value.
			return dict.indexOf(bulls) !== -1
		})
		done(bulls);
	};
};
// variable way of writing function


getBulls('0.08_bulls.txt', function(bulls){

	console.log(bulls);	
});