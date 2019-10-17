var setTimer;

var countdown = function () {

    radioButtonsDisable(false);
    clearIconColors();
    setDefaultIcons();

    var num = 4;
    var timer = document.getElementById("countdown");

    setTimer = setInterval(function () {
        timer.innerHTML = num;
        num--;
        if (num == -1) {
            clearInterval(setTimer);
            if (document.querySelector('input[name="playerChoice"]:checked')) {
                startGame();
                timer.innerHTML = "";
            } else {
                reset();
            }
        }
    }, 1000);

}


var startGame = function () {

    var playerChoice = playerSelect();
    var machineChoice = machineSelect();
    radioButtonsDisable(true);
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

    var playerWins = function () {
        console.log("Human Wins!");
        clearIconColors();
        machineBox.classList.add("text-danger");
        playerBox.classList.add("text-success");
        logMatch("The Human");
    }

    var machineWins = function () {
        console.log("Machine Wins!");
        clearIconColors();
        machineBox.classList.add("text-success");
        playerBox.classList.add("text-danger");
        logMatch("The Robot")
    }

    var tiedMatch = function () {
        console.log("Tied Match!");
        clearIconColors();
        machineBox.classList.add("text-warning");
        playerBox.classList.add("text-warning");
        logMatch("No one");
    }

    if (playerChoice == "rock" && machineChoice == "paper") {
        machineWins();
    } else if (playerChoice == "paper" && machineChoice == "rock") {
        playerWins();
    } else if (playerChoice == "rock" && machineChoice == "scissors") {
        playerWins();
    } else if (playerChoice == "scissors" && machineChoice == "rock") {
        machineWins();
    } else if (playerChoice == "scissors" && machineChoice == "paper") {
        playerWins();
    } else if (playerChoice == "paper" && machineChoice == "scissors") {
        machineWins();
    } else if (playerChoice == machineChoice) {
        tiedMatch();
    } else {
        reset();
    }

}

var clearIconColors = function () {

    var iconBoxes = document.getElementsByClassName("icon-box");

    for (var i = 0; i < iconBoxes.length; i++) {
        iconBoxes[i].classList.remove("text-success");
        iconBoxes[i].classList.remove("text-danger");
        iconBoxes[i].classList.remove("text-warning");
    }

}

var setDefaultIcons = function () {

    var playerBox = document.getElementById("playerChoice");
    var machineBox = document.getElementById("machineChoice");
    playerBox.innerHTML = '<i class="fas fa-question fa-10x"></i>';
    machineBox.innerHTML = '<i class="fas fa-comment-dots fa-10x"></i>';

}

var radioButtonsDisable = function (boolean) {

    var rockBtnInput = document.getElementById("rock");
    var paperBtnInput = document.getElementById("paper");
    var scissorsBtnInput = document.getElementById("scissors");
    var rockBtn = document.getElementById("rockBtn");
    var paperBtn = document.getElementById("paperBtn");
    var scissorsBtn = document.getElementById("scissorsBtn");

    rockBtnInput.disabled = boolean;
    paperBtnInput.disabled = boolean;
    scissorsBtnInput.disabled = boolean;

    rockBtn.classList.remove("focus");
    paperBtn.classList.remove("focus");
    scissorsBtn.classList.remove("focus");

    rockBtn.classList.remove("active");
    paperBtn.classList.remove("active");
    scissorsBtn.classList.remove("active");

}

var logMatch = function (player) {

    var historyList = document.getElementById("historyList");
    var round = document.createElement("LI");
    
    round.innerHTML = player + " has won!"
    historyList.appendChild(round);

}

var reset = function () {

    var iconBoxes = document.getElementsByClassName("icon-box");
    var timer = document.getElementById("countdown");

    clearInterval(setTimer);
    radioButtonsDisable(false);
    timer.innerHTML = "";

    for (var i = 0; i < iconBoxes.length; i++) {
        iconBoxes[i].innerHTML = "";
    }

}