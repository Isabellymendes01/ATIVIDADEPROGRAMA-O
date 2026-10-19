function criptografar() {
    const campoTexto = document.getElementById('inputText');
    const elementoResultado = document.getElementById('output');
    const elementoTexto = document.getElementById('outputText');

    const texto = campoTexto.value.toUpperCase();
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const caractere = texto[i];
        const codigo = texto.charCodeAt(i);

        // Verifica se o caractere é uma letra de A até Z.
        if (codigo >= 65 && codigo <= 90) {
            // Desloca a letra três posições no alfabeto.
            const novoCodigo = ((codigo - 65 + 3) % 26) + 65;

            resultado += String.fromCharCode(novoCodigo);
        } else {
            // Preserva espaços, números e pontuação.
            resultado += caractere;
        }
    }

    elementoTexto.textContent = resultado || '(mensagem vazia)';
    elementoResultado.hidden = false;
}

// Aciona a criptografia ao clicar no botão.
document
    .getElementById('encryptButton')
    .addEventListener('click', criptografar);

// Permite criptografar pressionando Enter.
document
    .getElementById('inputText')
    .addEventListener('keydown', function (evento) {
        if (evento.key === 'Enter') {
            criptografar();
        }
    });
