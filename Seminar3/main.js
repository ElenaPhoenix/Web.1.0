//Java Script помогает реагировать на действия пользователей
// let num=5; // задаем переменную
// console.log(num); /* вывод в консоль */

// const num1=10; //задаем константу, ее значение постоянно и неизменно в коде. помогает от случайных ошибок. в основном используют const


// Получить от пользователя 2 числа и вывести в диалоговое окно сумму значений, которые ввел пользователь. Вывод должен выглядеть так: Результат сложения чисел 5 и 2 равен 7.
// function sum(a, b) {
//     return a + b;// a, b - операнды, + - оператор
// }

// function showAllert() {
//     alert("Some allert");
// }

// const firstNum=Number.parseInt(prompt("Введите первое число"));//parseint отрубает из введенного всё, что не подойдет к значению int
// const secondNum=Number.parseFloat(prompt("Введите второе число"));
// alert(`Результат сложения чисел ${firstNum} и ${secondNum} = ${sum(firstNum, secondNum)}`);//если хотим написать вывод текста а в нем значений, то используются ковычки буквы ё.
// showAllert();


// Написать функцию, которая принимает имя пользователя при ее вызове и выводит сообщение с приветствием пользователя по имени в консоль. Проверить работоспособность функции.
// const userName=prompt("Как Вас зовут?");
// helloUser(userName);

// function helloUser(userName) {
//     console.log(`Hello, ${userName}!`);
// }


// Вывести на экран в диалоговом окне текст с сообщением: "Вам хорошо живется?" и кнопками "Ок", "Отмена", для чего нужно использовать confirm. При нажатии на кнопку "Ок" вывести в диалоговом окне текст с сообщением "Тогда мы идем к вам!". При нажатии на кнопку "Отмена" вывести в диалоговом окне текст с сообщением "Ну вы держитесь там!"
// if (confirm("Вам хорошо живется?")) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну вы держитесь там!");
// }


// Задача
// let product = "Бананы";

// switch (product) {
//     case "Мандарины": 
//         alert("Мандарины стоят 100 руб/кг."); 
//             break;
//     case "Бананы": //когда будут бананы, программа спустится в груши и выведет нужное сообщение
//     case "Груши": 
//         alert("Бананы и груши стоят 70 руб/кг."); 
//             break;
//     default: 
//     alert("Нет такого продукта");
// }


// Функция getMaxEvenElement принимает массив с целыми числами. Нужно реализовать функцию так, чтобы она возвращала значение большего элемента массива, который записан в четном индексе, включая 0.
// function getMaxEvenElement(arr) {
//     let max=arr[0];
//     for(let i=2; i<arr.length; i+=2) {
//         if(arr[i]>max) {
//             max=arr[i];
//         }
//     }
//     return max;
// }

// console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); //5
// console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); //31


// Один покупатель старинных уникальных часов хочет приобрести для музея двое часов. В магазине у хозяйки есть n разных часов с соответствующими ценами [p1, ..., pn]. Покупатель хочет полностью использовать свой бюджет. Нужно выяснить, получится ли это.
// function f(clockArr, money) {
//     for (let i = 0; i < clockArr.length-1; i++) {
//         for (let j = i+1; j < clockArr.length; j++) {
//             if(Math.floor((clockArr[i]+clockArr[j])*100)/100==money) {//округляем итоговое число. === - более строгое сравнение, которое учитывает еще и типы данных. если типы данных разные, то false. лучше не давать программе самостоятельности, самим прописывать
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// console.log(f([8.74, 3.12, 9.50, 2.35], 2.35));//false
// console.log(f([1.1, 4.2, 7.5, 0.4], 8.4));//false
// console.log(f([54.10, 20.00, 18.51, 97.75, 35.20, 76.42], 89.3));//true