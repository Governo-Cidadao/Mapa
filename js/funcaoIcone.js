function icone_investimentos(feature, latlng) {
  var nameIcon;
  var iconimage = false;
  const BASE_CAMINHO_IMAGEM = 'images/icones_novos'
  switch (String(feature.properties[coluna_nome])) {
    case 'pesca':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Algas.svg';
      break;
    case 'escola':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Apicultura (1).svg';
      break;
    case 'arte':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Artesanato (1).svg';
      break;
    case 'RECUPERAÇÃO DE ÁREAS DEGRADADAS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Combate a desertificação.svg';
      break;
    case 'SISTEMAS DE ABASTECIMENTO E TRATAMENTO DE ÁGUA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Sistema de abastecimento de água.svg';
      break;
    case 'ACESSO À ÁGUA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Abastecimento de água.svg';
      break;
    default:
      nameIcon = BASE_CAMINHO_IMAGEM + '/Irrigacao.svg';
      break;
  }

  let myIcon = L.icon({
    iconUrl: nameIcon,
    iconSize: [35, 35],
    shadowSize: [35, 20],
    iconAnchor: [12, 12],
    shadowAnchor: [12, 6],
    popupAnchor: [0, 0]
  })
  if (iconimage) {
    return L.marker(latlng)
  }
  return L.marker(latlng, { icon: myIcon });
}

