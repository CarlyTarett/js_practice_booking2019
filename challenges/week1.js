function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Makes the first letter upper.
  // I think that even if the 1st letter is already upper it's possible no more expensive
  // to just toUpper it rather than test for Uppercase before performing
  return (word[0].toUpperCase() + word.slice(1, word.length));
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return (firstName[0].toUpperCase() + "." + lastName[0].toUpperCase());
}



function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  const withVAT = originalPrice + originalPrice * vatRate / 100;

  return (Number.isInteger(withVAT) ? withVAT : Number(withVAT.toFixed(2)));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const reducedPrice = originalPrice - originalPrice * reduction / 100;

  return (Number.isInteger(reducedPrice) ? reducedPrice : Number(reducedPrice.toFixed(2)));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  if (str.length % 2) {

    let midpoint = (str.length - 1) / 2
    return str[midpoint]
  }

  else {
    let half = str.length / 2
    return str.slice(half - 1, half + 1)
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let reversed = []
  for (let letter of word) {
    reversed.unshift(letter)
  }
  return reversed.join("")
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  return (words.map(reverseWord))
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let linuxCount = 0

  for (let user of users) {
    if (user.type.includes("Linux")) {
      linuxCount++
    }
  }
  return linuxCount
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  // scores is an array
  // return a number

  let sum = 0
  if (scores.length === 0) {
    return 0
  }
  else {
    for (let number of scores) {
      sum += number
    }

    let mean = sum / scores.length

    return (Number.isInteger(mean) ? mean : Number(mean.toFixed(2)));
  }
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  let result = []

  if(!(n%3)){
   result.push("fizz")
  }

  if(!(n%5)){
    result.push("buzz")
  }

  if(result.length === 0){
    return n
  }
  else { 
    return result.join("")
  }

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
