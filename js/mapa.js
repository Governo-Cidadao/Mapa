var map;
const width = document.documentElement.clientWidth;

const initialCoordinates = [-5.844865661075205, -36.56710587301696]
let initialZoomLevel;

const SMALL_SCREEN_WIDTH = 640;
const LARGE_SCREEN_WIDTH = 2160;

const ZOOM_LEVEL_SMALL = 6.5;
const ZOOM_LEVEL_LARGE = 10.2;
const ZOOM_LEVEL_DEFAULT = 8.8;

const coluna_nome = 'Nome Item';
const coluna_grupo = 'Grupo';

if (width < SMALL_SCREEN_WIDTH) {
    initialZoomLevel = ZOOM_LEVEL_SMALL;
} else if (width > LARGE_SCREEN_WIDTH) {
    initialZoomLevel = ZOOM_LEVEL_LARGE;
} else {
    initialZoomLevel = ZOOM_LEVEL_DEFAULT;
}

map = new L.map('map',{   center: new L.LatLng(-6, -37),
                        zoom: 8,
                        attributionControl: true,
                        zoomControl: false,
                        minZoom: 7,
                        maxZoom: 10,
                        zoomSnap: 0.10,}).setView(initialCoordinates, initialZoomLevel);

var baseMaps = {};

// Desabilitando Zoom do mapa ao dar duplo click
map.doubleClickZoom.disable();

// Desabilitando menu de contexto para toda a pagina
document.addEventListener("contextmenu", function(e){
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

var mapa_fundo = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
mapa_fundo.addTo(map);

var base_minimap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
})
var minimap = new L.Control.MiniMap(base_minimap, {
    toggleDisplay: true
});
minimap.addTo(map);
var layerControl = new L.control.layers(baseMaps).addTo(map);

var geoJsonTerritorios = new L.geoJson(Territorios, {style: borda_fundo_branco}).addTo(map);
layerControl.addOverlay(geoJsonTerritorios, 'Territórios');

// subprojetos

var geoJsonAlgasmarinhas = new L.geoJson(Algasmarinhas, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonAlgasmarinhas, 'Algasmarinhas');

var geoJsonApicultura = new L.geoJson(Apicultura, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonApicultura, 'Apicultura');

var geoJsonArtesanato = new L.geoJson(Artesanato, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonArtesanato, 'Artesanato');

var geoJsonAvicultura = new L.geoJson(Avicultura, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonAvicultura, 'Avicultura');

var geoJsonBeneficiamento_de_produtos_alimenticios = new L.geoJson(Beneficiamento_de_produtos_alimenticios, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonBeneficiamento_de_produtos_alimenticios, 'Beneficiamento_de_produtos_alimenticios');

var geoJsonCajucultura = new L.geoJson(Cajucultura, {pointToLayer: createCustomIcon,
                                        onEachFeature:function(feature, layer){mostrar_imagem2(feature, layer, 'Cajucultura', 3)}}).addTo(map);
layerControl.addOverlay(geoJsonCajucultura, 'Cajucultura');

var geoJsonFruticultura = new L.geoJson(Fruticultura, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonFruticultura, 'Fruticultura');

var geoJsonFruticultura_irrigada = new L.geoJson(Fruticultura_irrigada, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonFruticultura_irrigada, 'Fruticultura_irrigada');

var geoJsonLeites_e_derivados = new L.geoJson(Leites_e_derivados, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonLeites_e_derivados, 'Leites_e_derivados');

var geoJsonMadiocultura = new L.geoJson(Madiocultura, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonMadiocultura, 'Madiocultura');

var geoJsonObras_hidroambienttais = new L.geoJson(Obras_hidroambienttais, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonObras_hidroambienttais, 'Obras_hidroambienttais');

var geoJsonPesca = new L.geoJson(Pesca, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonPesca, 'Pesca');

var geoJsonReciclagem = new L.geoJson(Reciclagem, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonReciclagem, 'Reciclagem');

var geoJsonRecuperacao_areas_degradadas = new L.geoJson(Recuperacao_areas_degradadas, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonRecuperacao_areas_degradadas, 'Recuperacao_areas_degradadas');

var geoJsonSistemas_de_abastecimento_e_tratamento_de_agua = new L.geoJson(Sistemas_de_abastecimento_e_tratamento_de_agua, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonSistemas_de_abastecimento_e_tratamento_de_agua, 'Sistemas_de_abastecimento_e_tratamento_de_agua');

var geoJsonTextil = new L.geoJson(Textil, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonTextil, 'Textil');

