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
        HTML += `<a href="#" class="brandholder"><img class="brand" src="./img/brands/${item.brand}.png" alt="brand"></a>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderBrands;

// next script

const brandWrap = document.querySelector('.brandwrap');
const brandLogos = document.querySelectorAll('.brandwrap > .brandholder');
const brandLength = brandLogos.length;
const perView = 5;
let totalScroll = 0;
const delay = 3000;

brandWrap.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
    brandWrap.insertAdjacentHTML('beforeend', brandLogos[i]);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
    totalScroll++;
    if (totalScroll === brandLength + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        brandWrap.style.transition = '0s';
        brandWrap.style.left = '0';
        autoScroll = setInterval(scrolling, delay);
    }
    const widthEl = document.querySelector('.brandholder').offsetWidth + 24;
    brandWrap.style.left = `-${totalScroll * widthEl}px`;
    brandWrap.style.transition = '.3s';
}
