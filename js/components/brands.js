function renderBrands(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Nepavyko rasti selector'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }
    let HTML = '';

    for (const item of data) {
        HTML += `<a href="#" class="brand"><img src="./img/brands/${item.brand}.png"></a>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderBrands;
