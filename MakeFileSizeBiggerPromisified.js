const fs = require('fs');

function MakeFileBigger(resolve){
    fs.truncate('d.txt',50,function(err,data){
        resolve("File size extended successfully");
    })

    }


function temp(){
    return new Promise(MakeFileBigger);
}

let p = temp();

function callBack(msg){
    console.log(msg);
}

p.then(callBack)