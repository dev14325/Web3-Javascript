// synchronus

// const fs = require("fs");
// const content = fs.readFileSync("a.txt","utf-8");
// console.log(content);

// aynchoronus

const fs = require("fs");

function read(err,data){
console.log(data);
}
const content1 = fs.readFile('a.txt',"utf8",read);
const content2 = fs.readFile('b.txt',"utf8",read);
console.log("Done !");

