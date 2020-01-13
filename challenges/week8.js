const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  const posn = nums.indexOf(n);
  if (posn === -1 || posn === (nums.length - 1)) {
    return null;
  }
  else {
    return nums[posn + 1];
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  // iterate trhough from 0 to length - 1
  // if its a 1 inc 1count if 0 then 0count
  let oneCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < str.length; i++) {

    if (str[i] == 0) {
      zeroCount++;
    }

    if (str[i] == 1) {
      oneCount++;
    }

  }

  return {
    1: oneCount,
    0: zeroCount
  };
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your cnode here!
  let myString = n.toString();
  let stringLength = myString.length;

  var reverse = 0;

  for (let i = 1; i <= stringLength; i++) {
    reverse = reverse + myString[stringLength - i];
  }

  return Number.parseInt(reverse);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let total = 0;

  for (let i = 0; i < arrs.length; i++)
    for (let j = 0; j < arrs[i].length; j++) {
      total = total + arrs[i][j];
    }

  return total;

};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  return arr.map(function (number, index) {
    let lastIndex = arr.length - 1;

    if (index === 0) {
      return arr[lastIndex];
    }

    else if (index === lastIndex)
      return arr[0];

    else
      return arr[index];
  });

};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let found = false;

  for (const stick in haystack) {

    let value = haystack[stick].toString().toLowerCase();

    if (value.includes(searchTerm.toLowerCase()))
      return true;
  }

  return false;

};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let array = str.split(" ");

  let already = [];

  let pairs = {};

  let counter = 0;

  for (inputWord of array) {
    let word = inputWord.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
    
    if (!already.includes(word)){

      already.push(word)
      counter = 0;

      for (member of array) {
        let lowerMember = member.toLowerCase().replace(/[.,\/#!?$%\^&\*;:{}=\-_`~()]/g, "");
        if (word === lowerMember)
          counter = counter + 1;
      }

      pairs[word] = counter;
    }
  }
  return pairs;

};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
