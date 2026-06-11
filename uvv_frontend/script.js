// =============================================
// FUNCIONALIDADE 1: MODO CLARO / ESCURO
// =============================================

const toggleBtn = document.getElementById('toggle-tema');

// Verifica se o usuário já tinha preferência salva
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo === 'claro') {
    document.body.classList.add('modo-claro');
    toggleBtn.textContent = '🌙 Modo Escuro';
}

toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('modo-claro');
    const modoAtual = document.body.classList.contains('modo-claro');

    if (modoAtual) {
        toggleBtn.textContent = '🌙 Modo Escuro';
        localStorage.setItem('tema', 'claro');
    } else {
        toggleBtn.textContent = '☀️ Modo Claro';
        localStorage.setItem('tema', 'escuro');
    }
});


// =============================================
// FUNCIONALIDADE 2: VALIDAÇÃO DO FORMULÁRIO
// =============================================

const formulario = document.getElementById('formulario-contato');
const mensagemSucesso = document.getElementById('mensagem-sucesso');

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio real do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Limpa erros anteriores
    limparErros();

    let valido = true;

    // Valida nome
    if (nome.length < 3) {
        exibirErro('erro-nome', 'Por favor, insira seu nome completo (mínimo 3 caracteres).');
        valido = false;
    }

    // Valida email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        exibirErro('erro-email', 'Por favor, insira um e-mail válido (ex: nome@email.com).');
        valido = false;
    }

    // Valida mensagem
    if (mensagem.length < 10) {
        exibirErro('erro-mensagem', 'A mensagem deve ter pelo menos 10 caracteres.');
        valido = false;
    }

    // Se tudo válido, exibe mensagem de sucesso
    if (valido) {
        formulario.reset();
        mensagemSucesso.style.display = 'block';

        // Oculta a mensagem de sucesso após 5 segundos
        setTimeout(function () {
            mensagemSucesso.style.display = 'none';
        }, 5000);
    }
});

function exibirErro(idElemento, texto) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = texto;
    elemento.style.display = 'block';
}

function limparErros() {
    const erros = document.querySelectorAll('.erro-campo');
    erros.forEach(function (erro) {
        erro.textContent = '';
        erro.style.display = 'none';
    });
    mensagemSucesso.style.display = 'none';
}
