function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squaresArray = nums.map(function (number) {

    return number * number;

  });

  return squaresArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let wordsArray = words.map(function (word, i) {
    if (i !== 0) {
      return capitalize(word);
    }
    else {
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
  let numberSubjectsArray = people.map(function (person) {
    return person.subjects.length

  });

  let sum = 0;
  for (let number of numberSubjectsArray) {
    sum += number
  }

  return sum;

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let ingredientPresent = false;
  menu.forEach(function (recipe) {

    recipe.ingredients.forEach(function (singleIngredient) {

      if (singleIngredient === ingredient)
        ingredientPresent = true;

    });

  });

  return ingredientPresent;

}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  
  let checkedNumbers = [];
  let duplicates = [];

  for (let number of arr1) 
  
 
    if (numberPresent(number, checkedNumbers)) { }
 
    else {
      checkedNumbers.push(number);
      if (numberPresent(number, arr2))
        duplicates.push(number);
    }

     // duplicates.push(number);

      console.log(numberPresent(3, [2,4,5,3]));
    

  return duplicates;
}

function numberPresent(numberToCheck, array) {
  for (let number of array) {
    if (number === numberToCheck) {

      return true;
    }
    else {}

    
  }
  return false;
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
