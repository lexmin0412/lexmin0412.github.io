# bug fix

## CSS部分

### CSS3 `calc()` 函数

> 注意
> - 运算符两侧要保留一个空格，否则无法识别，如：`width: calc(100vh - 50px)`
> - 支持加减乘除

[示例：calc函数应用](https://github.com/cathe-zhang/cathe-zhang.github.io/tree/master/notes)
```html
<style>
  #test {
    background-color: #ffe400;
    width: calc(100vw - 40px);
    font-size: 5vh;
    height: calc(100vh - 20px);
  }
</style>
```
```html
<div id="test">
  测试
</div>
```
