// find duplicate values in array

var items = [ "Cat", "Dog", "Ferret", "Alien", "Dog", "Bird", "Ferret" ];


for ( var i = 0; i < items.length; i++ ) {

	for ( j = 0; j < items.length; j++ ) {
		
		if ( i != j && items[i] == items[j] ) {

			console.log( "found a match! " + items[j] );
		
		}	

	}

}
