function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

function callback(){
    console.log("2 sec has passed");
}


setTimeoutPromisified(5000).then(callback);





