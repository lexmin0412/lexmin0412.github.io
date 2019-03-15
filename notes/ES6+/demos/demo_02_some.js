function isBigEnough ( element, index, array ) {
  return (element >= 10)
}
var passed = [ 7, 8, 9 ].some(isBigEnough)
console.log(passed)  // false
passed = [ 7, 8, 10 ].some(isBigEnough)
console.log(passed)  // true