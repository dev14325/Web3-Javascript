// promisified version of read the File
const fs = require('fs');

function readFile(resolve){
    fs.readFile('a.txt','utf-8',function(err,data){
        resolve(data);
    })
}
// creating the promise 
function temp(){
    return new Promise(readFile);
}


// using the promise

let p = temp();

function callBack(content){
    console.log(content);
}
p.then(callBack);


