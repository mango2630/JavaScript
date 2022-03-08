const btn = document.getElementById('btn')

btn.onclick = function () {
    console.log('点了以下');

    // 动态引入
    import('./hello.js').then(module => {
        module.hello()
    })
}