const findSum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
 };

const largestPair = function(array) {
  let max = -Infinity;
    for (let i = 1; i < array.length; i++) {
        max = Math.max(array[i] * array[i - 1], max);
    }
    return max;
};

const removeParenth = function(str) {
  do {
        removeParenth = str;
        str = str.replace(/\([^\)\(]*\)/, "");
    } while (removeParenth != str);
    return removeParenth
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
