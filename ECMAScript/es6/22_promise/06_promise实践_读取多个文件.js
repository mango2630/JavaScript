const fs = require('fs')

fs.readFile('./reasource/为学.txt', (err, data1)=>{
    
    fs.readFile('./reasource/插秧诗.txt', (err, data2)=>{
        
        fs.readFile('./reasource/观书有感.txt', (err, data3)=>{
            let result = data1 + data2 + data3
            console.log(result);
        })
    })
})