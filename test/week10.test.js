const {
  sumDigits
} = require("../challenges/week10");

describe.only("sumDigits", () => {
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

describe("xxxxx", () => {
  test("xxxxx", () => {
    expect(sumMultiples([5, 3, 7, 8, 1])).toBe(8);
  });
});
