const btn4 = document.querySelector('.mobile-btn');
const menuMobile = document.querySelector('.mobile_nav');

btn4.addEventListener('click', function () {
    btn4.classList.toggle('.active');
    menuMobile.classList.toggle('active');
})