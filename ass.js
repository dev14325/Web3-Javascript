const fs = require('fs');
function read(err , data){
    if(err) {
        console.log(err);
        return;
    }
   
     console.log(data);
}
function temp(){
    return new Promise((resolve , reject)=>{
        fs.readFile('a.txt','utf-8' , (err, data)=>{
            if(err) reject(err);
            else resolve(data);
        })
        
    })
}

let p1 = temp();
p1.then((data)=>{
    console.log("File content from promise --->",data);
}).catch((err)=>{
    console.log("Error in reading File",err);
})