var geoJsonUnidade_de_comercializacao = new L.geoJson(Unidade_de_comercializacao, {pointToLayer: createCustomIcon, onEachFeature:mostrar_imagem}).addTo(map);
layerControl.addOverlay(geoJsonUnidade_de_comercializacao, 'Unidade_de_comercializacao');


var subprojetoJson = [
                        geoJsonAlgasmarinhas,
                        geoJsonApicultura,
                        geoJsonArtesanato,
                        geoJsonAvicultura,
                        geoJsonBeneficiamento_de_produtos_alimenticios,
                        geoJsonCajucultura,
                        geoJsonFruticultura,
                        geoJsonFruticultura_irrigada,
                        geoJsonLeites_e_derivados,
                        geoJsonMadiocultura,
                        geoJsonObras_hidroambienttais,
                        geoJsonPesca,
                        geoJsonReciclagem,
                        geoJsonRecuperacao_areas_degradadas,
                        geoJsonSistemas_de_abastecimento_e_tratamento_de_agua,
                        geoJsonTextil,
                        geoJsonUnidade_de_comercializacao,
                    ]

var estrada_vermelha = {
    "color": "rgb( 244, 0, 0 )",
    "weight": 5,
    // "opacity": 0.65
};

var estrada_azul = {
    "color": "rgb( 16, 145, 210 )",
    "weight": 5,
    // "opacity": 0.65
};


