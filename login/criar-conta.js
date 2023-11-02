const criarForm = document.getElementById('criar-form');
const criarButton = document.querySelector('#criar-button');
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const cep = document.getElementById('cep');
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');
const bairro = document.getElementById('bairro');
const logradouro = document.getElementById('logradouro');
const numero = document.getElementById('numero');
let checkbox = document.getElementById('termos');
const avisoCriarConta = document.createElement('span');
const avisoCriarConta2 = document.createElement('span');
const avisoCriarConta3 = document.createElement('span');
const avisoCriarConta4 = document.createElement('span');
const avisoCriarConta5 = document.createElement('span');
const avisoCriarConta6 = document.createElement('span');
const avisoCriarConta7 = document.createElement('span');
const avisoCriarConta8 = document.createElement('span');
const avisoCriarConta9 = document.createElement('span');
const avisoCriarConta10 = document.createElement('span');
const avisoCriarConta11 = document.createElement('span');
avisoCriarConta.innerHTML = 'Preencha o campo acima.';
avisoCriarConta2.innerHTML = 'Preencha o campo acima.';
avisoCriarConta3.innerHTML = 'Preencha o campo acima.';
avisoCriarConta4.innerHTML = 'Preencha o campo acima.';
avisoCriarConta5.innerHTML = 'Preencha o campo acima.';
avisoCriarConta6.innerHTML = 'Preencha o campo acima.';
avisoCriarConta7.innerHTML = 'Preencha o campo acima.';
avisoCriarConta8.innerHTML = 'Preencha o campo acima.';
avisoCriarConta9.innerHTML = 'Preencha o campo acima.';
avisoCriarConta10.innerHTML = 'Preencha o campo acima.';
avisoCriarConta11.innerHTML = 'Preencha o campo acima.';
avisoCriarConta.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta2.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta3.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta4.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta5.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta6.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta7.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta8.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta9.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta10.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');
avisoCriarConta11.classList.add('text-red-500', 'my-1', 'font-medium', 'text-[.8rem]');


function criarConta(evento) {
    evento.preventDefault();
    if (nome.value === "" && sobrenome.value === '' && cpf.value === '' && senha.value === '' && email.value === '' && cep.value === '' && estado.value === '' && cidade.value === '' && bairro.value === '' && logradouro.value === '' && numero.value === '') {
        document.querySelector('.nome-campo').insertAdjacentElement('beforeend', avisoCriarConta);
        document.querySelector('.sobrenome-campo').insertAdjacentElement('beforeend', avisoCriarConta2);
        document.querySelector('.cpf-campo').insertAdjacentElement('beforeend', avisoCriarConta3);
        document.querySelector('.email-campo').insertAdjacentElement('beforeend', avisoCriarConta4);
        document.querySelector('.senha-campo').insertAdjacentElement('beforeend', avisoCriarConta5);
        document.querySelector('.cep-campo').insertAdjacentElement('beforeend', avisoCriarConta6);
        document.querySelector('.estado-campo').insertAdjacentElement('beforeend', avisoCriarConta7);
        document.querySelector('.cidade-campo').insertAdjacentElement('beforeend', avisoCriarConta8);
        document.querySelector('.bairro-campo').insertAdjacentElement('beforeend', avisoCriarConta9);
        document.querySelector('.logradouro-campo').insertAdjacentElement('beforeend', avisoCriarConta10);
        document.querySelector('.numero-campo').insertAdjacentElement('beforeend', avisoCriarConta11);
    }
    else if (nome.value === "" || sobrenome.value === '' || cpf.value === '' || senha.value === '' || email.value === '' || cep.value === '' || estado.value === '' || cidade.value === '' || bairro.value === '' || logradouro.value === '' || numero.value === '') {
        document.querySelector('.nome-campo').insertAdjacentElement('beforeend', avisoCriarConta);
        document.querySelector('.sobrenome-campo').insertAdjacentElement('beforeend', avisoCriarConta2);
        document.querySelector('.cpf-campo').insertAdjacentElement('beforeend', avisoCriarConta3);
        document.querySelector('.email-campo').insertAdjacentElement('beforeend', avisoCriarConta4);
        document.querySelector('.senha-campo').insertAdjacentElement('beforeend', avisoCriarConta5);
        document.querySelector('.cep-campo').insertAdjacentElement('beforeend', avisoCriarConta6);
        document.querySelector('.estado-campo').insertAdjacentElement('beforeend', avisoCriarConta7);
        document.querySelector('.cidade-campo').insertAdjacentElement('beforeend', avisoCriarConta8);
        document.querySelector('.bairro-campo').insertAdjacentElement('beforeend', avisoCriarConta9);
        document.querySelector('.logradouro-campo').insertAdjacentElement('beforeend', avisoCriarConta10);
        document.querySelector('.numero-campo').insertAdjacentElement('beforeend', avisoCriarConta11);
    }
    else if (nome.value !== "" && sobrenome.value !== '' && cpf.value !== '' && email.value !== '' && cep.value !== '' && estado.value !== '' && cidade.value !== '' && bairro.value !== '' && logradouro.value !== '' && numero.value !== '') {
        criarButton.innerText = 'CRIANDO CONTA...';
        setTimeout(() => {
            criarButton.innerText = 'CONTA CRIADA!'
            setTimeout(() => {
                window.location.href = '/login/acessar-conta.html';
            }, 4000)
        }, 2000)
    }

}

