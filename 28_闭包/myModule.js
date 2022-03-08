function myModule() {

    // 私有的属性
    var msg = 'atguigu'

    // 操作数据的函数
    function doSomething() {
        console.log('doSomething()' + msg.toUpperCase());
    }

    function doOtherthing() {
        console.log('doOtherthing()' + msg.toLowerCase());
    }

    // 向外暴露
    return {
        doSomething: doSomething,
        doOtherthing: doOtherthing
    }

}