
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });

}

const start = document.querySelector("#start");
const pause = document.querySelector("#pause");
const update = document.querySelector("#update");
var minDigits = document.getElementById("min");
var secDigits = document.getElementById("sec");


startMins = 10;

var countSec = startMins*60;
var timerVar = null;

var countdownIsRunning = false;

function startCounter() {
  countdownIsRunning = true;
  --countSec;

  
  mins = Math.floor(countSec  / 60);
  secs = Math.floor(countSec %60);

  if (secs < 10) {
    secDigits.innerHTML = "0" + secs;
  } else {
    secDigits.innerHTML = secs;
  }
  if ( secs === 1){
    countdownIsRunning=false;
  }
  console.log(`${mins} ${secs}`);

  minDigits.innerHTML = "0" + mins;
}

start.addEventListener("click", () => {
  if (countdownIsRunning == false){
    timerVar = setInterval(startCounter, 1000);
  }
});

pause.addEventListener("click", () => {
  if (timerVar) clearInterval(timerVar);
});

update.addEventListener("click", () => {
  countSec = mins;
  secDigits.innerHTML = "00";
  minDigits.innerHTML = mins;
  clearInterval(timerVar);
});

