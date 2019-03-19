// 求和
function getSum ( total, item ) {
  return total+item
}

let numbers = [1,2,34,567]

console.log(numbers.reduce(getSum, 100))  // 704 reduce()接收两个参数，第一个为函数，第二个为初始值