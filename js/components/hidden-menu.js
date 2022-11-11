const DOM = document.getElementById('hidden-menu');
console.log(DOM);

DOM.addEventListener('click', () => {
    if (DOM.innerHTML.includes("home") === true) {
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

// const monitorDOM = DOM.getElementsByClassName('monitor');
// console.log(monitorDOM);

// const allButtonsDOM = DOM.querySelectorAll('.button');
// console.log(allButtonsDOM);

// monitorDOM[0].addEventListener('click', () => {
//     monitorDOM[0].classList.toggle('on');
// })


// let answer = 0;

// allButtonsDOM[0].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `7`;
//     answer += 7;
// })
// allButtonsDOM[1].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `8`;
//     answer += 8;
// })
// allButtonsDOM[2].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `9`;
//     answer += 9;
// })
// allButtonsDOM[3].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `4`;
//     answer += 4;
// })
// allButtonsDOM[4].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `5`;
//     answer += 5;
// })
// allButtonsDOM[5].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `6`;
//     answer += 6;
// })
// allButtonsDOM[6].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `1`;
//     answer += 1;
// })
// allButtonsDOM[7].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `2`;
//     answer += 2;
// })
// allButtonsDOM[8].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `3`;
//     answer += 3;
// })
// allButtonsDOM[9].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `0`;
//     answer += 0;
// })
// allButtonsDOM[10].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `+`;
//     // answer += +;
// })
// allButtonsDOM[11].addEventListener('click', () => {
//     monitorDOM[0].innerHTML += `-`;
//     // answer += '-';
// })
// allButtonsDOM[12].addEventListener('click', () => {
//     monitorDOM[0].innerHTML = `0`;
//     answer = 0;
// })
// allButtonsDOM[13].addEventListener('click', () => {
//     monitorDOM[0].innerHTML = `${answer}`;
//     // answer += ;
// })

// console.log(answer)

// // console.log(allButtonsDOM.length)

// // for (let i = 0; i < allButtonsDOM.length; i++) {
// //     console.log(allButtonsDOM[i])
// //     allButtonsDOM[i].addEventListener('click', () => {
// //         monitorDOM[0].innerHTML += `<div class = "button">${allButtonsDOM[i]}</div>`;
// //     })
// // }