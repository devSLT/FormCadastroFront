function formatCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    // Formata o CPF (xxx.xxx.xxx-xx)
    if (value.length <= 3) {
        input.value = value;
    } else if (value.length <= 6) {
        input.value = value.replace(/(\d{3})(\d{0,3})/, '$1.$2');
    } else if (value.length <= 9) {
        input.value = value.replace(/(\d{3})(\d{3})(\d{0,3})/, '$1.$2.$3');
    } else {
        input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    }
}

document.getElementById('form').addEventListener('submit', (event) => {

    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailConfirm = document.getElementById('emailConfirm').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    const cpf = document.getElementById('cpf').value.replace(/\D/g, '');
    
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
            console.log(cpf)
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao enviar o formulário.');
        });

})