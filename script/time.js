function updateTime() {
    var now = new Date();
    var hours = (now.getUTCHours() + 2) % 24; // Add 2 hours to the UTC time and take modulo 24
    var minutes = now.getUTCMinutes();
    var timeString = hours.toString().padStart(2, '0') + ':' + minutes.toString().padStart(2, '0');
    document.getElementById('time').textContent = timeString;
  }
  updateTime(); // Call the function to display the time immediately

  setInterval(updateTime, 1000); // Update the time every second