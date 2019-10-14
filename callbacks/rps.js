var countdown = function () {

    var num = 4;
    var timer = document.getElementById("countdown");
    var setTimer = setInterval(function () {
        timer.innerHTML = num;
        num--;
        if (num == -1) {
            clearInterval(setTimer);
            startGame();
        }
    }, 1000);

}


var startGame = function () {

    console.log(playerSelect());
    console.log(machineSelect());

}

var returnSelection = function (choice) {

    if (choice == 1) {
        // display rock in div
        return "rock";
    } else if (choice == 2) {
        // display rock in div
        return "paper";
    } else if (choice == 3) {
        // display rock in div
        return "scissors";
    } else {
        reset();
    }

}

var playerSelect = function () {

    var choice = document.querySelector('input[name="playerChoice"]:checked').value;
    return returnSelection(choice);

}

var machineSelect = function () {

    var choice = Math.floor((Math.random() * 3) + 1);
    return returnSelection(choice);

}

var evalMatch = function () {

}

var logMatch = function () {

}

var reset = function () {

}