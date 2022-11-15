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
    level2DOM.addEventListener('mouseenter', () => {
        let HTML2 = `<div class = "level2box">
                         <a class="link level2" href="#">blog home</a>
                          <a class="link level2" href="#">blog single</a>
                      </div>`
        level2DOM.innerHTML += HTML2;
    })
    level2DOM.addEventListener('mouseleave', () => {
        let HTML2 = 'blog'
        level2DOM.innerHTML = HTML2;
    })

    const level21DOM = document.getElementById('pages');
    level21DOM.addEventListener('mouseenter', () => {
        let HTML3 = `<div class = "level2box">
                         <a class="link level2" href="#">elements</a>
                          <a class="link level2" href="#">level 2</a>
                      </div>`
        level21DOM.innerHTML += HTML3;
    })
    level21DOM.addEventListener('mouseleave', () => {
        let HTML3 = 'blog'
        level21DOM.innerHTML = HTML3;
    })



    return [false, 'OK'];
}
export default renderMenu;
// /* <i class="fa fa-angle-down"></i> */