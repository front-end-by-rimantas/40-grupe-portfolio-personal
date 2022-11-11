const counters = document.querySelectorAll('.counter');

window.addEventListener('scroll', start);

function start() {
    var counter = counters;

    for (var i = 0; i < counter.length; i++) {
        var windowheight = window.innerHeight;
        var countertop = counter[i].getBoundingClientRect().top;
        var counterpoint = 150;

        if (countertop < windowheight - counterpoint) {
            counter[i].classList.add('matoma');
        }
    }
}

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-val');
        const c = +counter.innerText;

        const increment = target / 500;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        }
    };
    updateCounter();
});
