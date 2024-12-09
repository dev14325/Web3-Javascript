function waitFor3s(resolve){
    setTimeout(resolve,3000);

}
  
function setTimeoutPromisified(){
    return new Promise(waitFor3s);
}

function main(){
    console.log("3 sec has passed");
}

setTimeoutPromisified().then(main);


