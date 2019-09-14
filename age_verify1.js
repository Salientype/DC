// function should test if they are old enough to drive, which is 16

function checkDrvAge( age ) {

	if ( age >= 16 ) {		
		return true;
	} else {
		return false;
	}
}


// function should test if they are old enough to drink, which is 21

function checkDrkAge( age ) {

	if ( age >= 21 ) {
		return true;
	} else {
		return false;
	}
}


// function should test if they are old enough to rent a car, which is 25

function checkRntAge( age ) {

	if ( age >= 25 ) {
		return true;
	} else {
		return false;
	}
}


// function should test if they can play in the McDonalds ball pit, in which they have to be UNDER 10 years old

function checkBalPit( age ) {

	if ( age < 10 ) {
		return true;
	} else {
		return false;
	}
}

var sarahAge = 32;
var bobAge = 19;
var henryAge = 22;
var katieAge = 9;


// run checks on all conitions (pass in name and age per person)

function checkAgeCond( name, age ) {
	
	// check driving age of person	

	if ( checkDrvAge( age ) == true ) {
		console.log( name + " can drive!" );
	} else {
		console.log( name + " cannot drive! ");
	}

	// check drinking age

	if ( checkDrkAge( age ) == true ) {
		console.log( name + " can drink!");
	} else {
		console.log( name + " cannot drink!");
	}

	// check car rental age

	if ( checkRntAge( age ) == true) {
		console.log( name + " can rent a car!");
	} else {
		console.log( name + " cannot rent a car!");
	}

	// check ball pit age

	if ( checkBalPit( age ) == true) {
		console.log( name + " can enter the ball pit!");
	} else {
		console.log( name + " is too old for the ballpit!");
	}
	
}

console.log( checkAgeCond ("Sarah", sarahAge) );
console.log( checkAgeCond ("Bob", bobAge) );
console.log( checkAgeCond ("Henry", henryAge) );
console.log( checkAgeCond ("Katie", katieAge) );

