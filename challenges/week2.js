function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  return (person.city.toLowerCase() === "manchester")
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  const busCapacity = 40

  let extras = people % busCapacity

  if (extras === 0) {
    return people / busCapacity
  }
  else {
    return ((people - extras) / busCapacity) + 1
  }
}



function countSheep(arr) {

  let sheepCount = 0

  for (let animal of arr) {
    if (animal === "sheep") {
      sheepCount++
    }
    else { }
  }

  return sheepCount
}



function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  // if I had more time I'd like to abstract out  function that isFromManchester and the second
  // part of this conditional could share - I'm a bit pushed this week
  return (person.address.postCode[0] && (person.address.city.toLowerCase() === "manchester"))

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};