let mostrarSenha = document.querySelector('.ver-senha');
let ver = document.querySelector('.ver');
let esconder = document.querySelector('.esconder');
let usuario = document.getElementById('usuario-login');

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

nome.addEventListener('focusin', () => {
    if (nome.value === '') {
        document.querySelector('.nome-campo').insertAdjacentElement('beforeend', avisoCriarConta);
    }
    avisoCriarConta.classList.add('hidden')
})

nome.addEventListener('focusout', () => {
    if (nome.value === '') {
        avisoCriarConta.classList.remove('hidden')
    }

})

sobrenome.addEventListener('focusin', () => {
    if (sobrenome.value === '') {
        document.querySelector('.sobrenome-campo').insertAdjacentElement('beforeend', avisoCriarConta2);
    }
    avisoCriarConta2.classList.add('hidden')
})

sobrenome.addEventListener('focusout', () => {
    if (sobrenome.value === '') {
        avisoCriarConta2.classList.remove('hidden')
    }

})

cpf.addEventListener('focusin', () => {
    if (cpf.value === '') {
        document.querySelector('.cpf-campo').insertAdjacentElement('beforeend', avisoCriarConta3);
    }
    avisoCriarConta3.classList.add('hidden')
})

cpf.addEventListener('focusout', () => {
    if (cpf.value === '') {
        avisoCriarConta3.classList.remove('hidden')
    }


})

cpf.addEventListener('keyup', () => {
    let cpfValue = cpf.value
    if (cpfValue.length >= 11) {
        cpfValue = cpfValue.substring(0, 11)
        cpf.value = cpfValue
        cpf.blur()
        email.focus()
    }
})

email.addEventListener('focusin', () => {
    if (email.value === '') {
        document.querySelector('.email-campo').insertAdjacentElement('beforeend', avisoCriarConta4);
    }
    avisoCriarConta4.classList.add('hidden')
})

email.addEventListener('focusout', () => {
    if (email.value === '') {
        avisoCriarConta4.classList.remove('hidden')
    }

})


cep.addEventListener('focusin', () => {
    if (cep.value === '') {
        document.querySelector('.cep-campo').insertAdjacentElement('beforeend', avisoCriarConta5);
    }
    avisoCriarConta5.classList.add('hidden')
})

