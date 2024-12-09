/**
 #y7crMeFwHcS
 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
 **/
for (var i_1 = 0; i_1 < 10; i_1++) {
    document.write('<div>I am div - element</div>');
}
/**
 #TYj7ncx
 - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
 **/
for (var i_2 = 0; i_2 < 10; i_2++) {
    document.write("<div>I am " + (i_2 + 1) + " - element</div>");
}
/**
 #uzkt71dp
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
 **/
var i = 0;
while (i < 10) {
    document.write('<h1>I am h1</h1>');
    i++;
}
/**
 #OeT7t3uUMFi
 - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
 **/
var j = 0;
while (j < 10) {
    document.write("<h1>I am " + (j + 1) + " - h1</h1>");
    j++;
}
/**
 #vLSZKMlO
 - Використовуючи данні з масиву, за допомоги document.write та циклу
 побудувати структуру по шаблону
 Масив: let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

 ШАБЛОН:
 <ul>
 <li>ITEM OF ARRAY</li>
 </ul>
 замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
 **/
var listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
var str = '<ul>';
for (var _i = 0, listOfItems_1 = listOfItems; _i < listOfItems_1.length; _i++) {
    var item = listOfItems_1[_i];
    str += "<li>" + item + "</li>";
}
str += '</ul>';
document.write(str);
var products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://www.yogi-life.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FrrSprveWTaK8LxYu05N5&w=640&q=75'
    },
];
for (var _a = 0, products_1 = products; _a < products_1.length; _a++) {
    var product = products_1[_a];
    document.write("\n        <div class=\"product-card\">\n            <h3 class=\"product-title\">" + product.title + ". Price - " + product.price + "</h3>\n            <img src=\"" + product.image + "\" alt=\"" + product.title + "\" class=\"product-image\">\n        </div>");
}
var users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
// - користувачів зі статусом true
for (var _b = 0, users_1 = users; _b < users_1.length; _b++) {
    var user = users_1[_b];
    if (user.status) {
        console.log(user);
    }
}
// - користувачів зі статусом false
for (var _c = 0, users_2 = users; _c < users_2.length; _c++) {
    var user = users_2[_c];
    if (!user.status) {
        console.log(user);
    }
}
// - користувачів які старші за 30 років
for (var _d = 0, users_3 = users; _d < users_3.length; _d++) {
    var user = users_3[_d];
    if (user.age > 30) {
        console.log(user);
    }
}
