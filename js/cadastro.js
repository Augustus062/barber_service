document.querySelector('.form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário recarregue a página

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const endereco = document.getElementById('endereco').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Aqui você pode adicionar a lógica para salvar os dados, enviar para uma API, etc.
    console.log('Dados do Cadastro:', { nome, endereco, telefone, email });
    
    // Exemplo de mmensagem de sucesso
    alert('Barbearia cadastrada com sucesso!');
});
