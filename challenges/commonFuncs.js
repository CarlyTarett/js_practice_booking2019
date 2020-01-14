exports.roundIfNeeded = function(number) {
   return ( Number.isInteger(number) ? number : Number(number.toFixed(2)))

  }

exports.sortNumbers = function(a, b) {
   return a > b ? 1 : b > a ? -1 : 0;
 }
