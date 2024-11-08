document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('emailConfirm').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const cpf = document.getElementById('cpf').value;

    const URL = 'https://formcadastroback.onrender.com/cadastro';

    const data = {
        name,
        email,
        emailConfirm,
        password,
        passwordConfirm,
        cpf,
    }

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            alert(data.message)
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar o formulário.');
        });

})