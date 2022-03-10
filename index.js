const myNumber = 42;

// localStorage.removeItem('number'); // убрать значение по ключу
// console.log(localStorage.getItem('number'));  // получить значение по ключу
// localStorage.setItem('number', myNumber.toString());  // установить значение по ключу
// console.log(localStorage.getItem('number'));
// localStorage.clear();  // удалить все данные из localStorage

const object = {
  name: "Max",
  age: 20
};
localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Vladilen';

// console.log(person);

/////============================= можно использовать для того чтоб синхронизировать данные во вкладках, например, в CRM

window.addEventListener('storage', event => {
  console.log(event);
})

window.onstorage = () => {}

// local storage - 5 Mb
// coockie улетают с данными на сервер, а локал - локальное хранилище, к которому есть доступ только у юзера