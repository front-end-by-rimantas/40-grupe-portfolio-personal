function renderGalleryFilters(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Pagal pateikta selector nepavyko rasti norimo elemento'];
    }

    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<a href="#">${item.filter}</a>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderGalleryFilters;
