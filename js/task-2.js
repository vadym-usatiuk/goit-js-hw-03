// Задание 2
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. 
// Функция возвращает число - количество свойств.

// Вызовы функции для проверки работоспособности твоей реализации.

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

function countProps(obj) {
    return Object.keys(obj).length;
  }
  