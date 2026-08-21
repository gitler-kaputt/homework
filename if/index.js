let number = 7;
let age = "18";
let discount;
let userName = "user";
let password = "123456";

// Задача 1.
if (number % 2 === 0) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}
// Задача 2.
if (age < 18) {
  discount = 10;
} else if (age >= 18 && age <= 65) {
  discount = 20;
} else if (age > 65) {
  discount = 30;
}
console.log(discount);
// switch case
switch (age) {
  case "age < 18":
    console.log("Скидка 10%");
    break;
  case "age >= 18 && <= 65":
    console.log("Скидка 20%");
    break;
  case "age > 65":
    console.log("Скидка 30%");
  default:
    console.log("Что-то пошло не так");
}
// Задача 3.
userName = prompt("Введите имя пользователя");
password = prompt("Введите пароль");
if ((userName === "admin" || userName === "user") && password === "123456") {
  alert("Доступ разрешен");
} else {
  alert("Доступ запрещен");
}
// Задача 4.
let Weight;
let Delivery;
let Cost;
let TotalCost;
Weight = prompt("Вес посылки");
Delivery = prompt("Тип доставки(Стандарт, Экспресс, Премиум");
if (Weight <= 0) {
  alert("Некорректный вес посылки");
}
switch (Delivery) {
  case "Delivery === Стандарт":
    console.log("Стандарт");
    break;
  case "Delivery === Экспресс":
    console.log("Экспресс");
    break;
  case "Delivery === Премиум":
    console.log("Премиум");
    break;
  default:
    console.log("Неверный тип доставки");
}
if (Weight < 1) {
  Cost = $5;
} else if (Weight >= 1 && Weight <= 5) {
  Cost = $10;
} else if (Weight > 5) {
  Cost = $15;
}
switch (Delivery) {
  case "Стандарт":
    коэффициент = 1;
    break;
  case "Экспресс":
    коэффициент = 1.5;
    break;
  case "Стандарт":
    коэффициент = 2;
    break;
  default:
    коэффициент = 1.0;
    console.log("Тип доставки не распознан");
    break;
}
TotalCost = Cost * коэффициент;
{
  alert(`Итоговая стоимость доставки : ${totalCost}`);
}
