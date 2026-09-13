export const countDownDate = new Date("Oct 11, 2026 03:00:00").getTime();

let timerId = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;
  if (distance < 0) {
    clearInterval(timerId);
    document.getElementById("timer").innerHTML = "ИСТЁК";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  document.getElementById("timer").innerHTML =
    days +
    " д : " +
    hours +
    " ч : " +
    formattedMinutes +
    " м : " +
    formattedSeconds +
    " с";
}, 1000);
