document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const URL = 'http://localhost:8080/login';

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