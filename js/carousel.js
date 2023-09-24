
function mudar_imagem(id){
    let carousel =  document.getElementById(id+'_fotos')
    let index = parseInt(carousel.getAttribute('index'))
    let container = document.getElementById(id+"_fotos");
    let imgs = container.querySelectorAll("img")

    for(let i=0; i<imgs.length; i++){
        if (i == index){
            imgs[index].style.display ="block";
        }else{
            imgs[i].style.display = "none";
        }
    }

}

function voltar(botao_voltar, id){
    let carousel =  document.getElementById(id+'_fotos')
    let index = parseInt(carousel.getAttribute('index'))
    let botao_avancar = document.getElementById(`botao_avancar_${id}`)
    if(index>0){
        index-=1;
        carousel.setAttribute('index', index)
        mudar_imagem(id);
        if(botao_avancar.style.visibility == 'hidden'){
            botao_avancar.style.visibility = 'visible'
        }
        if (index==0){
            botao_voltar.style.visibility = 'hidden'
        }
    }


}

function avancar(botao_avancar, id, max){
    let carousel =  document.getElementById(id+'_fotos')
    let index = parseInt(carousel.getAttribute('index'))
    let botao_voltar = document.getElementById(`botao_voltar_${id}`)
    if(index < max-1){
        index+=1;
        carousel.setAttribute('index', index)
        if(botao_voltar.style.visibility == 'hidden'){
            botao_voltar.style.visibility = 'visible'
        }
        mudar_imagem(id)
        if (index == max-1){
            botao_avancar.style.visibility = 'hidden'
        }
    }


}

function exibir_carousel(id){
    const carousel = document.getElementById(id);
    carousel.style.display='flex';
}

function ocultar_carousel(id){
    const carousel = document.getElementById(id);
    carousel.style.display='none';
}

// Fechando modal de carrossel ao clicar fora do elmento
document.addEventListener('mouseup', function(e) {
    container_modal = document.querySelector('.container-modal')
    if (!container_modal.contains(e.target)) {
        // alert('fora')
        // container_modal.style.display = 'none';
        close_modal();
    }
    else{
      container_modal.style.display = 'flex';
    }
  });
  