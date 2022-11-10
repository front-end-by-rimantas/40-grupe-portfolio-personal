function renderServices(selector, data) {
    const DOM = document.getElementById(selector);

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="service-title">
                        <i class="fa fa-${item.icon} service-icon"></i>
                        <a class="service-btn" href="#"></i><br>${item.text}</a>
                    </div>`;
    }

    DOM.innerHTML = HTML;
}

export default renderServices;
