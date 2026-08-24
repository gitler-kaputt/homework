// Задача 1.
let basePrice = 100;
let discountPercent = 10;
let taxRate = 0.2;
function calculateFinalPrice() {
  const discountAmount = basePrice * (discountPercent / 100);
  const priceAfterDiscount = basePrice - discountAmount;
  const taxAmount = priceAfterDiscount * taxRate;
  const finalPrice = priceAfterDiscount + taxAmount;
  return finalPrice;
}
console.log(calculateFinalPrice());
// Задача 2.
function checkAccess() {
  const userName = prompt("Введите имя пользователя:");
  const password = +prompt("Введите пароль:");
  if (userName == "Admin" && password == "123456") {
    return "Доступи разрешен";
  } else {
    return "Доступи запрещен";
  }
}
console.log(checkAccess());
// Задача 3.
const getTimeOfDay = function () {
  const time = +prompt("Введите число:");
  if (time >= 0 && time <= 5) {
    return "Ночь";
  }
  if (time >= 6 && time <= 11) {
    return "Утро";
  }
  if (time >= 12 && time <= 17) {
    return "День";
  }
  if (time >= 18 && time <= 23) {
    return "Вечер";
  } else {
    return "Неккоректное время";
  }
};
console.log(getTimeOfDay());
// Задача 4.
function findFirstEven() {
  const start = +prompt("Введите число(начало диапозона):");
  const end = +prompt("Введите число конец диапозона:");
  if (start > end) {
    alert("Ошибка: начальное число больше конечного");
    return null;
  }
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      return i;
    } else {
      return `Четных чисел нет`;
    }
  }
}
console.log(findFirstEven());
