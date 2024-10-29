'use strict';

// Get the elements by ID
const hour = document.getElementById("hour");
const mins = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

// Function to update the clock
function clock() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secondsTime = new Date().getSeconds();
    let light = "AM";

    if (hours >= 12) {
        light = "PM";
    }

    // Convert to 12-hour format
    hours = hours % 12;
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zero if needed
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondsTime < 10) {
        secondsTime = "0" + secondsTime;
    }

    // Update the content of the elements
    hour.innerText = hours;
    mins.textContent = minutes;
    seconds.textContent = secondsTime;
    ampm.textContent = light;
}

// Run the clock function every second
setInterval(clock, 1000);