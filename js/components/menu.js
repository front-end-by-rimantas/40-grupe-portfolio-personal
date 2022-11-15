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

    // level2 menu
    const level2DOM = document.getElementById('blog');

    level2DOM.addEventListener('mouseover', () => {
        let HTML2 = `<div class = "level2box">
                         <a class="link level2" href="#">blog home</a>
                          <a class="link level2" href="#">blog single</a>
                      </div>`
        level2DOM.innerHTML += HTML2;
    })

    level2DOM.addEventListener('mouseout', () => {
        let HTML2 = 'blog'
        level2DOM.innerHTML = HTML2;

    })



    return [false, 'OK'];
}
export default renderMenu;
// /* <i class="fa fa-angle-down"></i> */