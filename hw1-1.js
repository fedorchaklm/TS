/**
 #dYQNrBV
 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
 Вивести кожну змінну за допомогою: console.log
 **/
var str = 'hello';
var str2 = 'owu';
var str3 = 'com';
var str4 = 'ua';
var num = 1;
var num2 = 10;
var num3 = -999;
var num4 = 123;
var num5 = 3.14;
var num6 = 2.7;
var num7 = 16;
var bl = true;
var bl2 = false;
console.log(str, str2, str3, str4, num, num2, num3, num4, num5, num6, num7, bl, bl2);
/**
 #6Qb97gsv
 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
 **/
var firstName = 'Liubov';
var middleName = 'Mykolaivna';
var lastName = 'Stukalo';
var person = firstName + " " + middleName + " " + lastName;
console.log(person);
/**
 #4N0y5tufA
 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
 let a = 100; let b = '100'; let c = true;
 **/
var a = 100;
var b = '100';
var c = true;
console.log(typeof a, typeof b, typeof c);
/**
 #ruUtWDUI
 Додаткове для тих хто цікавився prompt`oм
 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
 **/
var mainName = prompt('Enter your first name');
var secondName = prompt('Enter your last name');
var age = +prompt('Enter your age');
console.log("My name is " + mainName + " " + secondName + ". I am " + age + ".");
