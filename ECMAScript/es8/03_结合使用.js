
const fs = require('fs');


// 读取 为学
function readWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.txt', (err, data) => {
            if(err) rejects(err);
            resolve(data)
        })
    })
}

function readGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.txt', (err, data) => {
            if(err) rejects(err);
            resolve(data)
        })
    })
}

function readChaYang() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.txt', (err, data) => {
            if(err) rejects(err);
            resolve(data)
        })
    })
}


async function main() {
    let weixue = await readWeiXue();
    let cha = await readChaYang();
    let guanshu = await readGuanShu();

    console.log(weixue.toString(), cha, guanshu);
}

main()