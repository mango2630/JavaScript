## 1. async 和 await

    结合使用可以让异步代码像同步代码一样

## 2. async函数
    1. 返回值为 promise对象
    2. promise对象有async函数执行的返回值决定

## 3. await表达式
    1. awit必须写在async函数中
    2. await右侧的表达式一般为promise对象
    3. await返回的是promise成功的值
    4. await的promise失败了，就会抛出异常，需要通过trycatch捕获处理
