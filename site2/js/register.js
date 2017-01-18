var button1 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(1)');
var button2 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(2)');
var button3 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(3)');
var button4 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(4)');
var button5 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(5)');
var button6 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(6)');
var button7 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(7)');
var button8 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(8)');
var button9 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(9)');
var button10 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(10)');
var button11 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(11)');
var button12 = document.querySelector('body section:nth-of-type(2) div button:nth-of-type(12)');

var verder1 = document.querySelector('section:first-of-type p > button:first-of-type');
var register1 = document.querySelector('section:first-of-type');
var form1 = document.getElementsByTagName('form')[0];
var interests = document.querySelector('section:nth-of-type(2)');
var previous = document.querySelector('body section:nth-of-type(2) > p:nth-of-type(2) button:first-of-type');


function register(e) {
    e.preventDefault();
    register1.classList.toggle('registermove');
    interests.classList.toggle('interestsmove');
}

function buttonbackground() {
    button1.classList.toggle('geklikt');
}

function buttonbackground2() {
    button2.classList.toggle('geklikt');
}

function buttonbackground3() {
    button3.classList.toggle('geklikt');
}

function buttonbackground4() {
    button4.classList.toggle('geklikt');
}

function buttonbackground5() {
    button5.classList.toggle('geklikt');
}

function buttonbackground6() {
    button6.classList.toggle('geklikt');
}

function buttonbackground7() {
    button7.classList.toggle('geklikt');
}

function buttonbackground8() {
    button8.classList.toggle('geklikt');
}

function buttonbackground9() {
    button9.classList.toggle('geklikt');
}

function buttonbackground10() {
    button10.classList.toggle('geklikt');
}

function buttonbackground11() {
    button11.classList.toggle('geklikt');
}

function buttonbackground12() {
    button12.classList.toggle('geklikt');
}

previous.addEventListener('click', register);
form1.addEventListener('submit', register);
button1.addEventListener('click', buttonbackground);
button2.addEventListener('click', buttonbackground2);
button3.addEventListener('click', buttonbackground3);
button4.addEventListener('click', buttonbackground4);
button5.addEventListener('click', buttonbackground5);
button6.addEventListener('click', buttonbackground6);
button7.addEventListener('click', buttonbackground7);
button8.addEventListener('click', buttonbackground8);
button9.addEventListener('click', buttonbackground9);
button10.addEventListener('click', buttonbackground10);
button11.addEventListener('click', buttonbackground11);
button12.addEventListener('click', buttonbackground12);