// Write a function "coolCities" which takes an array of city Objects
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.

var cities = [
    
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 85.0 },
    { name: 'Ann Arbor', temperature: 52.0 },
    { name: 'Miami', temperature: 102.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York City', temperature: 80.0 },
    { name: 'Portland', temperature: 60.0 }
  
];



function coolCities ( cities ) {

    var niceAndCool = [];

    for ( i = 0; i < cities.length; i++ ) {

        if ( cities[ i ].temperature < 70 ) {

            niceAndCool.push( cities[ i ].name );

        }

    }

    return niceAndCool;

}



console.log( coolCities( cities ) );