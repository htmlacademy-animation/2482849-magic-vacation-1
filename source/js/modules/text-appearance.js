import textAppearanceAnimation from "../text-appearance-animation.js"; 

function textAppearance () {
    const titleMain = document.querySelector('.intro__title');
    const introDate = document.querySelector('.intro__date');
    const sliderItemTitle = document.querySelector('.slider__item-title');
    const prizesTitle = document.querySelector('.prizes__title');
    const rulesTitle = document.querySelector('.rules__title');
    const gameTitle = document.querySelector('.game__title');


    textAppearanceAnimation(titleMain);
    textAppearanceAnimation(introDate);
    textAppearanceAnimation(sliderItemTitle);
    textAppearanceAnimation(prizesTitle);
    textAppearanceAnimation(rulesTitle);
    textAppearanceAnimation(gameTitle);
}

export default textAppearance;