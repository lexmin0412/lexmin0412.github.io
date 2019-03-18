# Object

### [Object.fromEntries()](./demos/demo_03_fromEntries.js)
```javascript
const entries = new Map([
  ['apple', 'orange'],
  ['grapes', 'peach']
])
const obj = Object.fromEntries(entries);
console.log(obj)
```