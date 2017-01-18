var navigatiebar = document.querySelector('.navigatiebar');
var comments = document.querySelector('body > div:nth-of-type(2)');
var slider = document.querySelector('.slider');
var slideron = document.querySelector('.slider > div:first-of-type');

var lastScrollTop = 0;

console.log(navigatiebar);
console.log(slider);

function slide() {
    slider.classList.toggle('on');
}

// Code grotendeels van http://stackoverflow.com/questions/36448800/how-to-show-or-hide-a-menu-when-i-scroll-down-or-up

function scroller() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        navigatiebar.style.top = "-100%";
        comments.style.bottom = "-100%";
    } else {
        navigatiebar.style.top = "0";
        comments.style.bottom = "0";
    }
    lastScrollTop = st;
}

slider.addEventListener('click', slide);
window.addEventListener("scroll", scroller);