    const vacationDate = new Date("July 31, 2026 00:00:00").getTime();
    const vacationEnd = new Date("August 3, 2026 00:00:00").getTime();
        
    function updateCountdown() {
      const now = new Date().getTime();
      const distance = vacationDate - now;
      const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
      if(distance > 0){
        document.getElementById("days").innerHTML = days;
      } else if (now > vacationEnd){
        document.getElementById("days").style.display = "none";
        document.querySelector(".label").style.display = "none";
        document.getElementById("message").innerHTML =
          "Your Jamaica vacation has ended😕";
      } else {
        document.getElementById("days").style.display = "none";
        document.querySelector(".label").style.display = "none";
        document.getElementById("message").innerHTML =
          "✈️ Your Jamaica vacation has started! 🌴";
      }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);