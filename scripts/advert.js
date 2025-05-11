const advOpBtn = document.getElementById('adv_open');
const advClsBtn = document.getElementById('adv_close');
const listt = document.querySelector('.list_next');


advOpBtn.addEventListener('click', function() {
    advClsBtn.classList.add('active');
    advOpBtn.classList.add('nonactive');
    listt.classList.add('active');
});

advClsBtn.addEventListener('click', function() {
    advOpBtn.classList.remove('nonactive');
    advClsBtn.classList.remove('active');
    listt.classList.remove('active');
});