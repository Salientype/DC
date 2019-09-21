// Step 1) Points Calculator
//
// Design a away for calculating the amount of points the waiter has earned. Each of the following activities will score the waiter/waitress a 1 point each:
// Did the waiter greet you?
// Did they bring bread/water to start?
// They check on drink refills?
// Did they check if the food was ok?
// Were they prompt in getting the check?


var waiterGreet = "yes";
var bringBread = "no";
var checkRefill = "no";
var foodOk = "yes";
var promptCheck = "no";

totalPoints = 0;

function addUpPoints( waiterGreet=waiterGreet, bringBread=bringBread, checkRefill=checkRefill, foodOk=foodOk, promptCheck=promptCheck) {

	if ( waiterGreet == "yes" ) {
	     
		totalPoints++;
	}
	
	if ( bringBread == "yes" ) {

		totalPoints++;
	}

	if ( checkRefill == "yes" ) {

		totalPoints++;

	if ( foodOk == "yes" ) {

		totalPoints++;

	if ( promptCheck = "yes" ) {

		totalPoints++;

	}

}

addUpPoints();

console.log( "total points for waiter service " + totalPonits);


/// Part 2


var bill = 120;

var tip = 0;

var tipPercent = function ( totalPoints=totalPoints, bill=bill ) {

	if ( totalPoints == 0 ) {
		
		tip = .01 * bill;
	
	} else if( totalPoints == 1 ) {

		tip = .02 * bill;	
	
	} else if( totalPoints == 2 ) {
	
		tip = .04 * bill; 	

	} else if( totalPoints == 3 ) {

		tip = .07 * bill;
	
	} else if( totalPoints == 4 ) {

		tip = .10 * bill;
	
	} else if( totalPoints == 5 ) {

		tip = .15 * bill;
	}

}

console.log("you should tip waiter: " + tip);
console.log("your total bill should be: " +  ( bill + tip );

