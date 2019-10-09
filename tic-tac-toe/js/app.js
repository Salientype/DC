var boardElement = document.getElementById("board");

var title = document.createElement("h1");

title.innerHTML = "My Game";
boardElement.append(title);

var boardData = [];

var currentPlayer = "player 1";

var makeBoard = function () {

    for (var row = 0; row < 3; row++) {

        var rowElement = document.createElement("div");
        rowElement.className = "row";

        boardData[row] = [];

        for (var column = 0; column < 3; column++) {

            var columnElement = document.createElement("div");
            columnElement.className = "col border border-secondary board-piece";
            columnElement.innerHTML = "Row " + row + " Column" + column;
            columnElement.id = row + "-" + column;
            columnElement.onclick = function() {
            
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()) {
                    alert("Cannot Change Piece!");
                } else if(currentPlayer == "player 1") {
                    this.innerHTML = getXPiece();
                    currentPlayer = "player 2";           
                } else if(currentPlayer == "player 2") {
                    this.innerHTML = getOPiece();
                    currentPlayer = "player 1";
                }
            }

            boardData[row][column] = columnElement;

            rowElement.appendChild(columnElement);

        }

        boardElement.appendChild(rowElement);

    }

}

var getXPiece = function() {
    return "X";
}

var getOPiece = function() {
    return "O";
}

var checkWinVert = function(row, column, piece) {
    var points = 0;
    if(boardData[row-1] && boardData[row-1][column].innerHTML == piece){

    }
}

makeBoard();
console.log(boardData);
boardData[2][0].innerHTML="digital";
boardData[0][2].innerHTML="crafts";
