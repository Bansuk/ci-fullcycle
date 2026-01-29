const sum = (a, b) => {
	return a + b;
};

const subtraction = (a, b) => {
	return a - b;
};

const multiplication = (a, b) => {
	return a * b;
};

const division = (a, b) => {
	if (b === 0) throw new Error("Division by zero is not allowed");

	return a / b;
};

module.exports = {
	sum,
	subtraction,
	multiplication,
	division,
};

if (require.main === module) {
	console.log("Calculator Examples:");
	console.log("Sum: 10 + 5 =", sum(10, 5));
	console.log("Subtraction: 10 - 5 =", subtraction(10, 5));
	console.log("Multiplication: 10 * 5 =", multiplication(10, 5));
	console.log("Division: 10 / 5 =", division(10, 5));
}
