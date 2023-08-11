function close_modal(){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'none';

    let carousels = document.querySelectorAll('.fotos')
    carousels.forEach(function(carousel){carousel.style.display='none'})

    let informacoes = document.querySelectorAll('.informacao')
    informacoes.forEach(function(informacao){informacao.style.display='none'})
}

function show_modal(id){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'flex';
    exibir_carousel(id)
}