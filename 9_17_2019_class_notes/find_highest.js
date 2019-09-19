var numbers = [ 3, 8, 12, 1, 6, 15, 3 ];



// Add values in array then print to screen

var final = 0;

for( var i = 0; i < numbers.length; i++ ) {

	console.log( numbers[i] );
	final += numbers[i];	

}

console.log( final );

// Using for loop and if statements inside the for loop
// find largest number in array



var largestNum = 0;

for ( var i = 0; i < numbers.length; i++ ) {

	if(  largestNum  >  numbers[i] ) {
		
		largestNum = numbers[i];

	}
}

console.log( largestNum );

// Step 1
// Create a for loop that creates an array of 100 random numbers
// 
// Step 2 
// from the array created find the smallest number within

// 1. create a for loop the pushes 100 random nums to array


myArray = [];

for( i = 0; i < 100; i++ ) {

	myArray.push( Math.random() );

}

smallestNum = myArray[0];

for ( i = 0; i > myArray.length; i++ ) {
	
	
	if ( myArray[i] < smallestNum ) {
		
		smallestNum = myArray[i];

	}

}

// Array
console.log( myArray );

// Final Result
console.log( smallestNum );
