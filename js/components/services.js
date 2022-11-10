function renderServices(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Nepavyko rasti selector'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="col-12 col-md-6 col-lg-4">
                <div class="service-title">
                    <i class="fa fa-${item.icon} service-icon"></i>
                    <a class="service-btn" href="#"><br>${item.title}</a>
                </div>
                <p class="description">${item.description}</p>
            </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderServices;
