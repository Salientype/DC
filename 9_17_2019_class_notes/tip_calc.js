/// Part 1 ///


// Design a away for calculating the amount of points the waiter has earned. Each of the following activities will score the waiter/waitress a 1 point each:
// Did the waiter greet you?
// Did they bring bread/water to start?
// They check on drink refills?
// Did they check if the food was ok?
// Were they prompt in getting the check?


var waiterGreet = "yes";
var bringBread = "yes";
var checkRefill = "yes";
var foodOk = "no";
var promptCheck = "yes";

var totalPoints = 0;

function addUpPoints( waiterGreet, bringBread, checkRefill, foodOk, promptCheck ) {

	if( waiterGreet == "yes" ) {

		totalPoints++;
	}

	if( bringBread == "yes" ) {

		totalPoints++;
	}

	if( checkRefill == "yes" ) {

		totalPoints++;
	}

	if( foodOk == "yes" ) {

		totalPoints++;
	}

	if( promptCheck == "yes" ) {

		totalPoints++;
	}

}

addUpPoints( waiterGreet, bringBread, checkRefill, foodOk, promptCheck );

console.log( "total points for waiter service: " + totalPoints );


/// Part 2 ///


// Calculate tip and total bill


var bill = 122.25;

var tip = 0;

var tipPercent = function ( totalPoints, bill ) {

 	if( totalPoints == 0 ) {

		tip = 0.01 * bill;

	} else if( totalPoints == 1 ) {

		tip = 0.02 * bill;

	} else if( totalPoints == 2 ) {

		tip = 0.04 * bill;

	} else if( totalPoints == 3 ) {

		tip = 0.07 * bill;

	} else if( totalPoints == 4 ) {

		tip = 0.10 * bill;

	} else if( totalPoints == 5 ) {

		tip = 0.15 * bill;
	}

}


tipPercent( totalPoints, bill );

console.log( "you should tip waiter: " + tip.toFixed( 2 ) );
console.log( "your total bill should be: " +  ( bill + tip ).toFixed( 2 ) );
