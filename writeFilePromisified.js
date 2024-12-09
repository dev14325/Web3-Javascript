// Promisified the version of writing the file 

const fs = require('fs');

function writeFile(resolve){
    const content = "Hi I am writing in c.txt";
    fs.writeFile('c.txt',content,'utf-8',function(err,data){
        resolve("File write successfully !");
    })
}

// creating the promise
function temp2(){
    return new Promise(writeFile);
}


// using the promise
let p = temp2();

function callBack(msg){
    console.log(` ${msg}`);

}

p.then(callBack)
