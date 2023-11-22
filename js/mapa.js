var map;
const width = document.documentElement.clientWidth;

const initialCoordinates = [-5.844865661075205, -36.56710587301696]
let initialZoomLevel;

const SMALL_SCREEN_WIDTH = 640;
const LARGE_SCREEN_WIDTH = 2160;

const ZOOM_LEVEL_SMALL = 6.5;
const ZOOM_LEVEL_LARGE = 10.2;
const ZOOM_LEVEL_DEFAULT = 8.8;

const coluna_area = 'AREA_MAPEAMENTO';
const coluna_tipologia = 'TIPOLOGIA_MAPEAMENTO';
const coluna_categoria = 'CATEGORIA_MAPEAMENTO';
const coluna_investimento = 'INVESTIMENTO_MAPEAMENTO'

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


var borda_branca = {

    "opacity": 1,
    "color": 'rgba(250,250,250,1.0)',
    "dashArray": '',
    "lineCap": 'square',
    "lineJoin": 'bevel',
    "weight": 4.0,
    "fillOpacity": 0,
    "interactive": true,
};

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

var estrada_vermelha = {
    "color": "rgb( 244, 0, 0 )",
    "weight": 3,
};

var estrada_azul = {
    "color": "rgb( 16, 145, 210 )",
    "weight": 3,
};


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
            }).addTo(map);
                layerControl.addOverlay(geoJsonAux, capitalize(itemCategoria));
                subprojetoJson.push(geoJsonAux);
        });
    });
});

var geoJson_eixo_guanduba = new L.geoJson(eixo_guanduba, { style: estrada_azul, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJson_eixo_guanduba, "Eixo Guanduba");

var geoJson_eixo_producao = new L.geoJson(eixo_producao, { style: estrada_azul, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJson_eixo_producao, "Eixo Produção");

map.createPane('estradas')

var geoJsonRN_011 = new L.geoJson(RN_011, { pane: 'estradas', style: estrada_azul, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_011, 'RN 011');

var geoJsonRN_016 = new L.geoJson(RN_016, { pane: 'estradas', style: estrada_azul, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_016, 'RN 016');

var geoJsonRN_063 = new L.geoJson(RN_063, { pane: 'estradas', style: estrada_vermelha, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_063, 'RN 063');

var geoJsonRN_087 = new L.geoJson(RN_087, { pane: 'estradas', style: estrada_azul, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_087, 'RN 087');

var geoJsonRN_118 = new L.geoJson(RN_118, { pane: 'estradas', style: estrada_vermelha, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_118, 'RN 118');

var geoJsonRN233 = new L.geoJson(rn_233, { pane: 'estradas', style: estrada_vermelha, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN233, "RN 233");

var geoJsonRN_160 = new L.geoJson(RN_160, { pane: 'estradas', style: estrada_vermelha, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_160, 'RN 160');

var geoJsonRN_307 = new L.geoJson(RN_307, { pane: 'estradas', style: estrada_vermelha, onEachFeature: dadosEstrada2 });
layerControl.addOverlay(geoJsonRN_307, 'RN 307');

var geoJsonprojetos_DER_II = new L.geoJson(projetos_DER_II, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_II, 'Projetos DER II');

var geoJsonprojetos_DER_III_A = new L.geoJson(projetos_DER_III_A, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_III_A, 'Projetos DER III A');

var geoJsonprojetos_DER_III_B = new L.geoJson(projetos_DER_III_B, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_III_B, 'Projetos DER III B');

var geoJsonprojetos_DER_I_A = new L.geoJson(projetos_DER_I_A, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_I_A, 'Projetos DER I A');

var geoJsonprojetos_DER_I_B = new L.geoJson(projetos_DER_I_B, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_I_B, 'Projetos DER I B');

var geoJsonprojetos_DER_V = new L.geoJson(projetos_DER_V, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_V, 'Projetos DER V');

var geoJsonprojetos_DER_VI = new L.geoJson(projetos_DER_VI, { onEachFeature: dadosEstrada });
layerControl.addOverlay(geoJsonprojetos_DER_VI, 'Projetos DER VI');

let index_inicial = 1

// AREA SECTION
grupo_area.forEach(area => {
    const jsonGrupoArea = investimentos_teste.features.filter(dados => dados.properties[coluna_area] === area);
    const itensTipologia = get_valores_unicos(jsonGrupoArea, coluna_tipologia, 'lista');
    let idxInicialArea = index_inicial;

    adicionarGrupo(capitalize(area), idxInicialArea, true, true);
    index_inicial++
    // TIPOLOGIA SECTION
    itensTipologia.forEach((tipologia) => {
        const jsonGrupoTipologia = jsonGrupoArea.filter(dados => dados.properties[coluna_tipologia] == tipologia);
        const itensCategoria = get_valores_unicos(jsonGrupoTipologia, coluna_categoria, 'lista');
        let idxInicialTipologia = index_inicial;
        let idxTipologiaFinal = index_inicial + itensCategoria.length + 1;
        adicionarGrupo(capitalize(tipologia), idxInicialTipologia, true, true);
        relacionarSubGrupo(capitalize(tipologia), index_inicial, index_inicial + 1, idxTipologiaFinal, true);
        index_inicial = idxTipologiaFinal;
    });
    relacionarSubGrupo(capitalize(area), idxInicialArea, idxInicialArea + 1, index_inicial);
    idxInicialArea = index_inicial;
})

adicionarGrupo("Estradas ", index_inicial, true, true);

adicionarGrupo("Obras", index_inicial + 1, true);
relacionarSubGrupo('Obras', index_inicial + 1, index_inicial + 2, index_inicial + 12);

adicionarGrupo("Projetos", index_inicial + 12, true);
relacionarSubGrupo('Projetos', index_inicial + 12, index_inicial + 13, index_inicial + 20);

relacionarSubGrupo("Estradas ", index_inicial, index_inicial + 1, index_inicial + 20);

selecionar_dot_nav(investimentos_teste.features)

function filtrar() {
    let input = document.getElementById("filtro_municipio")
    let texto_filtro = input.value.toLowerCase()

    subprojetoJson.forEach(function (layerGroup) {
        layerGroup.eachLayer(function (layer) {
            if (layer._icon != null)
                if (contem_municipio_tipologia_territorio_categoria_invest(layer, texto_filtro)) {
                    layer._icon.style.display = 'block';
                } else {
                    layer._icon.style.display = 'None';
                }
        })
    })
}

function contem_municipio_tipologia_territorio_categoria_invest(layer, texto_filtro) {
    municipio = layer.feature.properties['MUNICÍPIO'];
    territorio = layer.feature.properties['TERRITÓRIO'];
    categoria = layer.feature.properties[coluna_categoria];
    invest = layer.feature.properties[coluna_investimento];

    return municipio.toLowerCase().includes(texto_filtro) || territorio.toLowerCase().includes(texto_filtro)
        || categoria.toLowerCase().includes(texto_filtro) || invest.toLowerCase().includes(texto_filtro);
}

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