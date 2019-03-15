# Array

- every
> 测试数组中的所有元素是否都通过了指定函数的测试。
```javascript
// 测试数组中的元素是否都大于10
function isBigEnough ( element, index, array ) {
  return (element >= 10)
}
var passed = [ 21, 12, 9 ].every(isBigEnough)  
console.log(passed)  // false
passed = [ 21, 12, 19 ].every(isBigEnough)
console.log(passed)  // true
```

- some
> 测试数组中是否有元素通过了指定函数的测试。
```javascript
// 测试数组中是否有元素通过了指定函数的测试
function isBigEnough ( element, index, array ) {
  return (element >= 10)
}
var passed = [ 7, 8, 9 ].some(isBigEnough)
console.log(passed)  // false
passed = [ 7, 8, 10 ].some(isBigEnough)
console.log(passed)  // true
```