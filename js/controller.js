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
    let x_inicial = 0;
    let y_inicial = 0;
    itemArrastavel.addEventListener("mousedown", (e) => {
        itemArrastavel.style.cursor = "grabbing";
        div_arrastavel = document.querySelector('.container-controller')
        x_inicial = e.clientX
        y_inicial = e.clientY
    });

    itemArrastavel.addEventListener("touchstart", (e) => {
        itemArrastavel.style.cursor = "grabbing";
        div_arrastavel = document.querySelector('.container-controller')
        x_inicial = e.touches[0].clientX
        y_inicial = e.touches[0].clientY
    });


    document.addEventListener("mousemove", (e) => {
        if (div_arrastavel) {
            div_arrastavel.style.left = x_inicial + (e.clientX - x_inicial)  + "px";
            div_arrastavel.style.top =  y_inicial + (e.clientY - y_inicial)  + "px";
            x_inicial = e.clientX
            y_inicial = e.clientY
        }
    });

    document.addEventListener("touchmove", (e) => {
        if (div_arrastavel) {
            div_arrastavel.style.left = x_inicial + (e.touches[0].clientX - x_inicial)  + "px";
            div_arrastavel.style.top =  y_inicial + (e.touches[0].clientY - y_inicial)  + "px";
            x_inicial = e.touches[0].clientX
            y_inicial = e.touches[0].clientY
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