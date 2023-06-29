function isPalindrome(word) {
  // Write your algorithm here
  let reversedString = reversedWord(word)

  // compares if the reversed string matches with the original
  if(word === reversedString) {
    return true
  } else {
    return false
  }
}

// reverse the string 
const reversedWord = (word)=> {
  // let wordArray = word.split("")
  // let wordReversed = wordArray.reverse()
  // let wordReverseJoined = wordReversed.join("")
  const wordReverseJoined = word.split("").reverse().join("")
  return wordReverseJoined
}
/* 
  Add your pseudocode here
*/
/*
  take input as word
  split word into a string array
  reverse string array and join it 

  if the reversed word === original word
    then return true
    else return false
*/

/*
  Add written explanation of your solution here
  1. split input into a strings array
  2. reverse the string array to get the reverse of the word
  3. join the reversed array back to a string
  4. test/compare if the reversed word is same as original word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
