let scrollOfertas = document.querySelectorAll('[data-bottom-top]');
let scrollOfertas2 = document.querySelectorAll('[data-bottom-top2]');
let scrollofertasDelay = document.querySelectorAll('[data-bottom-top-delay]');
let scrollofertasDelay2 = document.querySelectorAll('[data-bottom-top-delay-2]');
let mostrarInicio = document.querySelectorAll('[data-top]');

function revelarInicio() {
    mostrarInicio.forEach((el, i) => { 
        setTimeout(()=>{
            el.classList.add('reveal')
        }, 200 * i)
        
    })
}

function verificaTopo() {
    let topo = window.scrollY + (window.innerHeight * .9);
    scrollOfertas.forEach((el) => {
        if (topo > el.offsetTop) {
            el.classList.add('reveal')
        }
    })
}

function verificaTopo2() {
    let topo = window.scrollY + (window.innerHeight * .9);
    scrollOfertas2.forEach((el) => {
        if (topo > el.offsetTop) {
            el.classList.add('reveal')
        }
    })
}

function verificaTopoDelay() {
    let topo = window.scrollY + (window.innerHeight * .65);
    scrollofertasDelay.forEach((el, i) => {
        if (topo > el.offsetTop) {
            setTimeout(() => {
                el.classList.add('reveal')
            }, 500 * i)
        }
    })
}

function verificaTopoDelay2() {
    let topo = window.scrollY + (window.innerHeight * .25);
    scrollofertasDelay2.forEach((el, i) => {
        if (window.scrollY > 1100) {
            setTimeout(() => {
                el.classList.add('reveal2')
            }, 500 * i)
        }
        else if (window.scrollY > 600 && window.innerWidth < 1024) {
            setTimeout(() => {
                el.classList.add('reveal2')
            }, 500 * i)
        }
    })
}
if (window.innerWidth < 1024) {
    window.addEventListener('DOMContentLoaded', verificaTopo)
    window.addEventListener('DOMContentLoaded', verificaTopoDelay)
}
if (window.innerWidth > 1024) {
    window.addEventListener('scroll', verificaTopo)
    window.addEventListener('scroll', verificaTopoDelay)
}
window.addEventListener('DOMContentLoaded', revelarInicio)
window.addEventListener('scroll', verificaTopo2)
window.addEventListener('scroll', verificaTopoDelay2)

