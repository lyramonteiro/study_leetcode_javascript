/**
 * O exercício é sobre closure e escopo. Aqui dá pra fazer um teste melhor
 * sobre o contador dentro da closure vs. com um counter externo.
 * 
 * @param {number} n
 * @return {Function} counter
 */

let globalCounter = 0;

const createCounter = function (n) {
	let closureCalls = 0;
	return function () {
		let calc = n + closureCalls
		closureCalls++;
		globalCounter++;
		return calc;
	};
};

console.log(`${createCounter(-2)()}, ${globalCounter}`); // 5
console.log(`${createCounter(-2)()}, ${globalCounter}`); // 5
console.log(`${createCounter(-2)()}, ${globalCounter}`); // 5
console.log(`${createCounter(-2)()}, ${globalCounter}`); // 5
console.log(`${createCounter(-2)()}, ${globalCounter}`); // 5
