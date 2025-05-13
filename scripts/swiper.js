new Swiper('.swiper-container')

const swiper = new Swiper('.swiper', {
    breakpoints: {
        800: {
            loop: true,
            direction: "vertical",
            spaceBetween: 25,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            mousewheel: {
                invert: false,
            }
        },
        1920: {
            loop: true,
            direction: "horizontal",
            spaceBetween: 25,

            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            mousewheel: {
                invert: false,
            }
        },
        
    }
    });

