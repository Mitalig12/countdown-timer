let timerInterval;
let timeInSeconds = 300; // Set the time in seconds (5 minutes in this example)

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimerDisplay(seconds) {
  const timerDisplay = document.getElementById('timer');
  timerDisplay.textContent = formatTime(seconds);
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      timeInSeconds--;

      if (timeInSeconds <= 0) {
        clearInterval(timerInterval);
        timerInterval = null;
      }

      updateTimerDisplay(timeInSeconds);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timeInSeconds = 300; // Reset to the initial time (5 minutes in this example)
  updateTimerDisplay(timeInSeconds);
}

updateTimerDisplay(timeInSeconds);