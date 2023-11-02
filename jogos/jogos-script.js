const swiper4 = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true
    },
    // cssMode: true,
    touch: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        450: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 4,
        }
    },

})  

let jogosAll = document.querySelectorAll('[data-jogos]');

function animacaoJogos() {
    jogosAll.forEach((el, i) => [
        setTimeout(() => {
            el.classList.add('reveal')
        }, 200 * i)
    ])
}


window.addEventListener('DOMContentLoaded', animacaoJogos)