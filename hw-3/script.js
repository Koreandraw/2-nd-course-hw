/*
//1
let password = 'lorem';
let type = prompt('Введите пароль');
if (type === 'lorem') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');  
}

//2
const c = Number(4);
if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');  
}

//3
const d = Number(101);
const e = Number(99);
if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');  
}

//4
const a = 2;
const b = 3;
alert(a + b);
// либо так, но первый вариант кажется проще. Как корректнее?
const a = Number(2);
const b = Number(3);
alert(a + b);
*/
//5
let season = Number(prompt('Давайте угадаю сезон? Введите номер текущего месяца'));
let monthNumber = Number(12);
switch (season) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break; 
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;   
    case 6:
    case 7:
    case 8:
        console.log('Лето'); 
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень'); 
        break;  
    default:
        break;
}