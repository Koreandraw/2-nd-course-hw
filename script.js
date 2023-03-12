//игра 1
function whatSeasons() {
    let userAnswer = prompt('Я хочу сыграть с тобой в одну игру. Введи номер текущего месяца, а я угадаю время года');

    if (isNaN(Number(userAnswer))) {
        return alert('Ошибся! Введи число!');
    }   
    
    if (userAnswer === 12 || (userAnswer >= 1 && userAnswer <= 2)) {
        return alert('Сейчас зима!');
    }
    else if (userAnswer >= 3 && userAnswer <= 5) {
        return alert('Сейчас весна!');
    }
    else if (userAnswer >= 6 && userAnswer <= 8) {
        return alert('Сейчас лето!');
    }
    else if (userAnswer >= 9 && userAnswer <= 11) {
        return alert('Сейчас осень!');    
    }     
   
}

//игра 2
function fruitGame() {
    let fruitsArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград ', 'Персик', 'Апельсин', 'Мандарин'];
    
    fruitsArr.sort(() => Math.random() - 0.5);

    alert(fruitsArr);
    
    fruitsArr = fruitsArr.map(function (e) { 
        return e.toLowerCase()
    });    

    let question1 = String(prompt('Чему равнялся первый элемент массива?'));      
        
    let question2 = String(prompt('Чему равнялся последний элемент массива?')); 
            
    if (fruitsArr[0] === question1 && fruitsArr[fruitsArr.length - 1] === question2) {
        alert('Поздравляю! Угадали!');
    } else if (fruitsArr[0] === question1 || fruitsArr[fruitsArr.length - 1] === question2) {
        alert('Вы были близки к победе!');
    } else {
        alert('Неверно! Попробуйте еще!');
    }    
}

