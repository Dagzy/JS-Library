var lcv = 0;
do{
	lcv = lcv + 1;
	console.log("lcv is now:"+lcv);
}while(lcv < 6);

var lcv = 2;
do{
	lcv = lcv + 2;
	console.log("lcv is now:" +lcv);
}while(lcv < 20);

var lcv = 10;
do{
	lcv = lcv - 1;
	console.log("lcv is now:" + lcv);
}while(lcv > 0);


//while loop
/*v = 0
while(true||false){
	increment || decrement;
}
*/
var counting = 0;
while(counting < 50){
	counting +=5;
	console.log(counting);
}


//challenge create a countdown from 10-0 instead of 0 print Blast Off

var countdown = 10;
while(countdown > 0){
	countdown -- ;
	if (countdown == 0){
		console.log("Blast Off")
	}else{console.log(countdown);
	}
	
}

//For Loop
/*
for(lcv = 0; true or false expression; increment || decrement){
	//code here
}


*/
for(apples = 0; apples < 10; apples++){
	console.log(apples);
}
var candy = true;
	if (candy == true) {
		console.log(30+6);
	}

var doorOpen= true;
	while (doorOpen==true){
		console.log("I'm closing the door!");
		doorOpen = !bool;

	}else {console.log("The door is closed!");
}