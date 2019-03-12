# ES6+ 新特性总结

### 1. 解构

- 最基本的解构
```javascript
const user = {
  id: 123,
  name: 'cellerchan'
}
const { name } = user
console.log(name)  // cellerchan
```

- 解构并使用别名
>有时接口定义的字段往往带有下划线，但前端更偏好于驼峰，所以可以使用别名。
```javascript
const user = {
  id: 123,
  nick_name: 'cellerchan'
}
const { nick_name: nickName } = user  // 原名在前，命名在后
console.log(nickName)  // cellerchan
```

```javascript
const user = {
  id: 123,
  name: 'hehe',
  education: {
    degree: 'Masters'
  }
}
const { education: { degree } } = user
console.log(degree)  // Masters
```

> 有时候接口返回的数据结构可能会丢失某条数据，则
```javascript
const user = {
  id: 123,
  name: 'cellerchan'
}
const {
  education: {
    degree
  } = {}   // 定义了user.education的缺省值，可以达到数据防御的目的
} = user
console.log(degree)  // undefined
```

- 更深层次的嵌套
```javascript
const user = {
  id: 123,
  name: 'cellerchan'
}
const {
  education: {
    school: {
      name
    }
  } = {
    school: {
      name: 'default'
    }
  }
}
```

### 2. Promise api
> 参考资料：`https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise`
- `Promise.all(iterable)`
> 参数：`iterable`，一个可迭代对象，如 `Array` 或 `String`

> 返回值：返回一个 `Promise` 实例，此实例在 `iterable` 参数内所有的 `promise` 都完成(`resolved`)或参数中不包含`promise`时回调完成；如果参数中`promise`有一个失败(`rejected`)，此实例回调失败(`reject`)，失败原因是第一个失败`promise`的结果

- `promise.race(iterable)`
> 参数：同 `promise.all(iteralble)`

> 返回值：返回一个promise，一旦迭代器中的某个promise解决或拒绝，就采用第一个promise的值作为它的值，从而异步地解析或拒绝。

- `Promise.resolve()`
- `Promise.reject()`
