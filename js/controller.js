function mover(long, lat){

    let centro = map.getCenter();
    let novo_centro = L.latLng(centro.lat + lat, centro.lng + long);
    map.setView(novo_centro);
}