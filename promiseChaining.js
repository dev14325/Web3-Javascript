function setTimeOutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    })
}


// promise chaining
// setTimeOutPromisified(1000).then(function(){
//     console.log('hi');
//     return setTimeOutPromisified(3000)
// }).then(function (){
//     console.log('hello');
//     return setTimeOutPromisified(5000);
  

// }).then(function (){
//     console.log('hi there')
// })

// console.log('outside the callback hell')




async function solve(){
    await setTimeOutPromisified(1000);
    console.log('hi');
    await setTimeOutPromisified(3000);
    console.log('hello');
    await setTimeOutPromisified(5000);
    console.log('hi there');
}
solve();

console.log('after solve function')