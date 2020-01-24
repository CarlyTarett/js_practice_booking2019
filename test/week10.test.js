const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
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

describe("createRange", () => {
  test("create an array of numbers ranging from start to end inclusive incrementing by step", () => {
    expect(createRange(1, 2, 1)).toEqual([1, 2]);
    expect(createRange(10, 20, 2)).toEqual([10, 12, 14, 16, 18, 20]);
  });

  test("use a step of 1 if not specd", () => {
    expect(createRange(1, 4)).toEqual([1, 2, 3, 4]);
    expect(createRange(10, 15)).toEqual([10, 11, 12, 13, 14, 15]);
  });

  test("if start and end are the same just put in the array once", () => {
    expect(createRange(5, 5)).toEqual([5]);
    expect(createRange(0, 0)).toEqual([0]);
  });

  test("if interval does not divide range evenly just print highest number that does that is < end", () => {
    expect(createRange(1, 5, 3)).toEqual([1, 4]);
    expect(createRange(101, 400, 100)).toEqual([101, 201, 301]);
  });
});

describe("getScreentimeAlertList", () => {

  const userData = [{
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
      { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
      { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
      { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
      { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
    ]
  },
  {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
      { date: "2019-05-02", usage: { mapMyRun: 45, whatsApp: 100, facebook: 0, safari: 10 } },
      { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
      { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
      { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
      { date: "2020-01-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 100 } },

    ]
  }]

  test("Return array of users whose online time > 100", () => {
    expect(getScreentimeAlertList(userData, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(userData, "2019-05-02")).toEqual(["beth_1234", "sam_j_1989"]);
  });

  test("Do not return if === 100 mins", () => {
    expect(getScreentimeAlertList(userData, "2020-01-01")).toEqual([]);

  });

  test("Return empty array if no data avail for that date", () => {
    expect(getScreentimeAlertList(userData, "2025-01-01")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("converts hex color code to RGB", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
    expect(hexToRGB("#000000")).toBe("rgb(0,0,0)");
  });
});

describe.only("findWinner", () => {
  let board1 =  [
    ["X", "0", null],
    ["X", null,  "0"],
    ["X", null, "0"]
   ]
  test("find out which if any player has won", () => {
    expect(findWinner(board1)).toBe("X");
  });
});