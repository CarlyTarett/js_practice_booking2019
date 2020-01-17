const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("sums all multiples of 3 or 5 from the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([2, 10, 30, 301, 23, 40, 50])).toBe(130);
  });

  test("if the numbers not found in the array, returns zero", () => {
    expect(sumMultiples([ 4, 7, 8, 1, 4])).toBe(0);
  });

  test("handles zeros in the array", () => {
    expect(sumMultiples([ 0, 7, 8, 1, 0])).toBe(0);
    expect(sumMultiples([ 0, 3, 8, 1, 0])).toBe(3);
  });

  test("if array empty returns 0", () => {
    expect(sumMultiples([ ])).toBe(0);
  });

});

describe("isValidDNA", () => {
  test("returns true for valid strings", () => {
    expect(isValidDNA("CCGGTTAA")).toBe(true);
    expect(isValidDNA("C")).toBe(true);
    expect(isValidDNA("AGTTGATCCGGTTAA")).toBe(true);

  });
  test("returns false for invalid string", () => {
    expect(isValidDNA("CCGGFTTAA")).toBe(false);
    expect(isValidDNA("HJJJEKSLI")).toBe(false);
    expect(isValidDNA("ASASASASASASSA")).toBe(false);

  });
  test("returns false for empty string", () => {
    expect(isValidDNA("")).toBe(false);
  });

  test("case sensitive", () => {
    expect(isValidDNA("cc")).toBe(false);
    expect(isValidDNA("ccCGAT")).toBe(false);

  });
});

describe("getComplementaryDNA", () => {
  test("gets correct complementary string", () => {
    expect(getComplementaryDNA("A")).toBe("T");
    expect(getComplementaryDNA("C")).toBe("G");
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
  });

});



describe.only("isItPrime", () => {
  test("return true if a number is prime", () => {
    expect(isItPrime(7)).toEqual(true);
    expect(isItPrime(31)).toEqual(true);
    expect(isItPrime(199)).toEqual(true);
  });

  test("return false if a number is not prime", () => {
    expect(isItPrime(40)).toEqual(false);
    expect(isItPrime(63)).toEqual(false);
    expect(isItPrime(10000)).toEqual(false);
  });

  test("returns true for 1", () => {
    expect(isItPrime(1)).toEqual(true);
  });
  test("returns false for 0", () => {
    expect(isItPrime(0)).toEqual(false);
  });
  test("returns false for negative numbers", () => {
    expect(isItPrime(-4)).toEqual(false);
  });
  test("returns false for decimals", () => {
    expect(isItPrime(36.36)).toEqual(false);
  });
});   

// describe("reverseNumber", () => {
//   test("reverses the digits of a number", () => {
//     expect(reverseNumber(5)).toBe(5);
//     expect(reverseNumber(104)).toBe(401);
//     expect(reverseNumber(12345)).toBe(54321);
//     expect(reverseNumber(100)).toBe(1); // No leading 0 necessary
//   });
// });

// describe("sumArrays", () => {
//   test("returns the total of the numbers in all sub arrays", () => {
//     const arrs = [[1, 2, 3], [6, 3, 1], [1], [9, 10], [3, 5]];
//     expect(sumArrays(arrs)).toBe(44);
//   });
// });

// describe("arrShift", () => {
//   test("returns an array with the first and last items swapped", () => {
//     expect(arrShift([1, 2])).toEqual([2, 1]);
//     expect(arrShift([1, 2, 3])).toEqual([3, 2, 1]);
//     expect(arrShift([1, 2, 3, 4])).toEqual([4, 2, 3, 1]);
//   });

//   test("makes no difference when the array length is < 2", () => {
//     expect(arrShift([1])).toEqual([1]);
//     expect(arrShift([])).toEqual([]);
//   });
// });

// describe("findNeedle", () => {
//   test("returns true if any of the properties of an object contain the specified string", () => {
//     const obj1 = {
//       name: "LINNMON",
//       description: "Small round table",
//       price: 31.89,
//       store: "Warrington",
//       code: 12872
//     };
//     expect(findNeedle(obj1, "table")).toBe(true);

//     // Note that the objects provided to the function could have any keys/values
//     const obj2 = {
//       product_name: "Sparkle n Shine Dishwasher Tablets",
//       price: 1.99,
//       location: "Hulme",
//       discounted: false,
//       available: true
//     };
//     expect(findNeedle(obj2, "Dishwasher")).toBe(true);
//   });

//   test("returns false if none of the properties of an object contain the specified string", () => {
//     const obj1 = {
//       name: "LINNMON",
//       description: "Small round table",
//       price: 31.89,
//       store: "Warrington",
//       code: 12872
//     };
//     expect(findNeedle(obj1, "chair")).toBe(false);

//     // Note that the objects provided to the function could have any keys/values
//     const obj2 = {
//       product_name: "Sparkle n Shine Dishwasher Tablets",
//       price: 1.99,
//       location: "Hulme",
//       discounted: false,
//       available: true
//     };
//     expect(findNeedle(obj2, "Carpet Cleaner")).toBe(false);
//   });

//   test("The search string should not be case sensitive", () => {
//     const obj1 = {
//       name: "LINNMON",
//       description: "Small round table",
//       price: 31.89,
//       store: "Warrington",
//       code: 12872
//     };

//     expect(findNeedle(obj1, "warrington")).toBe(true);
//     expect(findNeedle(obj1, "linnmon")).toBe(true);
//     expect(findNeedle(obj1, "Liverpool")).toBe(false);
//   });
// });

// describe("getWordFrequencies", () => {
//   test("returns the frequencies of each word in a string", () => {
//     expect(getWordFrequencies("hello world")).toEqual({
//       hello: 1,
//       world: 1
//     });

//     expect(getWordFrequencies("the cat is hairier than the rat")).toEqual({
//       the: 2,
//       cat: 1,
//       is: 1,
//       hairier: 1,
//       than: 1,
//       rat: 1
//     });

//     expect(getWordFrequencies("hello hello hello")).toEqual({
//       hello: 3
//     });
//   });

//   test("ignores capitalisation", () => {
//     expect(getWordFrequencies("Hello hello hello")).toEqual({
//       hello: 3
//     });
//   });

//   test("ignores punctuation", () => {
//     // Hint: Google "JavaScript remove special characters from string" to get some ideas!
//     expect(
//       getWordFrequencies("Hello, hello hello! What have we here?")
//     ).toEqual({
//       hello: 3,
//       what: 1,
//       have: 1,
//       we: 1,
//       here: 1
//     });
//   });
// });
