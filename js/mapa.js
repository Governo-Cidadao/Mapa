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
    maxZoom: 10,
    zoomSnap: 0.10,
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
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
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
    "weight": 5,
};

var estrada_azul = {
    "color": "rgb( 16, 145, 210 )",
    "weight": 5,
};


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

var fundo_azul = {
    "color": 'rgba(35,35,35,1.0)',
    "fillOpacity": 1,
    "fill": true,
    "fillColor": 'rgba(109,212,224,1.0)',
    "weight": 1.0,

};

var fundo_cinza =
{
    "opacity": 1,
    "color": 'rgba(0,0,0,1.0)',
    'weight': 1.0,
    'fill': true,
    'fillOpacity': 1,
    'fillColor': 'rgba(182,186,190,1.0)',
}

var fundo_cinza_claro =
{
    "opacity": 1,
    "color": 'rgba(35,35,35,1.0)',
    'weight': 1.0,
    'fill': true,
    'fillOpacity': 1,
    'fillColor': 'rgba(225,225,225,1.0)',
}
// de alguma forma isso faz com que a borda branca fique sempre visivel enquanto a camada estiver ativada
map.createPane('pane_semiarido_RN_municipios')
map.createPane('pane_semiarido');
map.createPane('pane_Territrios');

var geoJsonsemiarido_territorio = new L.geoJson(semiarido_territorio, { pane: 'pane_Territrios', style: borda_branca, onEachFeature: dados_semiarido });
layerControl.addOverlay(geoJsonsemiarido_territorio, 'Semiárido território');

var geoJsonsemiarido = new L.geoJson(semiarido, { pane: "pane_semiarido", style: fundo_azul });
layerControl.addOverlay(geoJsonsemiarido, 'Semiárido');

var geoJsonsemiarido_RN_municipios = new L.geoJson(semiarido_RN_municipios, { pane: 'pane_semiarido_RN_municipios', style: fundo_cinza });
layerControl.addOverlay(geoJsonsemiarido_RN_municipios, 'Semiárido RN municípios');

var fundo_verde_distritos =
{
    'opacity': 1,
    'color': 'rgba(252,252,252,1.0)',
    'dashArray': '',
    'lineCap': 'butt',
    'lineJoin': 'miter',
    'weight': 1.0,
    'fill': true,
    'fillOpacity': 1,
    'fillColor': 'rgb(159,209,59)',
    'interactive': true,
}

var geoJsonDistrito_cor = new L.geoJson(Distrito_cor, { style: fundo_verde_distritos });
layerControl.addOverlay(geoJsonDistrito_cor, 'Distrito cor');

var geoJsonDistrito_limitacao = new L.geoJson(Distrito_limitacao, { style: { 'fillOpacity': 0, color: 'white' } });
layerControl.addOverlay(geoJsonDistrito_limitacao, 'Distrito limitação');

let grupos = get_valores_unicos(investimentos_teste, coluna_area, 'json')

for (let i = 0; i < grupos.length; i++) {
    let jsonGrupo = investimentos_teste.features.filter(dados => dados.properties[coluna_area] == grupos[i])
    let itens = get_valores_unicos(jsonGrupo, coluna_tipologia, 'lista')
    for (let j in itens) {
        let jsonItem = jsonGrupo.filter(dados => dados.properties[coluna_tipologia] == itens[j])
        var geoJsonAux = new L.geoJson(jsonItem, {
            pointToLayer: icone_investimentos,
            onEachFeature: function (feature, layer) {
                popup_investimentos(feature, layer)
            }
        }).addTo(map);
        layerControl.addOverlay(geoJsonAux, itens[j]);
        subprojetoJson.push(geoJsonAux);
    }
}

adicionarGrupo("Estradas", 1);
relacionarSubGrupo('Estradas', 1, 2, 12);

adicionarGrupo("Estradas DER", 12);
relacionarSubGrupo('Estradas DER', 12, 13, 20);

adicionarGrupo("Semiárido", 20);
relacionarSubGrupo('Semiárido', 20, 21, 24);

adicionarGrupo("Distritos", 24);
relacionarSubGrupo('Distritos', 24, 25, 27);

let index_inicial = 27
for (let i = 0; i < grupos.length; i++) {
    let jsonGrupo = investimentos_teste.features.filter(dados => dados.properties[coluna_area] == grupos[i])
    let itens = get_valores_unicos(jsonGrupo, coluna_tipologia, 'lista')
    let index_final = index_inicial + itens.length + 1
    adicionarGrupo(grupos[i], index_inicial, true);
    relacionarSubGrupo(grupos[i], index_inicial, index_inicial + 1, index_final);
    index_inicial = index_final
}

selecionar_dot_nav(investimentos_teste.features)

function filtrar() {
    let input = document.getElementById("filtro_municipio")
    let texto_filtro = input.value.toLowerCase()

    subprojetoJson.forEach(function (layerGroup) {
        layerGroup.eachLayer(function (layer) {
            if (contem_municipio_tipologia_territorio_categoria(layer, texto_filtro)) {
                layer._icon.style.display = 'block';
            } else {
                layer._icon.style.display = 'None';
            }
        })
    })
}

function contem_municipio_tipologia_territorio_categoria(layer, texto_filtro){
    municipio = layer.feature.properties['MUNICÍPIO'];
    territorio = layer.feature.properties['TERRITÓRIO'];
    tipologia = layer.feature.properties[coluna_tipologia];
    categoria = layer.feature.properties[coluna_categoria];

    return municipio.toLowerCase().includes(texto_filtro) || tipologia.toLowerCase().includes(texto_filtro)
    || territorio.toLowerCase().includes(texto_filtro) || categoria.toLowerCase().includes(texto_filtro);
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