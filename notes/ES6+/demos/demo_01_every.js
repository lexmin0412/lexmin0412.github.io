// 验证元素是否都大于10
function isBigEnough ( element, index, array ) {
  console.log(element, 'element')
  console.log(index, 'index')
  console.log(array, 'array')
  return (element >= 10)
}
var passed = [ 21, 12, 9 ].every(isBigEnough)  
console.log(passed)  // false
passed = [ 21, 12, 19 ].every(isBigEnough)
console.log(passed)  // true