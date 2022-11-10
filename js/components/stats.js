const counters = document.querySelectorAll('.counter');

window.addEventListener('scroll', () => {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = +counter.getAttribute('data-val');
            const c = +counter.innerText;

            const increment = target / 250;

            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            }
        };
        updateCounter();
    });
});
