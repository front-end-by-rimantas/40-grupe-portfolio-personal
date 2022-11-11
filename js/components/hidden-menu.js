const DOM = document.getElementById('hidden-menu');

DOM.addEventListener('click', () => {
    if (DOM.innerHTML.includes("home")) {
        DOM.innerHTML = '';
    } else {
        DOM.innerHTML = `<div class = "box">
        <div class = "menu-box">
        <a class="link onemenu" href = "#">home</a>
        <a class="link onemenu" href = "#">about</a>
        <a class="link onemenu" href = "#">services</a>
        <a class="link onemenu" href = "#">portfolio</a>
        <a class="link onemenu" href = "#">pricing</a>
        <a class="link onemenu" href = "#">blog</a>
        <a class="link onemenu" href = "#">pages</a>
        <a class="link onemenu" href = "#">contact</a>
        </div>
        </div>`
    }
})
