exports.roundIfNeeded = function(number) {
   return ( Number.isInteger(number) ? number : Number(number.toFixed(2)))

  }