cep.addEventListener('keyup', () => {
    let cepValue = cep.value
    if (cepValue.length >= 8) {
        cepValue = cepValue.substring(0, 8)
        cep.value = cepValue
        cep.blur()
        numero.focus()
    }
})

cep.addEventListener('focusout', () => {
    if (cep.value === '') {
        avisoCriarConta5.classList.remove('hidden')
    }

})

estado.addEventListener('focusin', () => {
    if (estado.value === '') {
        document.querySelector('.estado-campo').insertAdjacentElement('beforeend', avisoCriarConta6);
    }
    avisoCriarConta6.classList.add('hidden')
})

estado.addEventListener('focusout', () => {
    if (estado.value === '') {
        avisoCriarConta6.classList.remove('hidden')
    }

})

cidade.addEventListener('focusin', () => {
    if (cidade.value === '') {
        document.querySelector('.cidade-campo').insertAdjacentElement('beforeend', avisoCriarConta7);
    }
    avisoCriarConta7.classList.add('hidden')
})

cidade.addEventListener('focusout', () => {
    if (cidade.value === '') {
        avisoCriarConta7.classList.remove('hidden')
    }

})

bairro.addEventListener('focusin', () => {
    if (bairro.value === '') {
        document.querySelector('.bairro-campo').insertAdjacentElement('beforeend', avisoCriarConta8);
    }
    avisoCriarConta8.classList.add('hidden')
})

bairro.addEventListener('focusout', () => {
    if (bairro.value === '') {
        avisoCriarConta8.classList.remove('hidden')
    }

})

logradouro.addEventListener('focusin', () => {
    if (logradouro.value === '') {
        document.querySelector('.logradouro-campo').insertAdjacentElement('beforeend', avisoCriarConta9);
    }
    avisoCriarConta9.classList.add('hidden')
})

logradouro.addEventListener('focusout', () => {
    if (logradouro.value === '') {
        avisoCriarConta9.classList.remove('hidden')
    }

})

numero.addEventListener('focusin', () => {
    if (numero.value === '') {
        document.querySelector('.numero-campo').insertAdjacentElement('beforeend', avisoCriarConta10);
    }
    avisoCriarConta10.classList.add('hidden')
})

numero.addEventListener('focusout', () => {
    if (numero.value === '') {
        avisoCriarConta10.classList.remove('hidden')
    }

})



criarForm.addEventListener('submit', criarConta);

function consultaEndereco() {
    let cep = document.getElementById('cep').value;
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                alteraDados(data)
            })
        }
    })

}


function atualizaEndereco() {
    estado.value = ``;
    bairro.value = ``;
    cidade.value = ``;
    logradouro.value = ``;
    document.addEventListener('keyup', (event) => {
        if (event.key === "Enter") {
            cep.blur()
        }
    })
}



function alteraDados(dados) {
    avisoCriarConta5.classList.add('hidden');
    avisoCriarConta6.classList.add('hidden');
    avisoCriarConta7.classList.add('hidden');
    avisoCriarConta8.classList.add('hidden');
    avisoCriarConta9.classList.add('hidden');
    avisoCriarConta10.classList.add('hidden');
    estado.value = `${dados.uf}`;
    bairro.value = `${dados.bairro}`;
    cidade.value = `${dados.localidade}`;
    logradouro.value = `${dados.logradouro}`;

}

document.getElementById('cep').addEventListener('keyup', (evento) => {
    if (evento.key === 'Backspace') {
        atualizaEndereco()
    }
    if (evento.key === 'Enter') {
        consultaEndereco()
        cep.blur()
    }
});
document.getElementById('cep').addEventListener('focusout', consultaEndereco);

let criarAll = document.querySelectorAll('[data-criar]');

function animaConta() {
    criarAll.forEach((el, i) => [
        setTimeout(() => {
            el.classList.add('reveal')
        }, 200 * i)
    ])
}

window.addEventListener('DOMContentLoaded', animaConta)