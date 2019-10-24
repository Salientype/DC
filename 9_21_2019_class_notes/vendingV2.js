/*

*Vending Machine Group Exercise*

Vending Machines give us the ability to buy food and drink anywhere we go! You are hired as a contractor to write a vending machine application for a new line of vending machines to be released.

The vending machine will have the following items and prices:
- Snickers  $1.25
- Popcorn   $1.00
- Chewing Gum $0.25
- Nuts $0.50
- Cookies $1.70
- Cup Noodles $2.25

The vending machine can accept the following currency:
- Nickel $0.05
- Dime $0.10
- Quarter $.25
- Dollar $1.00

When a person is buying from the vending machine, the following happen:
-- [DONE] A list of items is shown to them with the prices
--  [ DONE }They insert money into the machine based on the allowed currency above
-- They then select their item and the following can happen:
-- If the amount entered is less than what the item cost, an error message is produced stating they have not entered enough money
-- If the amount is equal to or above the amount of the item, they should get their item and left over change, if any
-- If they do not choose an item, all the money can be returned to them

Your task is to create a simulation in which 5 different buyers attempt to buy an item from the vending machine. Remember everything we have learned in class to use are your disposal:
- If Statements
- For Loops
- Arrays
- Objects
- Functions

*/

var snacks = [
    { name: "Snickers", price: 1.25 },
    { name: "Popcorn", price: 1.00 },
    { name: "Chewing Gum", price: 0.30 },
    { name: "Nuts", price: 0.50 },
    { name: "Cookies", price: 1.70 },
    { name: "Cup Noodles", price: 2.25 }
];

var money = {
    nickle: 0.05,
    dime: 0.10,
    quarter: 0.25,
    dollar: 1.00
};

var userData = [
    { name: "Joe", money: [money.dollar], item: "Nuts" },
    { name: "Alice", money: [money.quarter, money.quarter, money.quarter, money.dime, money.dime, money.dime], item: "Cookies" },
    { name: "Jane", money: [money.dollar, money.dollar, money.dollar], item: "Cup Noodles" },
    { name: "Fred", money: [money.quarter, money.dime], item: "Chewing Gum" },
    { name: "Henry", money: [money.dollar, money.quarter, money.quarter], item: "Snickers" },
    { name: "Frodo", money: [money.dollar], item: "Beer" }
];

// Display Snacks
function displaySnacks(snacks) {
    for (var i = 0; i < snacks.length; i++) {
        console.log(snacks[i].name + ": $" + (snacks[i].price).toFixed(2));
    }
}

// Count money Inserted
function countMoney(moneyArray) {
    // loop through money array to add up coins
    var moneyInserted = 0;
    for (var i = 0; i < moneyArray.length; i++) {
        moneyInserted += moneyArray[i];
    }
    return moneyInserted;
}

function vendItems(userData) {
    // loop through each user's data in userData array
    for (var i = 0; i < userData.length; i++) {
        var noSnackFound = true;
        var snackChosen = null;
        var user = userData[i].name;
        // loop through list of snacks to check for matching string in userData.item
        for (var j = 0; j < snacks.length; j++) {
            if (snacks[j].name == userData[i].item) {
                noSnackFound = false;
                snackChosen = userData[i].item;
                var price = snacks[j].price;
                var moneyInserted = countMoney(userData[i].money);
                // print error message if not enough money inserted
                if (moneyInserted < price) {
                    console.log(user + " has not inserted enough money for " + snackChosen + ".");
                }
                // print item and left over change according to money inserted
                if (moneyInserted >= price) {
                    console.log("Thanks " + user + ", for your purchase of " + snackChosen + ". Your change is: $" + (moneyInserted - price).toFixed(2));
                }
            }
        }
        if (snackChosen == null || noSnackFound == true) {
            // return change
            var refund = countMoney(userData[i].money);
            console.log("No valid item was selected, $" + (refund).toFixed(2) + " has been returned to " + user + ".");
        }
    }
}

console.log("#############################");
displaySnacks(snacks);
console.log("#############################");
vendItems(userData);