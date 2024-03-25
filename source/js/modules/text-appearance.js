import textAppearanceAnimation from "../text-appearance-animation.js"; 

function textAppearance () {
    const titleMain = document.querySelector('.intro__title');
    const introDate = document.querySelector('.intro__date');
    textAppearanceAnimation(titleMain);
    textAppearanceAnimation(introDate);
}

export default textAppearance;