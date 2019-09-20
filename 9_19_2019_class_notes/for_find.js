// array of items
// create a function with 2 params
// first param will be an array to search
// second param will be a value to find

var items = [ "cat", "dog", "snake", "ferret", "big foot" ];

var findItem = "big foot";

function searchForTerm ( array, term ) {

	var termFound = array[0];
	
	for ( i = 0; term < array.length; i++ ) {
		
		if ( array[i] == term ) {

			return true;
			console.log( termFound + "! was found.");
		}
			 
	} 

}

searchForTerm( items, findItem );


