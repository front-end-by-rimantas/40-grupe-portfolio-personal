const counters = document.querySelectorAll('.counter');

window.addEventListener('scroll', start);

function start() {
    let counter = counters;
    for (let i = 0; i < counter.length; i++) {
        let windowheight = window.innerHeight;
        let countertop = counter[i].getBoundingClientRect().top;
        let counterpoint = 150;

        if (countertop < windowheight - counterpoint) {
            counter[i].classList.add('matoma');
            window.removeEventListener('scroll', start);
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
        }
    }
}
