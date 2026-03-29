/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  // TODO: Implement this function.
}
<<<<<<< HEAD
function sum(a, b) {
  return a + b;
}
=======
>>>>>>> 7740871883d8bd8759fcb9a4811d40626e37d73c

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // TODO: Implement this function.
}
<<<<<<< HEAD
function reverseString(str) {
  return str.split('').reverse().join('');
}
=======
>>>>>>> 7740871883d8bd8759fcb9a4811d40626e37d73c

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  // TODO: Implement this function.
}
<<<<<<< HEAD
function findLargest(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}
=======

>>>>>>> 7740871883d8bd8759fcb9a4811d40626e37d73c
/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  // TODO: Implement this function.
}
<<<<<<< HEAD
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
=======

>>>>>>> 7740871883d8bd8759fcb9a4811d40626e37d73c
/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  // TODO: Implement this function.
}
<<<<<<< HEAD
function filterEvenNumbers(numbers) {
  return numbers.filter(num => num % 2 === 0);
}
=======

>>>>>>> 7740871883d8bd8759fcb9a4811d40626e37d73c

// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

