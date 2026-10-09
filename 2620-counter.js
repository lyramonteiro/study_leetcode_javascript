/**
 * @param {number} n
 * @return {Function} counter
 */

const createCounter = function (n) {
	let counterCalls = 0;
	return function () {
		let calc = n + counterCalls
		counterCalls++;
		return calc;
	};
};

console.log(createCounter(-2)()); // 5
console.log(createCounter(-2)()); // 5
console.log(createCounter(-2)()); // 5
console.log(createCounter(-2)()); // 5
console.log(createCounter(-2)()); // 5
