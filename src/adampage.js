const navBar = document.querySelector('.navbar');
const burgerButton = document.querySelector('#burger');
const closeButton = document.querySelector('#closemark');

burgerButton.addEventListener('click', () => {
    navBar.classList.add('open');
    burgerButton.classList.add('remove');
})

closeButton.addEventListener('click', () => {
    navBar.classList.remove('open');
    burgerButton.classList.remove('remove');
})
