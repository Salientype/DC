var countdown = function() {
    var num = 4;
    var timer = document.getElementById("countdown");
    var setTimer = setInterval(function(){
        timer.innerHTML = num;
        num--;
        if (num == -1) {
            clearInterval(setTimer);
        } 
    }, 1000);
}