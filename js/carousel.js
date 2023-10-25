
function mudar_imagem(id) {
    let carousel = document.getElementById(id + '_fotos');
    let index = parseInt(carousel.getAttribute('index'));
    let container = document.getElementById(id + '_fotos');
    let pontos_navegacao = document.querySelectorAll('[id="' + id + '_ponto"]');
    let imgs = container.querySelectorAll('.img-carousel');


    for (let i = 0; i < imgs.length; i++) {
        if (i === index) {
            imgs[i].style.display = "block";
            imgs[i].classList.add('transicao')
            pontos_navegacao[i].classList.add('ativo');
        }
        else {
        imgs[i].style.display = "none";
        pontos_navegacao[i].classList.remove('ativo');
        imgs[i].classList.remove('transicao')

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
    let carousel = document.getElementById(id+'_fotos')
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

function selecionar_dot_nav(feature_list){

    feature_list.forEach(feature => {
        const id_smi = feature.properties['CÓDIGO ESTABELECIMENTO']
        const nome = feature.properties[coluna_area]
        const id = `${nome}_${id_smi}`

        const dots = document.querySelectorAll(`[id^="${id}_ponto"]`);
        const carousel = document.getElementById(`${id}_fotos`);
        const botao_avancar = document.getElementById(`botao_avancar_${id}`);
        const botao_voltar = document.getElementById(`botao_voltar_${id}`);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                carousel.setAttribute('index', index);
                mudar_imagem(id);
                botao_avancar.style.visibility = index < dots.length - 1 ? 'visible' : 'hidden';
                botao_voltar.style.visibility = index > 0 ? 'visible' : 'hidden';
            });
        });
    })
}

// Fechando modal de carrossel ao clicar fora do elmento
document.addEventListener('mouseup', function(e) {
    container_modal = document.querySelector('.container-modal')
    if (!container_modal.contains(e.target)) {
        close_modal();
    }
    else{
      container_modal.style.display = 'flex';
    }
  });
