function mover(long, lat){

    let centro = map.getCenter();
    let novo_centro = L.latLng(centro.lat + lat, centro.lng + long);
    map.setView(novo_centro);
}
let movimentacao
function iniciar_movimentacao(long, lat){
    movimentacao = setInterval(function() {
                mover(long, lat);
            }, 100);
}

function finalizar_movimentacao(long, lat){
    clearInterval(movimentacao)
}