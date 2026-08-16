const deadline = new Date("2025-08-27 15:30:00");

// Функция для расчёта времени
function formatTime(days, hours, minutes, seconds) {
  return `${days} д : ${hours} ч : ${minutes} м : {seconds} с`;
}

// Функция, которая будет вызываться каждую секунду
function updateTimer() {
  const now = new Date();
  const distance = deadline - now;

  if (distance < 0) {
    // Отсчёт завершён
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Время вышло!";
    return;
  }

  // Рассчитываем дни, часы, минуты и секунды
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Обновляем содержимое элемента
  document.getElementById("timer").innerHTML = formatTime(
    days,
    hours,
    minutes,
    seconds,
  );
}

// Запускаем таймер
let timerInterval = setInterval(updateTimer, 1000);

// const totalSeconds = 27 * 24 * 3600 + 7 * 3600 + 40 * 60 + 49; // переводим всё в секунды

// let remaining = totalSeconds;

// function formatTime(seconds) {
//   const days = Math.floor(seconds / (24 * 3600));
//   const hours = Math.floor((seconds % (24 * 3600)) / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secs = Math.floor(seconds % 60);

//   return `${days} д : ${hours} ч : ${minutes} м : ${secs} с`;
// }

// const interval = setInterval(() => {
//   process.stdout.write("\r" + formatTime(remaining));
//   remaining--;
//   if (remaining < 0) {
//     clearInterval(interval);
//     console.log("\nВремя вышло!");
//   }
// }, 1000);
