//1
/*
let name = 'js';

console.log(name.toUpperCase());


//2
const products = ['Кошка', 'Кит', 'Комар', 'Носорог'];

const search = 'Ко';

products.forEach((product) => {	
	if (product.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(product);
	}
});

//3
let num = 32.58884;

console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.ceil(num));

//4
const arr = [52, 53, 49, 77, 21, 32];

console.log("Min:", Math.min.apply(null, arr));
console.log("Max:", Math.max.apply(null, arr));

//5
function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(generateNumber(1,10));

//6
function giveMeRandom(n) {

    let arrWithNums = [];
    
    for(i = 0; i <= n / 2; i++) {
        arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    
    return arrWithNums;
}

console.log(giveMeRandom(5));

//7
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(5, 25));

//8
let currentDate = new Date();

console.log(currentDate);

//9
const currentDate = new Date();

const finalDate = new Date(currentDate);

finalDate.setDate(currentDate.getDate() + 73);

console.log(finalDate);

//10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date();

let fullDate = "Дата: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + " - это " + days[myDate.getDay()];

let time = "Время: " + myDate.getHours() + ":" + myDate.getMinutes() + ":" + myDate.getSeconds(); 

console.log(fullDate);
console.log(time);
*/

