// Задача 1.
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}
// Задача 2.
let factorial = 1;
let num = prompt("Введите число меньше 10", 1);
for (let i = 1; i <= num; i++) {
  factorial *= i;
}
console.log(factorial);
// Задача 3.
let board = "";
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if ((i + j) % 2 === 0) {
      board += "#";
    } else {
      board += " ";
    }
  }
  board += "\n";
}
console.log(board);
