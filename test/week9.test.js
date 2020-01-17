const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/week9");

describe("sumMultiples", () => {
  test("sums all multiples of 3 or 5 from the array", () => {
    expect(sumMultiples([5, 3, 7, 8, 1])).toBe(8);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    expect(sumMultiples([2, 10, 30, 301, 23, 40, 50])).toBe(130);
  });

  test("if the numbers not found in the array, returns zero", () => {
    expect(sumMultiples([4, 7, 8, 1, 4])).toBe(0);
  });

  test("handles zeros in the array", () => {
    expect(sumMultiples([0, 7, 8, 1, 0])).toBe(0);
    expect(sumMultiples([0, 3, 8, 1, 0])).toBe(3);
  });

  test("if array empty returns 0", () => {
    expect(sumMultiples([])).toBe(0);
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

describe("isItPrime", () => {
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


describe("createMatrix", () => {
  test("create an array containing n by n arrays filled with fill", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"]
    ]);

    expect(createMatrix(1, "Bert")).toEqual([
      ["Bert"]
    ]);
  });

  test("For 0 return an empty array", () => {
    expect(createMatrix(0, "Monte Carlo")).toEqual([]);
  });

  test("Fill can be a number", () => {
    expect(createMatrix(3, 3)).toEqual([
      [3, 3, 3],
      [3, 3, 3],
      [3, 3, 3]
    ]);
  });

  test("Fill can be a boolean", () => {
    expect(createMatrix(3, true)).toEqual([
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]);
  });
});

describe("areWeCovered", () => {
  const staff =
    [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Rachel", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Diane", rota: ["Sunday", "Tuesday", "Friday"] },
      { name: "Sarah Connor", rota: ["Saturday", "Friday"] },
      { name: "Tyler Durden", rota: ["Thursday", "Thursday", "Thursday"] }

    ]
  test("Returns true if 3 people scheduled for given day", () => {
    expect(areWeCovered(staff, "Sunday")).toEqual(true);
  });
  test("Returns false if fewer than 3 people scheduled for given day", () => {
    expect(areWeCovered(staff, "Monday")).toEqual(false);
  });
  test("Returns true if more than 3 people scheduled for given day", () => {
    expect(areWeCovered(staff, "Tuesday")).toEqual(true);
  });
  test("Works for full name staff members", () => {
    expect(areWeCovered(staff, "Friday")).toEqual(true);
  });  
  test("Returns false if only > 3 because of duplicate in s/o's rota", () => {
    expect(areWeCovered(staff, "Thursday")).toEqual(false);
  });  

});