// Задание 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

Object.assign(user, { mood: 'happy' });
user['hobby'] = 'javasript';
user.premium = false;
for (let one of Object.entries(user)) {
  console.log(`${one[0]}:${one[1]}`);
}
