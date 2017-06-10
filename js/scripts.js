$(document).ready(function(){
	// logic responsible for user front -end / interaction only
	$("#calculator").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#input1").val());
		var number2 = parseInt($("#input2").val());
		var operator = $("input:radio[name=operator]:checked").val();
		console.log("1st number: " + number1); // for debugging
		console.log("2nd number: " + number2); // for debugging
		console.log("operator: " + operator);  // for debugging
		var result;
		if (operator === "add") {
			result = add(number1, number2);
		} else if (operator === "subtract") {
			result = subtract(number1, number2);
		} else if (operator === "multiply") {
			result = multiply(number1, number2);
		} else if (operator === "divide") {
			result = divide(number1, number2);
		}
		$("#output").text(result);
	});	
});

// back-end / Business logic
//add, subtract, multiply, and divide functions

var add = function(num1, num2){
	return num1 + num2;
};

var subtract = function(num1, num2){
	return num1 - num2;
};

var multiply = function(num1, num2){
	return num1 * num2;
};

var divide = function(num1, num2){
	return num1 / num2;
};




