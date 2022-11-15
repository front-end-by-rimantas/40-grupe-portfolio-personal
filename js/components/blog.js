function renderBlog(selector, data) {
    const DOM = document.getElementById(selector);
    if (DOM === null) {
        return [true, 'Nepavyko rasti selector'];
    }
    if (!Array.isArray(data)) {
        return [true, 'Duomenys turi buti masyve'];
    }

    let HTML = '';

    for (const item of data) {
        HTML += `<div class="col-12 col-md-4 blog-col">
                <div>
                    <img class="blog-img" src="./img/Blog/${item.bg - img}">
                    <div class="blog-img-info">
                        <img src="./img/Blog/${item.user - img}">
                        <a class="blog-name" href="#"><span>${item.user - name
            }</span></a>
                        <p class="description">13th Dec <i class="fa fa-heart"></i> 15 <i class="fa fa-comment"></i> 04</p>
                    </div>
                </div>
                <div class="blog-text">
                    <h4 class="title">${item.blog - title}</h4>
                    <p class="description">${item.blog - desc}</p>
                </div>
            </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}
