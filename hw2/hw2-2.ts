/**
 Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
 #I2XsG6f
 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 **/
const getSquareOfRectangle2 = (a: number, b: number): number => a * b;

console.log(getSquareOfRectangle2(4, 8));
/**
 #ETGAxbEn8l
 - створити функцію яка обчислює та повертає площу кола з радіусом r
 **/
const getSquareOfCircle2 = (r: number): number => Math.PI * r * r;

console.log(getSquareOfCircle2(4));

/**
 #Mbiz5K4yFe7
 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
 **/
const getSquareOfCylinder2 = (r: number, h: number): number => 2 * Math.PI * r * h;

console.log(getSquareOfCylinder2(5, 10));

/**
 #SIdMd0hQ
 - створити функцію яка приймає масив та виводить кожен його елемент
 **/
const getItemOfArray2 = (array: Array<any>): void => {
    for (const item of array) {
        console.log(item);
    }
}

getItemOfArray2([5, 4, 7, 11, 2, 75]);

/**
 #59g0IsA
 - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
 **/
const writer2 = (text: string): void => document.write(`<p>${text}</p>`);

writer2('hello world')

/**
 #hOL6126
 - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
 **/
const writerUl2 = (text: string): void => {
    document.write(`
        <ul>
            <li>${text}</li>
            <li>${text}</li>
            <li>${text}</li>
        </ul>
    `);
}

writerUl2('lorem');

/**
 #0Kxco1edSN
 - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
 **/
const writerUlTimes2 = (text: string, times: number = 3): void => {
    let str = '<ul>'

    for (let i = 0; i < times; i++) {
        str += `<li>${text}</li>`;
    }

    str += '</ul>'
    document.write(str);
}

writerUlTimes2('hello', 5);

/**
 #gEFoxMMO
 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
 **/
const writerUArrayUl2 = (array: Array<any>): void => {
    let str = '<ul>'

    for (const item of array) {
        str += `<li>${item}</li>`;
    }
    str += '</ul>'
    document.write(str);
}

writerUArrayUl2([5, 'apple', true, 8, 'kiwi', false]);

/**
 #bovDJDTIjt
 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
 **/
const writerDiv2 = (usersArray: Array<User>): void => {
    for (const user of usersArray) {
        document.write(`        
            <div>
                <p>${user.id}</p>
                <p>${user.name}</p>
                <p>${user.age}</p>
            </div>`);
    }
}

writerDiv2([{id: 1, name: 'Ann', age: 24}, {id: 2, name: 'Ben', age: 18}, {id: 3, name: 'Kate', age: 34}]);

/**
 #pghbnSB
 - створити функцію яка повертає найменьше число з масиву
 **/
const getMinNumberOfArray2 = (array: Array<number>): number => {
    let minNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return minNumber;
}

console.log(getMinNumberOfArray2([8, 4, 7, 0, 5, 7, 1]));

/**
 #EKRNVPM
 - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 **/
const sumOfArray2 = (array: Array<number>): number => {
    let sum = 0;
    for (const item of array) {
        sum += item;
    }
    return sum;
}

console.log(sumOfArray2([8, 4, 7, 0, 5, 7, 1]));

/**
 #kpsbSQCt2Lf
 - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
 Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 **/
const swap2 = (arr: Array<number>, index1: number, index2: number): Array<number> | string => {
    if (index1 < arr.length && index2 < arr.length) {
        const value = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = value;
        return arr;
    } else {
        return "Некорректний індекс";
    }

}

console.log(swap2([11, 22, 33, 44], 0, 1));

/**
 #mkGDenYnNjn
 - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
 Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
 **/
enum ExchangeCurrency {
    EUR = 'EUR',
    USD = 'USD'
}

const exchange2 = (sumUAH: number, currencyValues: Array<Currency>, exchangeCurrency: ExchangeCurrency) => {
    let exchangeRate: number;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            exchangeRate = item.value;
        }
    }
    return sumUAH / exchangeRate;
}

console.log(exchange2(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], ExchangeCurrency.USD));