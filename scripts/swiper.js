new Swiper('.swiper-container')

const swiper = new Swiper('.swiper', {
    loop: true,
    direction: "vertical",
    spaceBetween:20,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable:true,
    },
  
    mousewheel: {
        invert: false,
    }

  });