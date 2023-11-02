
let imgPrincipal = document.getElementById('img-principal');
let imgsOpcao = document.querySelectorAll('.img-opcao');
let imgProduto1 = document.querySelector('.img-item1');
let imgProduto2 = document.querySelector('.img-item2');
let imgProduto3 = document.querySelector('.img-item3');
let imgProduto4 = document.querySelector('.img-item4');
let imgProduto5 = document.querySelector('.img-item5');

function trocaImg(event) {
    const img = event.currentTarget
    imgPrincipal.src = img.src
}

function eventosGaleria(img) {
    img.addEventListener('click', trocaImg)
}
imgsOpcao.forEach(eventosGaleria)
//função que verifica se o primeiro argumento possui a classe 'ativo' se não possuir ele adiciona e remove dos outros elementos
function removeAtivo(a, b, c, d) {
    if (!a.className.includes('ativo')) {
        a.classList.add('ativo')
    }

    if (b.className.includes('ativo')) {
        b.classList.remove('ativo')
    }

    if (c.className.includes('ativo')) {
        c.classList.remove('ativo')
    }

    if (d.className.includes('ativo')) {
        d.classList.remove('ativo')
    }

}

if (document.querySelector('.images-produto').contains(imgProduto1)) {
    imgProduto1.addEventListener('click', () => {
        removeAtivo(imgProduto1, imgProduto2, imgProduto3, imgProduto4, imgProduto5)
    })
}

if (document.querySelector('.images-produto').contains(imgProduto2)) {
    imgProduto2.addEventListener('click', () => {
        removeAtivo(imgProduto2, imgProduto1, imgProduto3, imgProduto4, imgProduto5)
    })
}
if (document.querySelector('.images-produto').contains(imgProduto3)) {
    imgProduto3.addEventListener('click', () => {
        removeAtivo(imgProduto3, imgProduto1, imgProduto2, imgProduto4, imgProduto5)
    })
}
if (document.querySelector('.images-produto').contains(imgProduto4)) {
    imgProduto4.addEventListener('click', () => {
        removeAtivo(imgProduto4, imgProduto1, imgProduto2, imgProduto3, imgProduto5)
    })
}


let descricao = document.getElementById('descricao');
let especificacoes = document.getElementById('especificacoes')
let avaliacoes = document.querySelector('#avaliacao .titulo')

descricao.addEventListener('click', () => {
    document.querySelector('#descricao .conteudo').classList.toggle('inativo')
    document.querySelector('#descricao .arrow').classList.toggle('rotate-arrow')
})

especificacoes.addEventListener('click', () => {
    document.querySelector('#especificacoes .conteudo').classList.toggle('inativo')
    document.querySelector('#especificacoes .arrow').classList.toggle('rotate-arrow')
})

avaliacoes.addEventListener('click', () => {
    document.querySelector('#avaliacao .arrow').classList.toggle('rotate-arrow')
    document.querySelector('#avaliacao #ordenar').classList.toggle('inativo')
    document.querySelector('#avaliacao .comentarios').classList.toggle('inativo')
})

let comentario1 = document.querySelector('.comentario1')
let comentario3 = document.querySelector('.comentario3')
let recentes = document.getElementById('recentes')
let antigos = document.getElementById('antigos')
let select = document.querySelector('.select')

select.addEventListener('click', () => {
    document.getElementById('aaa').classList.remove('inativo')
    document.getElementById('bbb').classList.remove('inativo')
})

recentes.addEventListener('click', () => {
    if (recentes.checked === true) {
        comentario1.classList.add('order-1')
        comentario1.classList.remove('order-3')
        comentario3.classList.add('order-3')
        comentario3.classList.remove('order-1')
    }
})

antigos.addEventListener('click', () => {
    if (antigos.checked === true) {
        comentario1.classList.remove('order-1')
        comentario1.classList.add('order-3')
        comentario3.classList.remove('order-3')
        comentario3.classList.add('order-1')
    }
})


let favoritar = document.querySelector('#favoritar')
let heart = document.querySelector('#favoritar i')

favoritar.addEventListener('click', () => {
    incrementa()
})

favoritar.addEventListener('mouseenter', () => {
    if (heart.className.includes('ri-heart-line')) {
        heart.setAttribute('class', 'ri-heart-fill');
        heart.classList.add('text-red-500');
    }
})

function saidaMouse() {
    if (heart.className.includes('ri-heart-fill')) {
        heart.setAttribute('class', 'ri-heart-line')
        heart.classList.add('text-gray-10')
    }
}

favoritar.addEventListener('mouseleave', saidaMouse)

favoritar.addEventListener('click', () => {
    heart.classList.add('text-red-500')
    favoritar.removeEventListener('mouseleave', saidaMouse)

})

const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 4,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
        clickable: true
    },
    // cssMode: true,
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
            slidesPerView: 4,
            spaceBetween: 25,
        }
    },

})

let produtostopBottom = document.querySelectorAll('[data-produtos]');

function animacaoProdutos() {
    produtostopBottom.forEach((el, i) => [
        setTimeout(() => {
            el.classList.add('reveal')
        }, 200 * i)
    ])
}


window.addEventListener('DOMContentLoaded', animacaoProdutos)

