
function countdown(targetDate) {
    let daysElement = document.getElementById("days");
    let hoursElement = document.getElementById("hours");
    let minutesElement = document.getElementById("minutes");
    let secondsElement = document.getElementById("seconds");
    
    let countdownInterval = setInterval(() => {
      let now = new Date().getTime();
      let distance = targetDate - now;
      
      if (distance < 0) {
        clearInterval(countdownInterval);
        daysElement.innerText = "0";
        hoursElement.innerText = "0";
        minutesElement.innerText = "0";
        secondsElement.innerText = "0";
        // Aquí puedes agregar la lógica que desees al finalizar la cuenta regresiva
        return;
      }
      
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      daysElement.innerText = days;
      hoursElement.innerText = hours;
      minutesElement.innerText = minutes;
      secondsElement.innerText = seconds;
    }, 1000);
  }

