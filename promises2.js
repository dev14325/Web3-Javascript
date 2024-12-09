// function waitFor3s(resolve){
//     setTimeout(resolve,3000);

// }


// function main(){
//     console.log("main is called");


// }
// function setTimeoutPromisified(){
//     return new Promise(waitFor3s);
// }

// setTimeoutPromisified().then(main);


function random(resolve){ // resolve a also a function
    setTimeout(resolve,3000);

}


// supposed to return you something eventually
let p = new Promise(random);


// using the value return by promise


function callBack(){
    console.log("promise succeed")
}
p.then(callBack);

