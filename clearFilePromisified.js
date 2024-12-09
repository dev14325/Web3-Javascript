// promisified version of Clear the File
const fs = require('fs');

// 1st way
// function clearFile(resolve){
//     fs.writeFile('d.txt',"",'utf-8',function(err,data){
//         resolve("File has been cleared")
//     })

// }


// // creating the promise //hard
// function temp(){
//     return new Promise(clearFile);
// }

// let p = temp() // using the promise;


// function callBack(msg){
//     console.log(msg);
// }
// p.then(callBack);


// 2nd way
// truncate can adjust the size of a file (make it 0 ,make it larger , shrink the size of the file)
function clearFile(resolve){
    fs.truncate('d.txt',0,function(err,data){
        resolve("File cleared");
    })


}

function temp(){
    return new Promise(clearFile);
}

let p = temp();
function callBack(msg){
    console.log(msg);
}
p.then(callBack)