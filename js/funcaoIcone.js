function createCustomIcon(feature, latlng) {
  var nameIcon;
  var iconimage = false;
  var aviso = String(feature.properties['Cadeira Produtiva']);
  // let base_caminho_imagem = '../../'
  const base_caminho_imagem = 'images/icones_novos'
  switch (String(feature.properties['Cadeira Produtiva'])) {
    case 'Algas marinhas':
      // aviso = 'apicultura'
      nameIcon = base_caminho_imagem + '/Algas.svg';
      // nameIcon = 'alga_gota.svg';
      break;
    case 'Apicultura':
      aviso = 'apicultura'
      // nameIcon = 'images/22307honeybee_98803.svg';
      nameIcon = base_caminho_imagem + '/Apicultura (1).svg';
      break;
    case 'Artesanato':
      nameIcon = base_caminho_imagem + '/Artesanato (1).svg';
      break;
    case 'Avicultura':
      nameIcon = base_caminho_imagem + '/avicultura 1.svg';
      break;
    case 'Beneficiamento de produtos alimentícios':
      nameIcon = base_caminho_imagem + '/Produtos Alimentícios.svg';
      break;
    case 'Cajucultura':
      nameIcon = base_caminho_imagem + '/Cajucultura.svg';
      break;
    case 'Fruticultura':
      nameIcon = base_caminho_imagem + '/FRUTICULTURA.svg';
      break;
    case 'Fruticultura Irrigada':
      nameIcon = base_caminho_imagem + '/kisspng-plant-watering-cans-marketing-customer-relationshi-aquatic-plants-5ac1d9b6305297.svg';
      break;
    case 'Leite e derivados':
      nameIcon = base_caminho_imagem + '/Leite e derivados.svg';
      break;
    case 'Madiocultura':
      nameIcon = base_caminho_imagem + '/mandioca 1.svg';
      break;
    case 'Obras Hidroambientais':
      nameIcon = base_caminho_imagem + '/Obras hidroambientais.svg';
      break;
    case 'Pesca':
      nameIcon = base_caminho_imagem + '/AQUICULTURA E PESCA.svg';
      break;
    case 'Reciclagem':
      nameIcon = base_caminho_imagem + '/reciclagem 1.svg';
      break;
    case 'Recuperação de Áreas Degradadas':
      nameIcon = base_caminho_imagem + '/Combate a desertificação.svg';
      break;
    case 'Sistemas de Abastecimento e Tratamento de Água':
      nameIcon = base_caminho_imagem + '/Sistema de abastecimento de água.svg';
      break;
    case 'Têxtil/confecções':
      nameIcon = base_caminho_imagem + '/ARTESANATO.svg';
      break;
    case 'UNIDADE DE COMERCIALIZAÇÃO':
      nameIcon = base_caminho_imagem + '/Unidade de comercializacao.svg';
      break;
    default:
      iconimage = true;
      nameIcon = base_caminho_imagem + '/Irrigacao.svg';
      break;

  }
  let myIcon = L.icon({
    iconUrl: nameIcon,
    // shadowUrl: 'my-icon.png',
    iconSize: [35, 35], // width and height of the image in pixels
    shadowSize: [35, 20], // width, height of optional shadow image
    iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
    popupAnchor: [0, 0] // point from which the popup should open relative to the iconAnchor
  })
  if (iconimage) {
    return L.marker(latlng).bindPopup(aviso);
  }
  return L.marker(latlng, { icon: myIcon }).bindPopup(aviso);
}

function dadosEstrada(feature, layer) {
  let texto = "<p>" + feature.properties['description'] + "</p>"
  layer.bindPopup(texto);
  // console.log(feature.properties);
}
function dadosTerritorio(feature, layer) {
  // let texto = "<p>" + feature.properties['description'] + "</p>"
  layer.bindPopup(feature.properties['Territó_1']);
  // console.log(feature);

}
function dadosEstrada2(feature, layer) {
  layer.bindPopup(feature.properties['Name']);
}

function dados_semiarido(feature, layer) {
  layer.bindPopup(feature.properties['Territó_1']);
}

function mostrar_imagem(feature, layer) {
  html = '<img src="teste.jpg" id="img_pop_up"/> <br/><a href="https://www.governocidadao.rn.gov.br/" target="_blank">Link externo</a>'
  html += '<p><strong> Atividade Produtiva: ' + feature.properties['Atividade Produtiva'] + '</strong></p>'
  html += '<p><strong> Município: ' + feature.properties['Município'] + '</strong></p>'
  layer.bindPopup(html);
}