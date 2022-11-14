function renderMenu(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Nepavyko rasti selector'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<a class="link" id = "${item.title}" href="#">${item.title}</a>`
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}
export default renderMenu;
/* <i class="fa fa-angle-down" aria-hidden="true"></i> */

// const level2DOM = document.getElementById('blog');
// console.log(level2DOM);
