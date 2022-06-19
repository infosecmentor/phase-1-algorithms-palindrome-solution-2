function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }
  return false;
}
function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let i = 0; i < word.length / 2; i++) {
      // compare the letter we're iterating over to the corresponding letter at the end of the string
      const j = word.length - 1 - i;
      if (word[i] !== word[j]) {
          // if the letters don't match, return false
          return false;
      }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}

/* 
  Add your pseudocode here
*/
function isPalindrome(word) {
  // iterate from the beginning of the string to the middle of the string
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      // compare the letter we're iterating over to the corresponding letter at the end of the string
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
          // if the letters don't match, return false
          return false;
      }
  }

  // if we reach the middle, and all the letters match, return true
  return true;
}


function isPalindrome(word) {
  for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
          return false;
      }
  }

  return true;
}

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
