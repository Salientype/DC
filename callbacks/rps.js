var countdown = function () {
    
    clearIconColors();
    
    var num = 4;
    var timer = document.getElementById("countdown");
    var setTimer = setInterval(function () {
        timer.innerHTML = num;
        num--;
        if (num == -1) {
            clearInterval(setTimer);
            startGame();
            timer.innerHTML = "";
        }
    }, 1000);

}


var startGame = function () {

    var playerChoice = playerSelect();
    var machineChoice = machineSelect();
    evalMatch(playerChoice, machineChoice);

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

var evalMatch = function (playerChoice, machineChoice) {
    
    var playerBox = document.getElementById("playerChoice");
    var machineBox = document.getElementById("machineChoice");
    
    if (playerChoice == "rock" && machineChoice == "paper") {
        console.log("machine wins!");
        clearIconColors();
        machineBox.classList.add("text-success");
        playerBox.classList.add("text-danger");
    } else if (playerChoice == "paper" && machineChoice == "rock") {
        console.log("human wins!");
        clearIconColors();
        machineBox.classList.add("text-danger");
        playerBox.classList.add("text-success");
    } else if (playerChoice == "rock" && machineChoice == "scissors") { 
        console.log("human wins!");
        clearIconColors();
        machineBox.classList.add("text-danger");
        playerBox.classList.add("text-success");
    } else if (playerChoice == "scissors" && machineChoice == "rock") {
        console.log("machine wins!");
        clearIconColors();
        machineBox.classList.add("text-success");
        playerBox.classList.add("text-danger");
    } else if (playerChoice == "scissors" && machineChoice == "paper") {
        console.log("human wins!");
        clearIconColors();
        machineBox.classList.add("text-danger");
        playerBox.classList.add("text-success");
    } else if (playerChoice == "paper" && machineChoice == "scissors") {
        console.log("machine wins!");
        clearIconColors();
        machineBox.classList.add("text-success");
        playerBox.classList.add("text-danger");
    } else if (playerChoice == machineChoice) {
        console.log("Tied Match!");
        clearIconColors();
        machineBox.classList.add("text-warning");
        playerBox.classList.add("text-warning");
    } else {
        reset();
    }

}

var clearIconColors = function () {
    
    var iconBoxes = document.getElementsByClassName("icon-box");

    for(var i = 0; i < iconBoxes.length; i++) {
        iconBoxes[i].classList.remove("text-success");
        iconBoxes[i].classList.remove("text-danger");
        iconBoxes[i].classList.remove("text-warning");
    }


}

var logMatch = function () {

}

var reset = function () {

}