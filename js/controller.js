function mover(long, lat) {
    let centro = map.getCenter();
    let novo_centro = L.latLng(centro.lat + lat, centro.lng + long);
    map.setView(novo_centro);
    }

let movimentacao
let emMovimentacao = false
function iniciar_movimentacao(long, lat) {
    emMovimentacao = true
    movimentacao = setInterval(function () {
        mover(long, lat);
    }, 100);
}

function finalizar_movimentacao() {
    clearInterval(movimentacao)
    emMovimentacao = false
}


function arrastar_controller(){
    const itemArrastavel = document.querySelector(".arrastavel");
    let div_arrastavel = null;
    let dif_X = 0;
    let dif_y = 0;
    itemArrastavel.addEventListener("mousedown", (e) => {
        itemArrastavel.style.cursor = "grabbing";
        div_arrastavel = document.querySelector('.container-controller')
        const rect = div_arrastavel.getBoundingClientRect();
        dif_X = e.clientX - rect.left;
        dif_y = e.clientY - rect.top;
    });

    itemArrastavel.addEventListener("touchstart", (e) => {
        itemArrastavel.style.cursor = "grabbing";
        div_arrastavel = document.querySelector('.container-controller')
        dif_X = e.touches[0].clientX - rect.left;
        dif_y = e.touches[0].clientY - rect.top;
    });


    document.addEventListener("mousemove", (e) => {
        if (div_arrastavel) {
            div_arrastavel.style.left = (e.clientX - dif_X)  + "px";
            div_arrastavel.style.top = (e.clientY - dif_y)  + "px";
        }
    });

    document.addEventListener("touchmove", (e) => {
        if (div_arrastavel) {
            div_arrastavel.style.left = (e.touches[0].clientX - dif_X)  + "px";
            div_arrastavel.style.top = (e.touches[0].clientY - dif_y)  + "px";
        }
    });

    document.addEventListener("mouseup", () => {
        if (div_arrastavel) {
            itemArrastavel.style.cursor = "grab";
            div_arrastavel = null;
        }
    });
    
    document.addEventListener("touchend", () => {
        if (div_arrastavel) {
            itemArrastavel.style.cursor = "grab";
            div_arrastavel = null;
        }
    });
}



arrastar_controller()