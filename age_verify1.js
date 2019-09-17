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

var arrayOfResults = [];


// run checks on all conditions (pass in name and age per person)

function checkAgeCond( name, age ) {
	
	// check driving age of person	

	if ( checkDrvAge( age ) == true ) {
		arrayOfResults.push( name + " can drive!" );
	} else {
		arrayOfResults.push( name + " cannot drive! " );
	}

	// check drinking age

	if ( checkDrkAge( age ) == true ) {
		arrayOfResults.push( name + " can drink!" );
	} else {
		arrayOfResults.push( name + " cannot drink!" );
	}

	// check car rental age

	if ( checkRntAge( age ) == true ) {
		arrayOfResults.push( name + " can rent a car!" );
	} else {
		arrayOfResults.push( name + " cannot rent a car!" );
	}

	// check ball pit age

	if ( checkBalPit( age ) == true ) {
		arrayOfResults.push( name + " can enter the ball pit!" );
	} else {
		arrayOfResults.push( name + " is too old for the ballpit!" );
	}
	
}

checkAgeCond ( "Sarah", sarahAge );
checkAgeCond ( "Bob", bobAge );
checkAgeCond ( "Henry", henryAge );
checkAgeCond ( "Katie", katieAge );

console.log( arrayOfResults );

