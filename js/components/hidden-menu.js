function renderHiddenMenu(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Nepavyko rasti selector'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    const bodyDOM = document.getElementsByTagName('body');
    const sectionDOM = document.getElementsByTagName('section');
    // console.log(sectionDOM);
    DOM.addEventListener('click', () => {
        if (DOM.innerHTML.includes("home")) {
            DOM.innerHTML = '';
            bodyDOM[0].classList.remove('scrollbar-scroll');
            // sectionDOM[0].classList.remove('scroll');
        } else {
            let HTML = '<div class = "box"><div class = "menu-box">';
            for (const item of data) {
                HTML += `<a class="link onemenu" href = "#">${item.title}</a>`
            }
            HTML += '</div></div>'
            bodyDOM[0].classList.add('scrollbar-scroll');
            // sectionDOM[0].classList.add('scroll');
            DOM.innerHTML = HTML;
        }
    })
    return [false, 'OK'];
}
export default renderHiddenMenu;