/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  let total = 0;
  let multiplier = 1;
  let s = "";

  if (n < 0) {

    s = ((n.toString()).split("-"))[1];
    multiplier = -1;
  }
  else {
    s = n.toString();
  }

  for (let i = 0; i < s.length; i++) {
    total += parseInt(s[i])
  }

  return (total * multiplier);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  if (step === undefined) step = 1;

  let arr = [];
  let current = start;
  let final = end;

  while (current <= final) {

    arr.push(current);
    current += step;
  }

  return arr;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  const MAX_RECOMMENDED_MINS = 100;

  let alertList = [];

  for (let f = 0; f < users.length; f++) {
    let userInfo = users[f];
    let username = userInfo.username;
    let screenTime = userInfo.screenTime;

    for (let g = 0; g < screenTime.length; g++) {
      let entry = screenTime[g];
      if (entry.date === date) {
        let usage = entry.usage;

        const minutesArr = Object.values(usage);

        if (minutesArr.reduce((a, b) => a + b, 0) > MAX_RECOMMENDED_MINS) {

          alertList.push(username);
        }
      }
    }
  }

  return alertList;
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  if (hexStr[0] !== '#') throw new Error("incorrect format of argument")

  let R = parseInt((hexStr.substring(1, 3)), 16);
  let G = parseInt((hexStr.substring(3, 5)), 16);
  let B = parseInt((hexStr.substring(5, 7)), 16);

  return ("rgb(" + R + "," + G + "," + B + ")")
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  const BOARD_SIZE = 3;
  let startMark = "";
  let round = 0;
  let winner = false;

  for (let i = 0; i < BOARD_SIZE; i++) {
// for left to right lines
    round = 0;
    for (let j = 0; j < 3; j++) {
      checkEntry(i, j);
    }
    if(winner && startMark != null && round === BOARD_SIZE) return startMark;

// for top down lines
    round = 0;
    for (let j = 0; j < BOARD_SIZE; j++) {
     checkEntry(j,i);
    }
    if(winner && startMark != null && round === BOARD_SIZE) return startMark;

// for top left to bottom right diagonal
    round = 0;
    for (let j = 0; i === 0 && j < BOARD_SIZE; j++) {
      checkEntry(j, j);
    }
    if(winner && startMark != null && round === BOARD_SIZE) return startMark;

 //   for bottom left to top right diagonal
      round = 0;
        for (let j = 0, k = (BOARD_SIZE - 1); i === 0 &&  j < BOARD_SIZE; j++ , k--) {
          checkEntry(j, k);

          if(winner && startMark != null && round === BOARD_SIZE) return startMark;
        }
  }

  return null;

  function checkEntry(x,y){

    if(round === 0) {
      if(board[x][y] == null){
        return null;
      }
      winner = true;
      startMark = board[x][y];
    }

    if( board[x][y] !== startMark) {
        winner = false;
    }
    round++;

  }

}

  module.exports = {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  };
