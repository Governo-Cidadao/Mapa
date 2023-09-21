function close_modal(){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'none';

    let carousels = document.querySelectorAll('.fotos')
    carousels.forEach(function(carousel){carousel.style.display='none'})

    let informacoes = document.querySelectorAll('.informacao')
    informacoes.forEach(function(informacao){informacao.style.display='none'})
}

function esconder_elementos(){    

    let filtro = document.querySelector('.containerFiltro')
    let layers = document.querySelector('.container_buton_personalizado')
    let controller = document.querySelector('.container-controller')
    let minimap = document.querySelector('.leaflet-control-minimap')
    filtro.style.display = 'none';
    layers.style.display = 'none';
    controller.style.display = 'none';
    minimap.style.display = 'none';

}

function show_modal(id){
    let modal = document.querySelector('.container-modal')

    esconder_elementos()
    
    modal.style.display = 'flex';
    exibir_carousel(id)
}