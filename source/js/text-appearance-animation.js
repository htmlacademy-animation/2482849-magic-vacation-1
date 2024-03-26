function textAppearanceAnimation (element) {
    if (!element) {
        return null;
    }

    // Делим текст принятого элемента по строкам, каждую строчку оборачиваем в span. Результат хранится в lines
    const lines = element.textContent.split('/n').map((line) => {
        const newSpan = document.createElement('span');
        newSpan.textContent = line.trim();
        newSpan.classList.add('line');
        const syms = newSpan.textContent.split('');

        const symsSpans = syms.map((symbol) => {
            const newSpan = document.createElement('span');
            newSpan.classList.add('letter');
            newSpan.classList.add('letter--prepared');
            newSpan.classList.add('letter--appeared');

            newSpan.textContent = symbol;
            return newSpan;
        })

        newSpan.textContent = '';
        for (const span of symsSpans) {
            newSpan.appendChild(span);
        }
        return newSpan;
    });

    element.textContent = '';
    for (const line of lines) {
        element.appendChild(line);
    }

    return element;
}

export default textAppearanceAnimation;