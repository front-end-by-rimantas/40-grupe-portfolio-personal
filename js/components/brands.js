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
        HTML += `<a href="#" class="brand col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2"><img class="brand" src="./img/brands/${item.brand}.png" alt="brand"></a>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderBrands;
