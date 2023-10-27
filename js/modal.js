function close_modal(){
    let modal = document.querySelector('.container-modal')
    modal.style.display = 'none';

    let carousels = document.querySelectorAll('.fotos')
    carousels.forEach(function(carousel){carousel.style.display='none'})

    let informacoes = document.querySelectorAll('.informacao')
    informacoes.forEach(function(informacao){informacao.style.display='none'})

    mostrar_elementos(true)
    pararCarrosselAutomatico()
}

function mostrar_elementos(opcao){    

    let filtro = document.querySelector('.containerFiltro')
    let layers = document.querySelector('.container_buton_personalizado')
    let controller = document.querySelector('.container-controller')
    let minimap = document.querySelector('.leaflet-control-minimap')

    if (opcao == true){
        filtro.style.display = 'flex';
        layers.style.display = 'flex';
        controller.style.display = 'flex';
        minimap.style.display = 'block';
    }
    else{
        filtro.style.display = 'none';
        layers.style.display = 'none';
        controller.style.display = 'none';
        minimap.style.display = 'none';
    }




}

function show_modal(id,ver_informacoes=false,qtd_fotos=0){
    let modal = document.querySelector('.container-modal')
    close_fotos = document.querySelector('.close-icon')
    info = document.querySelector('.close-icon-info')
    let id_foto = id.replace(/_fotos$/, '');

    if (ver_informacoes == true){
        close_fotos.style.display = 'none'
        info.style.display = 'block'
    }
    else{
        close_fotos.style.display = 'block'
        info.style.display = 'block'
        iniciarCarrosselAutomatico(id_foto, qtd_fotos)
    }

    mostrar_elementos(false)
    
    modal.style.display = 'flex';
    exibir_carousel(id)
}