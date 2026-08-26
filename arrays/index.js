const users = [
  {
    name: "Alex",
    age: 24,
    isAdmin: false,
  },
  { name: "Bob", age: 13, isAdmin: false },
  {
    name: "John",
    age: 31,
    isAdmin: true,
  },
  {
    name: "Jane",
    age: 20,
    isAdmin: false,
  },
];
users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);
console.log(users);
// Задание 2.
function getUserAverageAge(users) {
  let sum = 0;

  users.forEach((user) => {
    sum += user.age;
  });

  return sum / users.length;
}
console.log(getUserAverageAge(users));
// Задание 3.
function getAllAdmins(users) {
  return users.filter((user) => user.isAdmin === true);
}
console.log(getAllAdmins(users));
// Задание 4.
function first(arr, n) {
  if (n === undefiner) {
    return arr;
  } я ничего не понял
}
