var calculator = function(a, b, operand) {
    return operand(a, b);
}

var add = function(num1, num2) {
    return num1 + num2;
}

var subtract = function(num1, num2) {
    return num1 - num2;
}
var result = calculator(5 , 10, add)
console.log(result);


var multiply = function(num1, num2) {
    return num1 * num2;
}

var remainder = function(num1, num2, operand, modifier) {
    return operand(num1, num2) % modifier;
}

var result = remainder(23, 46, subtract, 3);
console.log(result);