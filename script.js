let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById("display");
const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");
const laps = document.getElementById("laps");

// Update display
function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

// Start/Pause Stopwatch
startStopBtn.addEventListener("click", () => {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
    startStopBtn.innerText = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    startStopBtn.innerText = "Start";
  }
});

// Reset Stopwatch
resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  isRunning = false;
  startStopBtn.innerText = "Start";
  laps.innerHTML = "";
});

// Lap Function
lapBtn.addEventListener("click", () => {
  if (isRunning) {
    let li = document.createElement("li");
    li.innerText = display.innerText;
    laps.appendChild(li);
  }
});

// Initialize display
updateDisplay();
