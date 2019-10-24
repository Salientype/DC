var ltvFunction = function(arpa, mm, churn) {

	var ltv = (arpa * mm) / churn;
	return ltv;

}

console.log(ltvFunction(10, 2, 5));
console.log("Steve thinks the LTV should be " + ltvFunction( 5, 4, 3 ));
console.log("John thinks the LTV should be " + ltvFunction( 5, 20, 3));


var areaOfCircle = function( radius ) {

	var area = 3.14  * (radius * radius);
	return area;

}

console.log(areaOfCircle( 200 ));
console.log(areaOfCircle( 600 ));
