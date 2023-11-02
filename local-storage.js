
function salvaDados() {
    localStorage.setItem('nome', `${nome.value}`);
    localStorage.setItem('sobrenome', `${sobrenome.value}`);
    localStorage.setItem('cpf', `${cpf.value}`);
    localStorage.setItem('email', `${email.value}`);
    localStorage.setItem('senha', `${senha.value}`);
    localStorage.setItem('cep', `${cep.value}`);
    localStorage.setItem('estado', `${estado.value}`);
    localStorage.setItem('cidade', `${cidade.value}`);
    localStorage.setItem('bairro', `${bairro.value}`);
    localStorage.setItem('logradouro', `${logradouro.value}`);
    localStorage.setItem('numero', `${numero.value}`);
}

function criaForm() {
    criarForm.addEventListener('submit', salvaDados);
}

if (document.contains(document.querySelector('#criar-form'))) {
    criaForm()
}


const nomeSalvo = localStorage.getItem('nome');
const SobrenomeSalvo = localStorage.getItem('sobrenome');

if (document.contains(document.querySelector('#usuario-logado')) && nomeSalvo) {
    document.querySelector('#usuario-logado').innerHTML = `Olá, ${nomeSalvo} ${SobrenomeSalvo}`;
}






