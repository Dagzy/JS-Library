/*
iffe = immediately invoked function expression
*/

(function printNum(){
	var a = 5;
	console.log(a);
})();

//create an iffe that counts from 1-10

(function countToTen(){
	for(i=1;i<11;i++){console.log(i)}; 
})();
//
//
//

var smartCar = {};
var smartCarMPG = function(totalMiles, totalGallons){
	return{
		calculateMpg : function(){
			console.log("MPG: ");
			return totalMiles / totalGallons;
		}
	};
};

smartCar.mpg = smartCarMPG(100, 15);
console.log(smartCar.mpg);
console.log(smartCar.mpg.calculateMpg());

