let index = 0;

function mudar_imagem(id) {
    let container = document.getElementById(id + "_fotos");
    let imgs = container.querySelectorAll("img")

    for (let i = 0; i < imgs.length; i++) {
        if (i == index) {
            imgs[index].style.display = "block";
        } else {
            imgs[i].style.display = "none";
        }
    }
}

function voltar(botao_voltar, id) {
    let botao_avancar = document.getElementById(`botao_avancar_${id}`)
    if (index > 0) {
        index -= 1;
        mudar_imagem(id);
        if (botao_avancar.style.visibility == 'hidden') {
            botao_avancar.style.visibility = 'visible'
        }
        if (index == 0) {
            botao_voltar.style.visibility = 'hidden'
        }
    }
}

function avancar(botao_avancar, id, max) {

    let botao_voltar = document.getElementById(`botao_voltar_${id}`)
    if (index < max - 1) {
        index += 1;
        if (botao_voltar.style.visibility == 'hidden') {
            botao_voltar.style.visibility = 'visible'
        }
        mudar_imagem(id)
        if (index == max - 1) {
            botao_avancar.style.visibility = 'hidden'
        }
    }
}

function exibir_carousel(id) {
    const carousel = document.getElementById(id);
    carousel.style.display = 'flex';
}

function ocultar_carousel(id) {
    const carousel = document.getElementById(id);
    carousel.style.display = 'none';
}