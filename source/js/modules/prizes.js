export default () => {

    setTimeout(()=>{

        if(window.performance.navigation.type == 1) {
            window.sessionStorage.removeItem('prizesSession');
        }
    
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
    
    // в то время, как timePassed идёт от 0 до 300000
    // каждую секунду мы изменям значения таймера
    function draw(timePassed) {
        let prizesCasesDesc = document.getElementById('prizesCasesDesc');
        prizesCasesDesc.textContent = `${timePassed}`;
        }
    }
    }, 10350)

}