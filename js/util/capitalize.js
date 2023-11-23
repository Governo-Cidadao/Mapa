function capitalize(text) {
    if (text == null)
        return "";
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

function formatarNumeroInteiro(valorString) {
    var valorInteiro = parseInt(valorString, 10);
    var valorFormatado = valorInteiro.toLocaleString('pt-BR');
    return valorFormatado;
}