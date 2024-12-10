// let cnt = 1;
function stopWatch(){
  let cnt = 1;
  return function(){ // using closure
    console.log(cnt);
    cnt++; 
  }
    
}

// setInterval(stopWatch,1000);

const timer = stopWatch();
setInterval(timer,1000);