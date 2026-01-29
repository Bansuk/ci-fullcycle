const { sum, subtraction, multiplication, division } = require("./calculator");

describe("Calculator", () => {
	describe("sum", () => {
		test("should sum two positive numbers", () => {
			expect(sum(5, 3)).toBe(8);
		});

		test("should sum negative numbers", () => {
			expect(sum(-5, -3)).toBe(-8);
		});

		test("should sum positive and negative numbers", () => {
			expect(sum(10, -5)).toBe(5);
		});

		test("should sum decimal numbers", () => {
			expect(sum(2.5, 3.7)).toBeCloseTo(6.2);
		});
	});

	describe("subtraction", () => {
		test("should subtract two positive numbers", () => {
			expect(subtraction(10, 5)).toBe(5);
		});

		test("should subtract negative numbers", () => {
			expect(subtraction(-5, -3)).toBe(-2);
		});

		test("should subtract negative from positive", () => {
			expect(subtraction(10, -5)).toBe(15);
		});

		test("should subtract decimal numbers", () => {
			expect(subtraction(5.5, 2.2)).toBeCloseTo(3.3);
		});
	});

	describe("multiplication", () => {
		test("should multiply two positive numbers", () => {
			expect(multiplication(5, 3)).toBe(15);
		});

		test("should multiply negative numbers", () => {
			expect(multiplication(-5, -3)).toBe(15);
		});

		test("should multiply positive and negative numbers", () => {
			expect(multiplication(5, -3)).toBe(-15);
		});

		test("should multiply by zero", () => {
			expect(multiplication(5, 0)).toBe(0);
		});

		test("should multiply decimal numbers", () => {
			expect(multiplication(2.5, 4)).toBe(10);
		});
	});

	describe("division", () => {
		test("should divide two positive numbers", () => {
			expect(division(10, 2)).toBe(5);
		});

		test("should divide negative numbers", () => {
			expect(division(-10, -2)).toBe(5);
		});

		test("should divide positive by negative", () => {
			expect(division(10, -2)).toBe(-5);
		});

		test("should divide decimal numbers", () => {
			expect(division(7.5, 2.5)).toBe(3);
		});

		test("should throw error when dividing by zero", () => {
			expect(() => division(10, 0)).toThrow("Division by zero is not allowed");
		});
	});
});
