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

var returnSelection = function (player, choice) {

    var graphicBox = document.getElementById(player);

    if (choice == 1) {
        // display rock in div
        graphicBox.innerHTML = '<i class="fas fa-hand-rock fa-10x"></i>';         
        return "rock";
    } else if (choice == 2) {
        // display paper in div
        graphicBox.innerHTML = '<i class="fas fa-hand-paper fa-10x"></i>';
        return "paper";
    } else if (choice == 3) {
        // display scissors in div
        graphicBox.innerHTML = '<i class="fas fa-hand-scissors fa-10x"></i>';
        return "scissors";
    } else {
        reset();
    }

}

var playerSelect = function () {

    var choice = document.querySelector('input[name="playerChoice"]:checked').value;
    return returnSelection("playerChoice", choice);

}

var machineSelect = function () {

    var choice = Math.floor((Math.random() * 3) + 1);
    return returnSelection("machineChoice", choice);

}

var evalMatch = function () {

}

var logMatch = function () {

}

var reset = function () {

}