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
        if (item.title === 'pages' || item.title === 'blog') {
            HTML += `<a class="link" id = "${item.title}1" href="#">${item.title} ⮛</a>`
        } else {
            HTML += `<a class="link" id = "${item.title}1" href="#">${item.title}</a>`
        }
    }
    DOM.innerHTML = HTML;

    // level 2 menu

    const level2DOM = document.getElementById('blog1');
    level2DOM.addEventListener('mouseenter', () => {
        level2DOM.innerHTML = `blog ⮛<div class = "level2box">
                        <div class = "level2innerbox">
                            <a class="link level2" href="#">blog home</a>
                            <a class="link level2" href="#">blog single</a>
                        </div>
                    </div>`
    })
    level2DOM.addEventListener('mouseleave', () => {
        level2DOM.innerHTML = 'blog ⮛'
    })


    const level21DOM = document.getElementById('pages1');
    level21DOM.addEventListener('mouseenter', () => {
        level21DOM.innerHTML = `pages ⮛<div class = "level2box">
                        <div class = "level2innerbox">
                            <a class="link level2" href="#">elements</a>
                            <a class="link level2" href="#">level 2</a>
                        </div>
                    </div>`
    })
    level21DOM.addEventListener('mouseleave', () => {
        level21DOM.innerHTML = 'pages ⮛'
    })



    return [false, 'OK'];
}
export default renderMenu;