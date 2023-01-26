//Задание 1
let text;
text = 10;
alert(text);
alert(20);

// Задание 2
let year;
year = 2007;
alert(year);

// Задание 3
let creator;
creator = "Брендан Эйх";
alert(creator);

// Задание 4
let a = 10;
let b = 2;
alert(a + b);
alert(a - b);
alert(a * b);
alert(a / b);

// Задание 5
let x = 2 ** 5;
let result = x;
alert(result);


// Задание 6
let a1 = 9;
let b2 = 2;
let c3 = a1 / b2;
alert(c3);

// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--

// Задание 8
let age = prompt("Сколько вам лет?");
alert(age);

// Задание 9
let user = {
    name: 'Вася',
    age: 25,
    isAdmin: true
}
user['city of residence'] = 'Вроцлав';
user.age = 27;
delete user['city of residence'];
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// Задание 10
let userName = prompt("Как вас зовут?");
alert("Привет" + userName + "!");
