//1
/*
function showMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(showMin(7, 3));

//2
function evenOddNumbers(n) {   
    if (n % 2 === 0) {
        return ('Число четное');
    } else {
        return ('Число нечетное');
    }
}

alert(evenOddNumbers(6));
alert(evenOddNumbers(7));

//3.1
function squareNumber(num) {
    console.log(num ** 2);
}

squareNumber(54);

//3.2
function squareNumber(num) {
    return num ** 2;
}

let result = squareNumber(5);

console.log(result);

//4
function checkAge() {
    let checkAge = prompt('Сколько вам лет?');

    if (checkAge < 0 || checkAge === 0 || checkAge === '') {
        alert('Вы ввели неправильное значение');
    } 
    else if (checkAge <= 12) {
        alert('Привет, друг!');
    }
    else if (checkAge >= 13) {
        alert('Добро пожаловать!');
    }
           
}

checkAge();

//5
function numberControl(a, b) {
    
    if (isNaN (Number(a))) {
        return console.log('Одно или оба значения не являются числом');
    }

    if (isNaN (Number(b))) {
        return console.log('Одно или оба значения не являются числом');
    }

    return console.log(a * b);
}

numberControl('не число', 6);
numberControl(8, 6);

//6
function askNumber() {
    let a = prompt('Введите любое число');

    if (isNaN (Number(a))) {
        return alert('Переданный параметр не является числом');
    }   

    return alert(`${a} в кубе равняется ${a ** 3}`);
}

askNumber();
*/