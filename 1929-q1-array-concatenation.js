/**
 * Array concatenation in JavaScript.
 * Nowadays, we can just spread operator it with a copy of themselves.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
	return [...nums, ...nums];
};
