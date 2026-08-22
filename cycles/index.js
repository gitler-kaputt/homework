// Задача 1.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}
// Задача 2.
let factorial = 1;
const num = +prompt("Введите число", 1);
for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}
console.log(`Факториал числа ${num} равен: ${factorial}`);
// Задача 3.
let board = "";
for (let i = 1; i <= 8; i++) {
  let row = "";
  for (let j = 1; j <= 8; j++) {
    if ((i + j) % 2 === 0) {
      row += "#";
    } else {
      row += " ";
    }
  }
  board += "\n";
}
console.log(board);
