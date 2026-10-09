/**
 * I used the slice method to split the array into two halves,
 * I know there would be faster ways, but I wanted to keep readable,
 * so using concrete names on variables made more sense.
 * 
 * @param {number[]} nums
 */
const shuffle = function (nums) {
	// deck init
	let deckBlue = [];
	let deckBlack = [];

	// cards slicing
	let totalCards = nums.length;
	let halfDeck = totalCards / 2;

	let firstHalf = nums.slice(0, halfDeck);
	let secondHalf = nums.slice(halfDeck, totalCards);

	deckBlue = firstHalf;
	deckBlack = secondHalf;

	// shuffle
	let shuffledDeck = [];
	for (let i = 0; i < halfDeck; i++) {
		shuffledDeck.push(deckBlue[i]);
		shuffledDeck.push(deckBlack[i]);
	}

	return shuffledDeck;
};

/**
 */
