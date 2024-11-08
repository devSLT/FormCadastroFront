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