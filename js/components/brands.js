const imageWrapper = document.querySelector('.image-wrapper');
const imageItems = document.querySelectorAll('.image-wrapper > *');
const imageLength = imageItems.length;
let perView = 5;

//const rowWidth = document.querySelector('.image-wrapper').width;
//console.log(rowWidth);
//
//if (rowElementWidth >= '576px') {
//    perView = 2;
//} else if (rowElementWidth >= '768px') {
//    perView = 3;
//} else if (rowElementWidth >= '992px') {
//    perView = 4;
//} else if (rowElementWidth >= '1100px') {
//    perView = 5;
//} else {
//    perView = 1;
//}

//function plotis(x) {
//    if (x.matches) {
//        perView = 2;
//    } else if (x2.matches) {
//        perView = 3;
//    } else if (x3.matches) {
//        perView = 4;
//    } else if (x4.matches) {
//        perView = 5;
//    } else {
//        perView = 1;
//    }
//}
//let x = window.matchMedia('(min-witdh:576px)');
//const x2 = window.matchMedia('(min-witdh:768px)');
//const x3 = window.matchMedia('(min-witdh:992px)');
//const x4 = window.matchMedia('(min-witdh:1200px)');
//
//plotis();
//x.addListener(plotis);

let totalScroll = 0;
const delay = 3000;

imageWrapper.style.setProperty('--per-view', perView);
for (let i = 0; i < perView; i++) {
    imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML);
}

let autoScroll = setInterval(scrolling, delay);

function scrolling() {
    totalScroll++;
    if (totalScroll == imageLength + 1) {
        clearInterval(autoScroll);
        totalScroll = 1;
        imageWrapper.style.transition = '0s';
        imageWrapper.style.left = '0';
        autoScroll = setInterval(scrolling, delay);
    }
    const widthEl =
        document.querySelector('.image-wrapper > :first-child').offsetWidth +
        24;
    imageWrapper.style.left = `-${totalScroll * widthEl}px`;
    imageWrapper.style.transition = '.3s';
}
