// ----- STICKY MENU ----- //

window.addEventListener('scroll', () => {
    var menuBar = document.querySelector(".navbar");
    menuBar.classList.toggle('sticky', window.scrollY > 0);
});


// ----- OPEN MENU ----- //

const menu = document.querySelector('.menu'),
    menuIcon = document.querySelector('.menu-icon'),
    menuItems = document.querySelectorAll('.menu-item a');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
    menuIcon.classList.toggle('active');
    });

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('menu-open');
        menuIcon.classList.remove('active');
    })
});


// ----- SLIDER ----- //

const slides = document.querySelectorAll(".slide");
const auto = true;
const intervalTime = 5000;
var slideInterval;


const nextSlide = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');

    if(current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        slides[0].classList.add('current');
    }
    setTimeout( () => current.classList.remove('current'))
};

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime);
}


// ----- FILE INPUT ----- //

const fileReady = (e) => {
    const file = e.target.files;
    const fileBox = document.querySelector('.file-box');

    fileBox.innerHTML = `File: ${file[0].name}`
}

const fileInput = document.querySelector('#file');
fileInput.addEventListener('change', fileReady);