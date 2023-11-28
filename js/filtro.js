function filtrar() {
    let input = document.getElementById("filtro_municipio")
    let texto_filtro = input.value.toLowerCase()

    subprojetoJson.forEach(function (layerGroup) {
        layerGroup.eachLayer(function (layer) {
            if (layer._icon != null) {
                layer._icon.style.display = 'None';
                if (contem_municipio_tipologia_territorio_categoria_invest(layer, texto_filtro)) {
                    layer._icon.style.display = 'block';
                }
            }
            else if (layer._path != null){
                layer._path.style.display = 'None';
                if (contem_municipio_tipologia_territorio_categoria_invest(layer, texto_filtro)) {
                    layer._path.style.display = 'block';
                }
            }
        })
    })
}

function contem_municipio_tipologia_territorio_categoria_invest(layer, texto_filtro) {
    municipio = layer.feature.properties['MUNICÍPIO'];
    territorio = layer.feature.properties['TERRITÓRIO'];
    estabelecimento = layer.feature.properties['ESTABELECIMENTO'];
    area = layer.feature.properties[coluna_area];
    tipologia = layer.feature.properties[coluna_tipologia];
    categoria = layer.feature.properties[coluna_categoria];
    invest = layer.feature.properties[coluna_investimento];

    return municipio.toLowerCase().includes(texto_filtro) || territorio.toLowerCase().includes(texto_filtro)
        || categoria.toLowerCase().includes(texto_filtro) || invest.toLowerCase().includes(texto_filtro)
        || area.toLowerCase().includes(texto_filtro) || tipologia.toLowerCase().includes(texto_filtro)
        || estabelecimento.toLowerCase().includes(texto_filtro);
}