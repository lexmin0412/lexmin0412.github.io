const entries = new Map([
  ['apple', 'orange'],
  ['grapes', 'peach']
])
const obj = Object.fromEntries(entries);  // 暂不支持fromEntries方法
console.log(obj)