function createCustomIcon(feature, latlng) {
  var nameIcon;
  var iconimage = false;
  var aviso = String(feature.properties['Cadeira Produtiva']);
  const BASE_CAMINHO_IMAGEM = 'images/icones_novos'
  switch (String(feature.properties['Cadeira Produtiva'])) {
    case 'Algas marinhas':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Algas.svg';
      break;
    case 'Apicultura':
      aviso = 'apicultura'
      nameIcon = BASE_CAMINHO_IMAGEM + '/Apicultura (1).svg';
      break;
    case 'Artesanato':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Artesanato (1).svg';
      break;
    case 'Avicultura':
      nameIcon = BASE_CAMINHO_IMAGEM + '/avicultura 1.svg';
      break;
    case 'Beneficiamento de produtos alimentícios':
      // icone antigo
      nameIcon = 'images/imagens_svg/Produtos Alimentícios.svg';
      break;
    case 'Cajucultura':
      // icone antigo
      nameIcon = 'images/imagens_svg/Cajucultura.svg';
      break;
    case 'Fruticultura':
      nameIcon = BASE_CAMINHO_IMAGEM + '/FRUTICULTURA.svg';
      break;
    case 'Fruticultura Irrigada':
      // icone antigo
      nameIcon = 'images/imagens_svg/kisspng-plant-watering-cans-marketing-customer-relationshi-aquatic-plants-5ac1d9b6305297.svg';
      break;
    case 'Leite e derivados':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Leite e derivados.svg';
      break;
    case 'Madiocultura':
      nameIcon = BASE_CAMINHO_IMAGEM + '/mandioca 1.svg';
      break;
    case 'Obras Hidroambientais':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Obras hidroambientais.svg';
      break;
    case 'Pesca':
      nameIcon = BASE_CAMINHO_IMAGEM + '/AQUICULTURA E PESCA.svg';
      break;
    case 'Reciclagem':
      nameIcon = BASE_CAMINHO_IMAGEM + '/reciclagem 1.svg';
      break;
    case 'Recuperação de Áreas Degradadas':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Combate a desertificação.svg';
      break;
    case 'Sistemas de Abastecimento e Tratamento de Água':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Sistema de abastecimento de água.svg';
      break;
    case 'Têxtil/confecções':
      nameIcon = BASE_CAMINHO_IMAGEM + '/ARTESANATO.svg';
      break;
    case 'UNIDADE DE COMERCIALIZAÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Unidade de comercializacao.svg';
      break;
    default:
      iconimage = true;
      nameIcon = BASE_CAMINHO_IMAGEM + '/Irrigacao.svg';
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
  layer.on('click', function (point) { map.setView([point.latlng.lat + 0.6, point.latlng.lng]) })
}

function html_carousel(nome, qtd_fotos, id_smi) {

  let path = `images/${nome}/${id_smi}`
  let imgs = ''
  for (var i = 1; i <= qtd_fotos; i++) {
    if (i == 1) {
      imgs += `<img class="img-carousel" src="${path}/foto${i}.jpg"/>`
    } else {
      imgs += `<img class="img-carousel" src="${path}/foto${i}.jpg" style="display:none"/>`
    }
  }

  let html = `<div class="carousel-container fotos" id='${nome}_${id_smi}_fotos' style='display:none' index=0>`
  html += `<button id="botao_voltar_${nome}_${id_smi}" onclick="voltar(this, '${nome}_${id_smi}')" style='visibility:hidden'><i class="fa-solid fa-chevron-left"></i></button>`
  html += imgs
  html += `<button id="botao_avancar_${nome}_${id_smi}" onclick="avancar(this, '${nome}_${id_smi}',${qtd_fotos})"><i class="fa-solid fa-chevron-right"></i></button>`
  html += `</div>`

  return html
}

function dado_html_subprojeto(feature) {
  let html = ''
  html += '<img src="images/Cajucultura/1400/foto1.jpg" class="img-popup">'
  html += '<p><strong> Município: ' + feature.properties['Município'] + '</strong></p>'
  html += '<p><strong> Tipologia: ' + feature.properties['Tipologia'] + '</strong></p>'

  return html
}

function mais_informacoes(feature, nome, id_smi) {
  let html = `<div class="informacao" id='${nome}_${id_smi}_informacao' style='display:none'>`
  html += '<p><strong> Id SMI da MI: ' + feature.properties['Id SMI da MI'] + '</strong></p>'
  html += '<p><strong> UES: ' + feature.properties['UES'] + '</strong></p>'
  html += '<p><strong> Município: ' + feature.properties['Município'] + '</strong></p>'
  html += '<p><strong> Território: ' + feature.properties['Território'] + '</strong></p>'
  html += '<p><strong> Tipologia: ' + feature.properties['Tipologia'] + '</strong></p>'
  html += '</div>'

  return html
}

function mostrar_imagem2(feature, layer, nome, qtd_fotos) {
  let id_smi = feature.properties['Id SMI da MI']
  let html = dado_html_subprojeto(feature)
  html += `<div> <button class="botao_link" onclick="show_modal('${nome}_${id_smi}_fotos')"><a>Ver fotos</a> </button>`
  html += `<button class="botao_link" onclick="show_modal('${nome}_${id_smi}_informacao')"><a>Mais informações</a> </button></div>`
  let html_fotos = html_carousel(nome, qtd_fotos, id_smi)
  // html += html_fotos
  let modal = document.querySelector(".container-modal")
  modal.innerHTML += html_fotos
  modal.innerHTML += mais_informacoes(feature, nome, id_smi)
  layer.bindPopup(html);
  // layer.on('click', function(point){map.setView(point.latlng)})

  layer.on('click', function (point) { map.setView([point.latlng.lat + 0.6, point.latlng.lng]) })
}


function html_carousel_investimentos(caminho, nome, qtd_fotos, id_smi) {

  let path = caminho
  let imgs = ''
  for (var i = 0; i <= qtd_fotos; i++) {
    if (i == 0) {
      imgs += `<img class="img-carousel" src="${path}/foto_${i}.jpg"/>`
    } else {
      imgs += `<img class="img-carousel" src="${path}/foto_${i}.jpg" style="display:none"/>`
    }
  }

  let html = `<div class="carousel-container fotos" id='${nome}_${id_smi}_fotos' style='display:none' index=0>`
  if (qtd_fotos < 2) {
    html += imgs
  } else {
    html += `<button id="botao_voltar_${nome}_${id_smi}" onclick="voltar(this, '${nome}_${id_smi}')" style='visibility:hidden'><i class="fa-solid fa-chevron-left"></i></button>`
    html += imgs
    html += `<button id="botao_avancar_${nome}_${id_smi}" onclick="avancar(this, '${nome}_${id_smi}',${qtd_fotos})"><i class="fa-solid fa-chevron-right"></i></button>`
  }
  html += `</div>`
  return html
}


function dado_html_investimentos(feature) {
  let html = ''
  let path = feature.properties['CAMINHO FOTO']
  html += `<img src="${path}/foto_0.jpg" class="img-popup">`
  html += '<p><strong> Município: ' + feature.properties['MUNICÍPIO'] + '</strong></p>'
  html += '<p><strong> Tipologia: ' + feature.properties['TIPOLOGIA'] + '</strong></p>'

  return html
}


function popup_investimentos(feature, layer) {
  let id_smi = feature.properties['Id SMI da MI']
  let html = dado_html_investimentos(feature)
  let nome = feature.properties[coluna_nome]
  html += `<div> <button class="botao_link" onclick="show_modal('${nome}_${id_smi}_fotos')"><a>Ver fotos</a> </button>`
  html += `<button class="botao_link" onclick="show_modal('${nome}_${id_smi}_informacao')"><a>Mais informações</a> </button></div>`
  let caminho = `${feature.properties['CAMINHO FOTO']}`
  let qtd_fotos = feature.properties['QUANTIDADE FOTO']
  let html_fotos = html_carousel_investimentos(caminho, nome, qtd_fotos, id_smi)
  let modal = document.querySelector(".container-modal")
  modal.innerHTML += html_fotos
  modal.innerHTML += mais_informacoes(feature, nome, id_smi)
  layer.bindPopup(html);

  layer.on('click', function (point) { map.setView([point.latlng.lat + 0.6, point.latlng.lng]) })

}
