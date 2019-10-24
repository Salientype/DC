// a for loop that iterates over 20 numbers
// if number at current i is divisible by both 2 and 3, console.log( "FizzBuzz");
// if num at current i is only divisible by 2, console.log ("Fizz");
// if mum at current i is only divisible by 3, console.log ("Buzz");

for ( var i = 1; i < 20; i++ ) {

	if ( i % 2 == 0 && i % 3 == 0) {

		console.log("FizzBuzz");

	} else if( i % 3 == 0 ) {

		console.log( "Fizz" );
	
	} else if( i % 2 == 0 ) {

		console.log( "Buzz" );

	}

}
