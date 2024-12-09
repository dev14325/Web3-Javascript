// promisified version of read & write File

const fs = require('fs');


function readTheFile(resolve){

    // do your thing here whenever you have final value , call the resolve(finalValue)
    fs.readFile('a.txt','utf-8',function(err,data){
        resolve(data);

    })


}
function readFile(){
    return new Promise(readTheFile); // creating a new promise
}

// using the promise

let p = readFile();


function callBack(content){
    console.log(content);
  
}

p.then(callBack); 


// somehow the callback in p.then(callback) gets the value of resolve