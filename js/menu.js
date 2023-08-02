const burgerMenu = document.querySelector('.burger');
const headerScroll = document.querySelector('.header');
const menuClose = document.querySelector('.header__nav-close');
const headerMenu = document.querySelector('.header__nav');
burgerMenu.addEventListener('click', () => {
    headerMenu.classList.add('active');
    headerScroll.classList.add('open');
})

menuClose.addEventListener('click', () => {
    headerMenu.classList.remove('active');
    headerScroll.classList.remove('open');
})