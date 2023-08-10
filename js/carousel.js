let index = 0;

function mudar_imagem(id){
    let container = document.getElementById(id);
    let imgs = container.querySelectorAll("img")

    for(let i=0; i<imgs.length; i++){
        if (i == index){
            imgs[index].style.display ="block";
        }else{
            imgs[i].style.display = "none";
        }
    }

}

function voltar(id){
    if(index>0){
        index-=1;
    }
    mudar_imagem(id)
}

function avancar(id, max){
    if(index < max-1){
        index+=1;
    }
    mudar_imagem(id)
}

function exibir_carousel(id){
    const carousel = document.getElementById(id);
    carousel.style.display='flex';
}

function ocultar_carousel(id){
    const carousel = document.getElementById(id);
    carousel.style.display='none';
}