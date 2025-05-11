const btn = document.getElementById('newsopen');
const body = document.body;
const modal = document.querySelector('.modal_news');
const ModalCloseBtn = document.querySelector('.close');
document.querySelectorAll('#newsopen').forEach(function(btn) { btn.addEventListener('click', function(e) {
    body.classList.add('active');
    modal.classList.add('active');
  })
});


ModalCloseBtn.addEventListener('click', function() {
    body.classList.remove('active');
    modal.classList.remove('active');
});

document.addEventListener('keydown', function(event) {
    if(event.key === 'Escape') {
        body.classList.remove('active');
    modal.classList.remove('active');
    }
});