function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squaresArray = nums.map(function(number){

    return number*number;

  });

  return squaresArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let wordsArray = words.map(function (word, i) {
    if (i != 0) {
      return capitalize(word);
    }
    else{
      return word;
    }

  });

  return wordsArray.join("");

}

function capitalize(word) {
  if (word === undefined) throw new Error("word is required")
  return (word[0].toUpperCase() + word.slice(1, word.length))
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
