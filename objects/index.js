const product = {
  name: "Ноутбук",
  price: 60000,
  discount: undefined,
  characteristics: {
    brand: "Apple",
    processor: "M1",
  },
  checkDiscount: (product) => {
    if ("discount" in product) {
      console.log(`Скидка ${product.discount}%`);
    } else {
      console.log("Скидки нет");
    }
  },
};

// product.checkDiscount();

// Задача 1.
const person = {
  firstName: "Акакий",
  lastName: "Акакиев",
  age: 67,
  profession: "Сварщик",
  hobby: "смотреть поле чудес",
};
console.log(person);
// Задача 2.
const isEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};
console.log(isEmpty());
// Задача 3.
const task = {
  title: "убраться",
  description: "помыть посуду, заправить постель, пропылесосить",
  isCompleted: false,
};
const cloneAndModify = (object, modification) => {
  return { ...object, ...modification };
};
console.log(task);

const task2 = cloneAndModify(task, {
  title: "сходить на прогулку",
  description: "забрать заказ",
  isCompleted: true,
});

for (const key in task2) {
  console.log(task2);
}
// Задача 4.
const callAllMethods = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      obj[key]();
    }
  }
};

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
  property: "Это не метод",
};
callAllMethods(myObject);
