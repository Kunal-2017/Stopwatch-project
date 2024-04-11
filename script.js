var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;
// start function when button click
function start() {
  timer = true;
  stopwatch();
}
// stop function when button click
function stop() {
  timer = false;
}
// reset function when button click
function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hour").innerHTML = hr + "0";
  document.getElementById("min").innerHTML = min + "0";
  document.getElementById("sec").innerHTML = sec + "0";
  document.getElementById("count").innerHTML = count + "0";
}
// stopwatch function to count hr min sec count
function stopwatch() {
    // setTimeout() function is used to execute asynchorously after every 10 milisecond
  setTimeout("stopwatch()", 10);
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      sec = sec + 1;
      count = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }
    var hrString = hr;
    var minString = min;
    var secString = sec;
    var countString = count;
    // if hours or min sec or count digit value less than 10 then 0 add to prefix with that variable
    if (hr < 10) {
      hrString = "0" + hrString;
    }
    if (min < 10) {
      minString = "0" + minString;
    }
    if (sec < 10) {
      secString = "0" + secString;
    }
    if (count < 10) {
      countString = "0" + countString;
    }
    document.getElementById("hour").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
  }
}
