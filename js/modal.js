function close_modal(){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'none';

    let carousels = document.querySelectorAll('.carousel-container')
    carousels.forEach(function(carousel){carousel.style.display='none'})
}

function show_modal(id){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'flex';
    exibir_carousel(id)
}