// Cоздать функцию greeting, которая принимает имя и выводит приветствие, используя переданное имя, в консоль.
// Необходимо у пользователя запросить имя и вызвать функцию greeting, передав туда данное значение.
const userName=prompt("Как Вас зовут?");
greeting(userName);

function greeting(userN) {
    console.log(`Hello, ${userN}!`);
}