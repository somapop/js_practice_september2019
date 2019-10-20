function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
 
    // grab first letter of the word - alter to capital letter(use .toUpperCase)
    const firstChar = word.charAt(0).toUpperCase();
    // grab the rest of the word
    const restOfWord = word.slice(1);
    // merge 1st letter and word
    const fullWord = firstChar + restOfWord;
    // return
    return (fullWord);

  }


function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // find out if string length is odd or even  
  //take the length of the string and divide it by 2 to have no remainers
  if (str.length % 2 === 0) {
    return str[(str.length / 2) - 1] + str[str.length / 2];
      } else {
          return str[Math.floor(str.length / 2)];
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // number as count
  let total = 0;
  // for each user
  users.forEach(function (user) {
    // find out if they use Linux
    const systemType = user.type;
    if (systemType === "Linux") {
      // if they are, add number to the count 
      total += 1;
    }
  });
  // return number count
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
