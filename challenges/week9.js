/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let sum = 0;
  for (member of arr) {

    if ((member % 3 === 0) | (member % 5 === 0)) {
      sum = sum + member;
    }
  }

  return sum;

};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let valid = false;

  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {

      case 'A':
      case 'C':
      case 'G':
      case 'T': valid = true;
        break;
      default: valid = false;
    }

    if (!valid)
      break;
  }

  return valid;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");

  let complement = [];

  for (let i = 0; i < str.length; i++) {
    let letter = '';
    switch (str[i]) {

      case 'A': letter = 'T';
        break;
      case 'C': letter = 'G';
        break;
      case 'G': letter = 'C';
        break;
      case 'T': letter = 'A';
        break;
      default: throw new Error("valid str is required");
    }

    complement.push(letter);
  }
  return complement.join("");
};

/**
 * This function should receive a number and return true/false dependi0ng on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  if (n === 1) {
    return true;
  }
  else if (n < 0 || !(Number.isInteger(n))) {
    return false;
  }

  let root = Math.sqrt(n);

  if (Number.isInteger(root))
    return false;

  for (let i = 2; i < root; i++) {

    if (Number.isInteger(n / i)) {
      return false;
    }
  }

  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  if (n < 0 || !Number.isInteger(n) ) throw new Error("n must be a positive integer")

  let matrix = [];

  for(let i = 1; i <= n; i++){
    let singleArr = []
      for (let j = 1; j<=n; j++){
          singleArr.push(fill);
      }

    matrix.push(singleArr)
  }

  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
  const MIN_STAFF = 3;
  let dayCount = 0;

  for(staffMember of staff){


    if((staffMember.rota).includes(day))
        dayCount = dayCount +1;
  }

  return (dayCount >= MIN_STAFF);
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
