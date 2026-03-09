let date = new Date();
let hours = date.getHours(); 
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let ampm = hours >= 12 ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12;

function updateClock() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours > 12) {
    hours = 1;
    ampm = ampm === 'AM' ? 'PM' : 'AM';
  }

  const hh = String(hours).padStart(2, '0');
  const mm = String(minutes).padStart(2, '0');
  const ss = String(seconds).padStart(2, '0');
  document.getElementById('clock').textContent = `${hh} : ${mm} : ${ss} ${ampm}`;
}

setInterval(updateClock, 1000);
updateClock();