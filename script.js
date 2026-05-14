const vacationDate = new Date("May 29, 2026 00:00:00").getTime();

    function updateCountdown() {

      const now = new Date().getTime();

      const distance = vacationDate - now;

      const days = Math.ceil(distance / (1000 * 60 * 60 * 24));

      if(distance > 0){

        document.getElementById("days").innerHTML = days;

      } else {

        document.getElementById("days").style.display = "none";

        document.querySelector(".label").style.display = "none";

        document.getElementById("message").innerHTML =

          "✈️ Your Sint Maarten vacation has started! 🌴";

      }

    }

    updateCountdown();

    setInterval(updateCountdown, 1000);