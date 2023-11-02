let mostrarSenha = document.querySelector('.ver-senha');
let ver = document.querySelector('.ver');
let esconder = document.querySelector('.esconder');
let usuario = document.getElementById('usuario-login');
let senha = document.getElementById('senha');

mostrarSenha.addEventListener('click', () => {
    ver.classList.toggle('inativo');
    esconder.classList.toggle('inativo');
});

ver.addEventListener('click', () => {
    senha.setAttribute('type', 'text');
})

esconder.addEventListener('click', () => {
    senha.setAttribute('type', 'password')
})

senha.addEventListener('focusin', () => {
    document.querySelector('.senha-input').classList.add('form-active')
})

senha.addEventListener('focusout', () => {
    document.querySelector('.senha-input').classList.remove('form-active')
})

usuario.addEventListener('focusin', () => {
    document.querySelector('.usuario-input').classList.add('form-active')
})

usuario.addEventListener('focusout', () => {
    document.querySelector('.usuario-input').classList.remove('form-active')
})

const loginForm = document.getElementById('login-form');
const loginButton = document.querySelector('#login-button');
const senhaLogin = document.getElementById('senha')
const senhaAviso = document.createElement('span');
const usuarioInput = document.getElementById('usuario-login');
const usuarioAviso = document.createElement('span');
usuarioAviso.innerHTML = 'Digite seu usuário.';
usuarioAviso.classList.add('block', 'text-red-500', 'mt-3', 'font-medium', 'text-[.8rem]');
senhaAviso.innerHTML = 'Digite sua senha.';
senhaAviso.classList.add('block', 'text-red-500', 'mb-3', 'font-medium', 'text-[.8rem]');

const nomeUsuario = localStorage.getItem('nome');
const senhaUsuario = localStorage.getItem('senha');

function acessarConta(evento) {

    evento.preventDefault();
    if (usuarioInput.value === nomeUsuario && senhaLogin.value === senhaUsuario) {
        usuarioAviso.classList.add('hidden');
        senhaAviso.classList.add('hidden');
        loginButton.innerText = 'ENTRANDO...';
        setTimeout(() => {
            loginButton.innerText = 'LOGIN BEM SUCEDIDO!'
        }, 2000)
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 4000)
    }

    else {
        usuarioAviso.innerHTML = 'Usuário incorreto.'
        document.querySelector('.campo-usuario').insertAdjacentElement('beforeend', usuarioAviso);
        senhaAviso.innerHTML = 'Senha incorreta.';
        document.querySelector('.campo-senha').insertAdjacentElement('beforeend', senhaAviso);
    }



}

// usuarioInput.addEventListener('focusin', () => {
//     if (usuarioInput.value === '') {
//         document.querySelector('.campo-usuario').insertAdjacentElement('afterend', usuarioAviso)
//         usuarioAviso.classList.add('hidden')
//     }
// })

// usuarioInput.addEventListener('focusout', () => {
//     if (usuarioInput.value === "") {
//         usuarioAviso.classList.remove('hidden')
//     }
// })


// senhaLogin.addEventListener('focusin', () => {
//     if (senhaLogin.innerHTML === '') {
//         document.querySelector('.campo-senha').insertAdjacentElement('afterend', senhaAviso)
//         senhaAviso.classList.add('hidden')
//     }
// })

// senhaLogin.addEventListener('focusout', () => {
//     if (senhaLogin.value === '') {
//         senhaAviso.classList.remove('hidden')
//     }
// })

let loginAll = document.querySelectorAll('[data-login]');

function animaConta() {
    loginAll.forEach((el, i) => [
        setTimeout(() => {
            el.classList.add('reveal')
        }, 200 * i)
    ])
}

window.addEventListener('DOMContentLoaded', animaConta)

loginForm.addEventListener('submit', acessarConta)



