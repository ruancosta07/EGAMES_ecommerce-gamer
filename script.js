let menu = document.getElementById('menu');
let navMobile = document.querySelector('.menu-mobile')


menu.addEventListener('click', () => {
    if (menu.checked == true) {
        navMobile.classList.remove('hidden')
        setTimeout(()=>{
            navMobile.classList.remove('transform')
        }, 100)
        
    }
    else {
        navMobile.classList.add('transform')
        setTimeout(()=>{
            navMobile.classList.remove('hidden')
        }, 100)
    }
})

let favoritos = document.getElementById('favoritos');
let numeroasdw = document.querySelector('#favoritos span')
let valor = 0
function incrementa() {
    if (valor == 1) return;
    numeroasdw.textContent = ++valor

}

let loginOpcoes = document.querySelector('.login-opcoes');

loginOpcoes.addEventListener('mouseenter', () => {
    document.querySelector('.login-info').classList.remove('inativo')
    setTimeout(() => {
        document.querySelector('.login-info').classList.remove('login-animate')
    }, 100)
})

loginOpcoes.addEventListener('mouseleave', () => {
    document.querySelector('.login-info').classList.add('login-animate')
    setTimeout(() => {
        document.querySelector('.login-info').classList.add('inativo')
    }, 100)
})

const swiperPrincipal = new Swiper(".swiper1", {
    slidesPerView: 1,
    speed: 1500,
    autoHeight: false,
    autoplay: {
        delay: 5000,
    },
    // cssMode: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
})

const swiper = new Swiper(".swiper2", {
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
        clickable: true
    },
    touch: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    },

})

function verificaTopo() {
    let voltaTopo = document.getElementById('voltaTopo');
    if (window.scrollY > 800) {
        voltaTopo.classList.remove('hidden')
        voltaTopo.addEventListener('click', () => {
            window.location.href = '#header'
        })
    }
    else {
        voltaTopo.classList.add('hidden')
    }
}

window.addEventListener('scroll', verificaTopo);

let ofertasNome = document.querySelector('#ofertas-nome');
let ofertasEmail = document.querySelector('#ofertas-email');
let btnOfertas = document.querySelector('#btn-ofertas');
let avisoCadastro = document.querySelector('#aviso-cadastro');
const formreceberOfertas = document.querySelector('#receber-ofertas');
function cadastrarOferta(evento) {
    evento.preventDefault();
    if (ofertasNome.value !== '' && ofertasEmail !== '') {
        btnOfertas.innerHTML = 'CADASTRANDO...';
        setTimeout(() => {
            btnOfertas.innerHTML = 'CADASTRAR';
            avisoCadastro.classList.toggle('hidden');
            setTimeout(() => {
                avisoCadastro.classList.toggle('-right-[100%]')
                avisoCadastro.classList.toggle('right-0')
                setTimeout(() => {
                    avisoCadastro.classList.toggle('-right-[100%]')
                    avisoCadastro.classList.toggle('right-0')
                }, 4000)
            }, 100)
        }, 2000)

    }
}

if (document.contains(formreceberOfertas)) {
    formreceberOfertas.addEventListener('submit', cadastrarOferta)
}


let linksMobile = document.querySelectorAll('.nav-mobile a');

linksMobile.forEach((el)=>{
    el.addEventListener('click', ()=>{
        navMobile.classList.add('transform');
        menu.checked = false
    })
})