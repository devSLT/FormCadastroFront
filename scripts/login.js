document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const URL = 'https://formcadastroback.onrender.com/login';

    const data = {
        email,
        password,
    }

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then((res) => {

            if (!res.ok) {
                throw new Error('Erro na resposta do servidor: ' + res.status);
            }
            return res.json();

        })
        .then((data) => {
            console.log(data);

            alert(data.message)

        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar o formulário.');
        });

})