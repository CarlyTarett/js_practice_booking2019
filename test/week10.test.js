const {
  sumDigits,
  createRange
} = require("../challenges/week10");

describe("sumDigits", () => {
  test("sums each digit in the number", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(0)).toBe(0);
  });

  test("for negative return a negative sum", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(0)).toBe(0);
  });
});

describe.only("createRange", () => {
  test("create an array of numbers ranging from start to end inclusive incrementing by step", () => {
    expect(createRange(1,2,1)).toEqual( [1,2]);
    expect(createRange(10,20,2)).toEqual( [10,12,14,16,18,20]);
  });

  test("use a step of 1 if not specd", () => {
    expect(createRange(1,4)).toEqual( [1,2,3,4]);
    expect(createRange(10,15)).toEqual( [10,11,12,13,14,15]);
  });

    test("if start and end are the same just put in the array once", () => {
    expect(createRange(5,5)).toEqual( [5]);
    expect(createRange(0,0)).toEqual( [0]);
  });

  test("if interval does not divide range evenly just print highest number that does that is < end", () => {
    expect(createRange(1,5,3)).toEqual( [1,4]);
    expect(createRange(101,400,100)).toEqual( [101, 201, 301]);
  });


});
