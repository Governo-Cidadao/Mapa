var map;
const width = document.documentElement.clientWidth;

const initialCoordinates = [-5.844865661075205, -36.56710587301696]
let initialZoomLevel;

const SMALL_SCREEN_WIDTH = 640;
const LARGE_SCREEN_WIDTH = 2160;

const ZOOM_LEVEL_SMALL = 6.5;
const ZOOM_LEVEL_LARGE = 10.2;
const ZOOM_LEVEL_DEFAULT = 7.8;

const coluna_area = 'AREA_MAPEAMENTO';
const coluna_tipologia = 'TIPOLOGIA_MAPEAMENTO';
const coluna_categoria = 'CATEGORIA_MAPEAMENTO';
const coluna_investimento = 'INVESTIMENTO_MAPEAMENTO';

if (width < SMALL_SCREEN_WIDTH) {
    initialZoomLevel = ZOOM_LEVEL_SMALL;
} else if (width > LARGE_SCREEN_WIDTH) {
    initialZoomLevel = ZOOM_LEVEL_LARGE;
} else {
    initialZoomLevel = ZOOM_LEVEL_DEFAULT;
}

map = new L.map('map', {
    center: new L.LatLng(-6, -37),
    zoom: 8,
    attributionControl: true,
    zoomControl: false,
    minZoom: 8,
    maxZoom: 12,
    zoomSnap: 0.10,
    closePopupOnClick: false,
}).setView(initialCoordinates, initialZoomLevel);

map.touchZoom.enable();


var baseMaps = {};

// Desabilitando Zoom do mapa ao dar duplo click
map.doubleClickZoom.disable();


// Desabilitando menu de contexto para toda a pagina
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

var borda_fundo_branco = {

    "opacity": 1,
    "color": 'rgba(250,250,250,1.0)',
    "dashArray": '',
    "lineCap": 'square',
    "lineJoin": 'bevel',
    "weight": 4.0,
    "fillColor": 'rgb(193,193,193)',
    "fillOpacity": 0.4,
    "interactive": true,
};

var mapa_fundo = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    attribution: '© contributors: @joabesamuell, @_ig0rdias, @celilimaf, @rodmatth, @jonas.ssilva'
});
mapa_fundo.addTo(map);

var brazilStyle = {
    "color": "#111",
    "weight": 0,
    "opacity": 1
};

var base_brasil = L.geoJSON(brazil, {
    style: brazilStyle
}).addTo(map);

var base_minimap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
})
var minimap = new L.Control.MiniMap(base_minimap, {
    toggleDisplay: true
});
minimap.addTo(map);
var layerControl = new L.control.layers(baseMaps).addTo(map);

var geoJsonTerritorios = new L.geoJson(Territorios, { style: borda_fundo_branco }).addTo(map);
layerControl.addOverlay(geoJsonTerritorios, 'Territórios');

// subprojetos

var subprojetoJson = []
const grupo_area = get_valores_unicos(investimentos_teste, coluna_area, 'json');

// AREA SECTION
grupo_area.forEach(area => {
    const jsonGrupoArea = investimentos_teste.features.filter(dados => dados.properties[coluna_area] === area);
    const itensTipologia = get_valores_unicos(jsonGrupoArea, coluna_tipologia, 'lista');

    // TIPOLOGIA SECTION
    itensTipologia.forEach((tipologia) => {
        const jsonGrupoTipologia = jsonGrupoArea.filter(dados => dados.properties[coluna_tipologia] === tipologia);
        const itensCategoria = get_valores_unicos(jsonGrupoTipologia, coluna_categoria, 'lista');

        // CATEGORIA SECTION
        itensCategoria.forEach((itemCategoria) => {
            const jsonItem = jsonGrupoTipologia.filter(dados => dados.properties[coluna_categoria] === itemCategoria);
            const geoJsonAux = new L.geoJson(jsonItem, {
                pointToLayer: icone_investimentos,
                onEachFeature: popup_investimentos
            })
            layerControl.addOverlay(geoJsonAux, capitalize(itemCategoria));
            subprojetoJson.push(geoJsonAux);
        });
    });
});

let index_inicial = 1

// AREA SECTION
grupo_area.forEach(area => {
    const jsonGrupoArea = investimentos_teste.features.filter(dados => dados.properties[coluna_area] === area);
    const itensTipologia = get_valores_unicos(jsonGrupoArea, coluna_tipologia, 'lista');
    let idxInicialArea = index_inicial;

    adicionarGrupo(capitalize(area), idxInicialArea, false, true);
    index_inicial++
    // TIPOLOGIA SECTION
    itensTipologia.forEach((tipologia) => {
        const jsonGrupoTipologia = jsonGrupoArea.filter(dados => dados.properties[coluna_tipologia] == tipologia);
        const itensCategoria = get_valores_unicos(jsonGrupoTipologia, coluna_categoria, 'lista');
        let idxInicialTipologia = index_inicial;
        let idxTipologiaFinal = index_inicial + itensCategoria.length + 1;
        adicionarGrupo(capitalize(tipologia), idxInicialTipologia, false, true);
        relacionarSubGrupo(capitalize(tipologia), index_inicial, index_inicial + 1, idxTipologiaFinal, true);
        index_inicial = idxTipologiaFinal;
    });
    relacionarSubGrupo(capitalize(area), idxInicialArea, idxInicialArea + 1, index_inicial);
    idxInicialArea = index_inicial;
})

selecionar_dot_nav(investimentos_teste.features)

function get_valores_unicos(objeto, coluna, tipo) {
    let qtd_elementos;
    if (tipo == 'json') {
        qtd_elementos = objeto.features.length
    } else {
        qtd_elementos = objeto.length
    }
    let lista_valores = []
    for (let i = 0; i < qtd_elementos; i++) {
        let valor;
        if (tipo == 'json') {
            valor = objeto.features[i].properties[coluna]
        } else {
            valor = objeto[i].properties[coluna]
        }
        if (!lista_valores.includes(valor) && valor != null) {
            lista_valores.push(valor)
        }
    }

    return lista_valores
}