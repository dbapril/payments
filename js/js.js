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

let mql = window.matchMedia("screen and (min-width: 980px)");

mql.addListener(changeHeader);

changeHeader(mql);



let modal = document.getElementById('myModal');
let btn = document.getElementById("link");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}


span.onclick = function () {
    modal.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}