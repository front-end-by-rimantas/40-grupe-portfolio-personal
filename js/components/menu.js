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
            console.log(item);
            HTML += `<a class="link" id = "${item.title}1" href="#">${item.title}<i class="fa fa-angle-down"></i></a>`
        } else {
            console.log(item);
            HTML += `<a class="link" id = "${item.title}1" href="#">${item.title}</a>`
        }
    }
    DOM.innerHTML = HTML;

    // level2 menu

    const level2DOM = document.getElementById('blog1');
    level2DOM.addEventListener('mouseenter', () => {
        let HTML2 = `<div class = "level2box">
                         <a class="link level2" href="#">blog home</a>
                          <a class="link level2" href="#">blog single</a>
                      </div>`
        level2DOM.innerHTML += HTML2;
    })
    level2DOM.addEventListener('mouseleave', () => {
        let HTML2 = 'blog<i class="fa fa-angle-down"></i>'
        level2DOM.innerHTML = HTML2;
    })

    const level21DOM = document.getElementById('pages1');
    // level21DOM.classList.add('fa fa-angle-down');
    level21DOM.addEventListener('mouseenter', () => {
        let HTML3 = `<div class = "level2box">
                         <a class="link level2" href="#">elements</a>
                          <a class="link level2" href="#">level 2</a>
                      </div>`
        level21DOM.innerHTML += HTML3;
    })
    level21DOM.addEventListener('mouseleave', () => {
        let HTML3 = 'pages<i class="fa fa-angle-down"></i>'
        level21DOM.innerHTML = HTML3;
    })



    return [false, 'OK'];
}
export default renderMenu;
// /* <i class="fa fa-angle-down"></i> */