var geoJson_eixo_guanduba = new L.geoJson(eixo_guanduba, {style:estrada_azul, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJson_eixo_guanduba , "Eixo Guanduba");

var geoJson_eixo_producao = new L.geoJson(eixo_producao, {style:estrada_azul, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJson_eixo_producao , "Eixo Produção");

var geoJsonrodovias_federais = new L.geoJson(rodovias_federais);
layerControl.addOverlay(geoJsonrodovias_federais, 'Rodovias Federais');

var geoJsonrodovias_estaduais = new L.geoJson(rodovias_estaduais);
layerControl.addOverlay(geoJsonrodovias_estaduais, 'rodovias_estaduais');

map.createPane('estradas')

var geoJsonRN_011 = new L.geoJson(RN_011, {pane:'estradas', style:estrada_azul, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_011, 'RN_011');

var geoJsonRN_016 = new L.geoJson(RN_016, {pane:'estradas',style:estrada_azul, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_016, 'RN_016');

var geoJsonRN_063 = new L.geoJson(RN_063, {pane:'estradas',style:estrada_vermelha, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_063, 'RN_063');

var geoJsonRN_087 = new L.geoJson(RN_087, {pane:'estradas',style:estrada_azul, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_087, 'RN_087');

var geoJsonRN_118 = new L.geoJson(RN_118, {pane:'estradas',style:estrada_vermelha, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_118, 'RN_118');

var geoJsonRN233 = new L.geoJson(rn_233, {pane:'estradas',style:estrada_vermelha, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN233 , "RN_233");

var geoJsonRN_160 = new L.geoJson(RN_160, {pane:'estradas',style:estrada_vermelha, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_160, 'RN_160');

var geoJsonRN_307 = new L.geoJson(RN_307, {pane:'estradas',style:estrada_vermelha, onEachFeature: dadosEstrada2});
layerControl.addOverlay(geoJsonRN_307, 'RN_307');

var geoJsonprojetos_DER_II = new L.geoJson(projetos_DER_II, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_II, 'projetos_DER_II');

var geoJsonprojetos_DER_III_A = new L.geoJson(projetos_DER_III_A, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_III_A, 'projetos_DER_III_A');

var geoJsonprojetos_DER_III_B = new L.geoJson(projetos_DER_III_B, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_III_B, 'projetos_DER_III_B');

var geoJsonprojetos_DER_I_A = new L.geoJson(projetos_DER_I_A, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_I_A, 'projetos_DER_I_A');

var geoJsonprojetos_DER_I_B = new L.geoJson(projetos_DER_I_B, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_I_B, 'projetos_DER_I_B');

var geoJsonprojetos_DER_V = new L.geoJson(projetos_DER_V, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_V, 'projetos_DER_V');

var geoJsonprojetos_DER_VI = new L.geoJson(projetos_DER_VI, {onEachFeature: dadosEstrada});
layerControl.addOverlay(geoJsonprojetos_DER_VI, 'projetos_DER_VI');

var fundo_azul = {
        "color": 'rgba(35,35,35,1.0)',
        "fillOpacity": 1,
        "fill":true,
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


var geoJsonsemiarido_territorio = new L.geoJson(semiarido_territorio, {pane:'pane_Territrios', style: borda_branca, onEachFeature:dados_semiarido});
layerControl.addOverlay(geoJsonsemiarido_territorio, 'semiarido_territorio');

var geoJsonsemiarido = new L.geoJson(semiarido,  {pane:"pane_semiarido", style: fundo_azul});
layerControl.addOverlay(geoJsonsemiarido, 'semiarido');

var geoJsonsemiarido_RN_municipios = new L.geoJson(semiarido_RN_municipios, {pane:'pane_semiarido_RN_municipios',style:fundo_cinza});
layerControl.addOverlay(geoJsonsemiarido_RN_municipios, 'semiarido_RN_municipios');

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

var geoJsonDistrito_cor = new L.geoJson(Distrito_cor, {style:fundo_verde_distritos});
layerControl.addOverlay(geoJsonDistrito_cor, 'Distrito_cor');

var geoJsonDistrito_limitacao = new L.geoJson(Distrito_limitacao, {style:{'fillOpacity': 0, color:'white'}});
layerControl.addOverlay(geoJsonDistrito_limitacao, 'Distrito_limitacao');

let grupos = get_valores_unicos(investimentos, coluna_grupo, 'json')


for(let i=0; i<grupos.length; i++){
    let jsonGrupo = investimentos.features.filter( dados => dados.properties[coluna_grupo] == grupos[i] )
    let itens = get_valores_unicos(jsonGrupo, coluna_nome, 'lista')
    for (let j in itens){
        let jsonItem = jsonGrupo.filter(dados => dados.properties[coluna_nome] == itens[j])
        var geoJsonAux = new L.geoJson(jsonItem).addTo(map);
        layerControl.addOverlay(geoJsonAux, itens[j]);

    }
}




adicionarGrupo("Atividades Produtivas", 1, true);
relacionarSubGrupo('Atividades Produtivas', 1, 2, 19);

adicionarGrupo("Estradas", 19);
relacionarSubGrupo('Estradas', 19, 20, 32);

adicionarGrupo("Estradas DER", 32);
relacionarSubGrupo('Estradas DER', 32, 33, 40);

adicionarGrupo("Semiárido", 40);
relacionarSubGrupo('Semiárido', 40, 41, 44);


let index_inicial = 46
for(let i=0; i<grupos.length; i++){
    let jsonGrupo = investimentos.features.filter( dados => dados.properties[coluna_grupo] == grupos[i] )
    let itens = get_valores_unicos(jsonGrupo, coluna_nome, 'lista')
    let index_final = index_inicial + itens.length + 1
    adicionarGrupo(grupos[i], index_inicial, true);
    relacionarSubGrupo(grupos[i], index_inicial, index_inicial + 1, index_final);
    index_inicial = index_final
}

let div_control = document.querySelector(".leaflet-control-layers");
div_control.setAttribute("id","div_layer_controll");


let div_layer_control = document.getElementById("div_layer_controll");
let containerFiltro = document.querySelector('.containerFiltro')
containerFiltro.appendChild(div_layer_control)

//     div_layer_control.classList.remove('leaflet-control-layers-expanded');

// });
// div_layer_control.addEventListener('click', function() {
//     div_layer_control.classList.add('leaflet-control-layers-expanded');

// });





function filtrar(){

    let input = document.getElementById("filtro_municipio")
    let texto_filtro = input.value.toLowerCase()
    subprojetoJson.forEach(function (layerGroup) {
    layerGroup.eachLayer(function(layer){
    if (layer.feature.properties['Município'].toLowerCase().includes(texto_filtro) || layer.feature.properties['Tipologia'].toLowerCase().includes(texto_filtro) ){
        layer.setOpacity(1);
    }else{
        layer.setOpacity(0);
    }

    })

    }
    )
}




function get_valores_unicos(objeto, coluna, tipo){
    let qtd_elementos;
    if(tipo=='json'){
        qtd_elementos = objeto.features.length
    }else{
        qtd_elementos = objeto.length
    }
    let lista_valores = []
    for( let i=0; i<qtd_elementos; i++){
        let valor;
        if(tipo=='json'){
            valor = objeto.features[i].properties[coluna]
        }else{
            valor = objeto[i].properties[coluna]
        }
        if(!lista_valores.includes(valor) && valor !=null){

            lista_valores.push(valor)
        }

    }

    return lista_valores

}