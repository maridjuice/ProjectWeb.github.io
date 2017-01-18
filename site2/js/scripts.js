var kruisje_info = document.querySelector('body > section:nth-of-type(2) img');
var info_venster = document.querySelector('body > section:nth-of-type(2)');
var loginkruisje = document.querySelector('body > section:first-of-type > img');
var loginscherm = document.querySelector('body > section:first-of-type');
var loginknop = document.querySelector('.navigatiebar div:nth-of-type(2) h1');

//var addtolist = document.querySelector('footer > button:nth-of-type(2)');
var addtolist = document.querySelector('article button:nth-of-type(2)');
var listicon = document.querySelector('body > div');
var addtolist1 = document.querySelector('main > section:nth-of-type(1) button:nth-of-type(2)');
var listicon1 = document.querySelector('header nav.largenav ul li div');

console.log(addtolist1);
console.log(listicon1);

function addlist() {
    listicon.classList.toggle('addtolist');
}

function addlist1() {
    listicon1.classList.toggle('addtolist1');
}

function toggle_visibility() {
    info_venster.classList.toggle('zichtbaar');
}

function login_animatie() {
    loginscherm.classList.toggle('loginzichtbaar');
}

addtolist.addEventListener('click', addlist);
addtolist1.addEventListener('click', addlist1);
kruisje_info.addEventListener('click', toggle_visibility);
loginkruisje.addEventListener('click', login_animatie);
loginknop.addEventListener('click', login_animatie);