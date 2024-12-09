/**
 #dYQNrBV
 Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
 Вивести кожну змінну за допомогою: console.log
 **/

const str: string = 'hello';
const str2: string = 'owu';
const str3: string = 'com';
const str4: string = 'ua';
const num: number = 1;
const num2: number = 10;
const num3: number = -999;
const num4: number = 123;
const num5: number = 3.14;
const num6: number = 2.7;
const num7: number = 16;
const bl: boolean = true;
const bl2: boolean = false;
console.log(str, str2, str3, str4, num, num2, num3, num4, num5, num6, num7, bl, bl2);

/**
 #6Qb97gsv
 Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
 **/

const firstName: string = 'Liubov';
const middleName: string = 'Mykolaivna';
const lastName: string = 'Stukalo';
const person: string = `${firstName} ${middleName} ${lastName}`
 console.log(person);
/**
 #4N0y5tufA
 За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
 let a = 100; let b = '100'; let c = true;
 **/

let a: number = 100;
let b: string = '100';
let c: boolean = true;
console.log(typeof a, typeof b, typeof c);

/**
 #ruUtWDUI
 Додаткове для тих хто цікавився prompt`oм
 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
 **/

const mainName: string = prompt('Enter your first name');
const secondName: string = prompt('Enter your last name');
const age: number = +prompt('Enter your age');
console.log(`My name is ${mainName} ${secondName}. I am ${age}.`);


