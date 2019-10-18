/**
 * Using the documentation found here:
 * 
 * https://www.w3schools.com/jsref/jsref_foreach.asp
 * 
 * Iterate through the arrayin a foreach each loop,
 * and console log the pokemen name and attack power as such:
 * "Pokemen Pikachu has an attack power of 500"
 */
var pokemon = [
    {
        name : "Pickachu",
        attackPower: 500
    },
    {
        name : "Charzard",
        attackPower: 1500
    },
    {
        name : "Kakkarot",
        attackPower: 9000
    }    
];



function printElement(array) {
    console.log("Pokemen " + array.name + "has an attack power of " + array.attackPower);
}

pokemon.forEach(printElement);