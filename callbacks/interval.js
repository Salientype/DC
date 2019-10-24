var output = function () {
    var myArray = [];
    var myList = document.getElementById("myList");
    
    for (var i = 0; i < 20; i++) {
        myArray.push("This is item number" + i);
    }
    
    for (var i = 0; i < myArray.length; i++) {
        setTimeout (function () {
            myList.appendChild(document.createElement("LI").innerHTML(myArray[i]));
        },
        2000);
    }
}

output();