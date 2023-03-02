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

whatSeasons()