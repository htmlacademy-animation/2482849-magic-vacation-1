export default () => {
    if(window.performance.navigation.type == 1) {
        window.sessionStorage.removeItem('prizesSession');
    }

    if(window.performance.navigation.type == 1) {
        window.sessionStorage.removeItem('prizesCodesSession');
    }

    // Счётчик второстепенных призов
    setTimeout(()=>{
        if (!window.sessionStorage.getItem('prizesSession')) {
            window.sessionStorage.setItem('prizesSession', '1');
            let start = 0; // запомнить время начала
                let timer = setInterval(function() {
                    // сколько времени прошло с начала анимации?
                    let timePassed = start + 1;
                    start = start + 1;
                    if (timePassed >= 7) {
                    clearInterval(timer); // закончить анимацию через 5 min
                    return;
                    }
                    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
                    draw(timePassed);
    }, 83);
    // в то время, как timePassed идёт от 0 до 7
    // каждую секунду мы изменям значения таймера
    function draw(timePassed) {
        const prizesCasesDesc = document.getElementById('prizesCasesDesc');
        prizesCasesDesc.textContent = `${timePassed}`;
        }
    }
    }, 10350)

    // Счётчик второстепенных призов
    setTimeout(()=>{
        if (!window.sessionStorage.getItem('prizesCodesSession')) {
            window.sessionStorage.setItem('prizesCodesSession', '1');
            let start = 0; // запомнить время начала
                let timer = setInterval(function() {
                    // сколько времени прошло с начала анимации?
                    let timePassed = start + 1;
                    start = start + 1;
                    if (timePassed >= 7) {
                    clearInterval(timer); // закончить анимацию через 5 min
                    return;
                    }
                    // отрисовать анимацию на момент timePassed, прошедший с начала анимации
                    drawT(timePassed);
    }, 83.3);
    // в то время, как timePassed идёт от 0 до 7
    // каждую секунду мы изменям значения таймера
    function drawT(timePassed) {
        const prizesRandomNums = ['11', '185', '371', '541', '821', '849', '900'];
        const prizesCodesDesc = document.getElementById('prizesCodesDesc');
        prizesCodesDesc.textContent = `${prizesRandomNums[timePassed]}`;
        }
    }
    }, 17350)

}


// const prizesRandomNums =['11', '185', '371', '541', '821', '849', '900'];