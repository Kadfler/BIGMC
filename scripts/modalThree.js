const body2 = document.body;
const modal2 = document.querySelector('.modal_non_donate');
const ModalCloseBtn2 = document.querySelector('.close_two');
document.querySelectorAll('#non_donate').forEach(function(btn2) { btn2.addEventListener('click', function(e) {
    body2.classList.add('active');
    modal2.classList.add('active');
  })
});

ModalCloseBtn2.addEventListener('click', function() {
    body2.classList.remove('active');
    modal2.classList.remove('active');
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        body2.classList.remove('active');
    modal2.classList.remove('active');
    }
});