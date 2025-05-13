const btn = document.querySelector('.mobile-btn');
const menuMobile = document.querySelector('.mobile_nav');

btn.addEventListener('click', function () {
    btn.classList.toggle('.active');
    menuMobile.classList.toggle('active');
})