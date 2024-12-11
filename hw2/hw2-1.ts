/**
 #I2XsG6f
 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 **/
function getSquareOfRectangle(a: number, b: number): number {
    return a * b;
}

console.log(getSquareOfRectangle(4, 8));

/**
 #ETGAxbEn8l
 - створити функцію яка обчислює та повертає площу кола з радіусом r
 **/
function getSquareOfCircle(r: number): number {
    return Math.PI * r * r;
}

console.log(getSquareOfCircle(4));

/**
 #Mbiz5K4yFe7
 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 **/
function getSquareOfCylinder(r: number, h: number): number {
    return 2 * Math.PI * r * h;
}

console.log(getSquareOfCylinder(5, 10));

/**
 #SIdMd0hQ
 - створити функцію яка приймає масив та виводить кожен його елемент
 **/
function getItemOfArray(array: Array<any>): void {
    for (const item of array) {
        console.log(item);
    }
}

getItemOfArray([5, 4, 7, 11, 2, 75]);

/**
 #59g0IsA
 - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
 **/
function writer(text: string): void {
    document.write(`<p>${text}</p>`);
}

writer('hello world')

/**
 #hOL6126
 - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
 **/
function writerUl(text: string): void {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}

writerUl('lorem');

/**
 #0Kxco1edSN
 - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
 **/
function writerUlTimes(text: string, times = 3): void {
    let str = '<ul>'

    for (let i = 0; i < times; i++) {
        str += `<li>${text}</li>`;
    }

    str += '</ul>'
    document.write(str);
}

writerUlTimes('hello', 5);

/**
 #gEFoxMMO
 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
 **/
function writerUArrayUl(array: Array<any>): void {
    let str = '<ul>'

    for (const item of array) {
        str += `<li>${item}</li>`;
    }
    str += '</ul>'
    document.write(str);
}

writerUArrayUl([5, 'apple', true, 8, 'kiwi', false]);

/**
 #bovDJDTIjt
 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
 **/
type User = {
    id: number,
    name: string,
    age: number
}

function writerDiv(usersArray: Array<User>): void {
    for (const user of usersArray) {
        document.write(`        
            <div>
                <p>${user.id}</p>
                <p>${user.name}</p>
                <p>${user.age}</p>
            </div>`);
    }
}

writerDiv([{id: 1, name: 'Ann', age: 24}, {id: 2, name: 'Ben', age: 18}, {id: 3, name: 'Kate', age: 34}]);

/**
 #pghbnSB
 - створити функцію яка повертає найменьше число з масиву
 **/
function getMinNumberOfArray(array: Array<number>): number {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

console.log(getMinNumberOfArray([8, 4, 7, 0, 5, 7, 1]));

/**
 #EKRNVPM
 - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 **/
function sumOfArray(array: Array<number>): number {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(sumOfArray([8, 4, 7, 0, 5, 7, 1]));

/**
 #kpsbSQCt2Lf
 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
 Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 **/
function swap(arr: Array<number>, index1: number, index2: number): Array<number> | string {
    if (index1 < arr.length && index2 < arr.length) {
        const value = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = value;
        return arr;
    } else {
        return "Некорректний індекс";
    }

}

console.log(swap([11, 22, 33, 44], 0, 1));

/**
 #mkGDenYnNjn
 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
 Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
 **/
type Currency = {
    currency: 'USD' | 'EUR',
    value: number
}
function exchange(sumUAH: number, currencyValues: Array<Currency>, exchangeCurrency: string): number {
    let exchangeRate: number;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            exchangeRate = item.value;
        }
    }
    return sumUAH / exchangeRate;
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));