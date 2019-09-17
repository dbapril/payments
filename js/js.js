$("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked");
});
$('.overlay').click(function () {
    $(this).removeClass('open');
    $('.navBurger').removeClass('active');
});


let logIn = document.querySelector('#log-in');
let link = document.querySelector('#link');
let li = document.querySelector('[role=menu]').lastElementChild;
let ul = document.querySelector('[role=menu]');
let newLi = document.createElement('li');


function changeHeader(mql) {
    if (mql.matches) {
        logIn.append(link);
        li.innerHTML = '';
    } else {
        logIn.innerHTML = '';
        li.append(link);
    }
}

let mql = window.matchMedia("screen and (min-width: 769px)");

mql.addListener(changeHeader);

changeHeader(mql);