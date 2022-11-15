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
                    <div class="blog-img-holder">
                        <img class="blog-img" src="./img/Blog/${item.bgImg}">
                    </div>
                    <div class="blog-img-info">
                        <div class="blog-user">
                            <img src="./img/Blog/${item.userImg}">
                            <a class="blog-name" href="#"><span>${item.userName}</span></a>
                        </div>
                        <p class="description">13th Dec <i class="fa fa-heart"></i> 15 <i class="fa fa-comment"></i> 04</p>
                    </div>
                <div class="blog-text">
                    <h4 class="title">${item.blogTitle}</h4>
                    <p class="description">${item.blogDesc}</p>
                </div>
            </div>`;
    }

    DOM.innerHTML = HTML;

    return [false, 'OK'];
}

export default renderBlog;
