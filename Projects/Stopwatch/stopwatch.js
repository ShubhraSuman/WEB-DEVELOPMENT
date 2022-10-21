let seconds = 0;
let tens= 0;
let getSeconds = document.getElementById('seconds');
let getTens = document.getElementById('tens');
let start = document.getElementById('start');
let interval;
start.addEventListener("click",setIntrval);
function setIntrval(){
  //The setInterval() method calls a function at specified intervals (in milliseconds).
  interval = setInterval(startClock,100);
}
function startClock()
{
  tens++;
  if(tens<=9)
    {
      getTens.innerHTML = '0' + tens;
    }
  else if(tens>99)
    {
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
  else if(tens>9)
    {
        getTens.innerHTML = tens;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}
function stop(){
  // The clearInterval() method clears a timer set with the setInterval() method.
    clearInterval(interval);
}
function reset(){
    getSeconds.innerHTML ='00';
    getTens.innerHTML = '00';
}
