// LEETCODE 58. Length of Last Word

let s = 'Hello World';

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let t = s.trim();
    let split = t.split(' ');
    let lastWord = split.at(-1);
    let lastWordLength = lastWord.length;
    return lastWordLength;
};

console.log(lengthOfLastWord(s));