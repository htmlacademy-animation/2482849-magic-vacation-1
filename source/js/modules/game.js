export default () => {

    if(window.performance.navigation.type == 1) {
        window.sessionStorage.removeItem('session');
    }

    if (!window.sessionStorage.getItem('session')) {
        window.sessionStorage.setItem('session', '1');
        let start = 0; // запомнить время начала

        let timer = setInterval(function() {
        // сколько времени прошло с начала анимации?
        let timePassed = start + 1000;
        start = start + 1000;

        if (timePassed > 300000) {
        clearInterval(timer); // закончить анимацию через 5 min
        return;
        }
        // отрисовать анимацию на момент timePassed, прошедший с начала анимации
        draw(timePassed);
}, 1000);

// в то время, как timePassed идёт от 0 до 300000
// каждую секунду мы изменям значения таймера
function draw(timePassed) {
    let counter = document.querySelector('.game__counter');
    function nilFirst(t) {
        if (t.toString().length === 1) return '0' + t;
        return t.toString();
    }
    function toTime(sec = 0) {
        // так как на вход приходят милисекунды, преобразуем в секунды
        sec = sec/1000;
        return nilFirst(Math.trunc(sec / 60)) + ':' + nilFirst(sec % 60)
    }
    counter.textContent = `${toTime(timePassed)}`
    }
}
}