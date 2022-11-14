function renderGallery(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Pagal pateikta selector nepavyko rasti norimo elemento'];
    }

    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="col-12 col-md-6 col-lg-4">
                    <img src="${item.img}" alt="${item.alt}"/>
                    <a href="${item.img}">
                      <div class="title">${item.title}</div>
                    <p class="description">${item.tags[0]}</p>
            </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderGallery;
