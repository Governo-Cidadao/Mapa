function icone_investimentos(feature, latlng) {
  var nameIcon;
  var iconimage = false;
  const BASE_CAMINHO_IMAGEM = 'images/icones_novos'
  switch (String(feature.properties[coluna_area])) {
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


function dadosEstrada(feature, layer) {
  let texto = "<p>" + feature.properties['descri____o'] + "</p>"
  layer.bindPopup(texto);
}


function dadosTerritorio(feature, layer) {
  layer.bindPopup(feature.properties['Territó_1']);
}


function dadosEstrada2(feature, layer) {
  layer.bindPopup(feature.properties['Name']);
}


function dados_semiarido(feature, layer) {
  layer.bindPopup(feature.properties['Territó_1']);
}


function html_carousel(nome, qtd_fotos, id_smi) {
  let path = `images/${nome}/${id_smi}`
  let imgs = ''
  let pontinhos_slider = ''
  let descricao = ''

  for (var i = 1; i <= qtd_fotos; i++) {
    if (i == 1) {
      pontinhos_slider += `<div class="ponto ativo" id="${nome}_${id_smi}_ponto"></div>`
      imgs += `<img class="img-carousel" src="${path}/foto${i}.jpg"/>`
    } else {
      imgs += `<img class="img-carousel" src="${path}/foto${i}.jpg" style="display:none"/>`
      pontinhos_slider += `<div class="ponto" id="${nome}_${id_smi}_ponto"></div>`
    }
  }

  let html = `<div class="carousel-container fotos" id='${nome}_${id_smi}_fotos' style='display:none' index=0>`

  if (qtd_fotos < 2) {
    html += imgs
    html += pontinhos_slider
    html += descricao
  } else {
    html += `<button id="botao_voltar_${nome}_${id_smi}" onclick="voltar(this, '${nome}_${id_smi}')" style='visibility:hidden'><i class="fa-solid fa-chevron-left"></i></button>`
    html += imgs
    html += `<button id="botao_avancar_${nome}_${id_smi}" onclick="avancar(this, '${nome}_${id_smi}',${qtd_fotos})"><i class="fa-solid fa-chevron-right"></i></button>`
    html += `<div class="container-index-img">${pontinhos_slider}</div>`
    html += `<div class="container-text-img">${descricao}</div>`
  }
  html += `</div>`

  return html
}


function mais_informacoes(feature, nome, id_smi) {
  let html = `<div class="informacao" id='${nome}_${id_smi}_informacao' style='display:none'>`
  html += '<p><strong> Estabelecimento </strong></p> <p>' + capitalize(feature.properties['ESTABELECIMENTO']) + '</p> <br>'
  html += '<p><strong> Orgão </strong></p> <p>' + feature.properties['ORGÃO'] + '</p> <br>'
  html += '<p><strong> Município </strong></p> <p>' + capitalize(feature.properties['MUNICÍPIO']) + '</p> <br>'
  html += '<p><strong> Território </strong></p> <p>' + capitalize(feature.properties['TERRITÓRIO']) + '</p> <br>'
  html += '<p><strong> Tipologia </strong></p> <p>' + capitalize(feature.properties[coluna_tipologia]) + '</p>'
  html += '<div class="close-icon-info"><i onclick="close_modal(ver_informacoes = true)" class="fa-solid fa-x"></i></div>'
  html += '</div>'

  return html
}


function html_carousel_investimentos(caminho, nome, qtd_fotos, id_smi, texto_investimento) {
  let path = caminho
  let imgs = ''
  let pontinhos_slider = ''
  let descricao = ''

  for (var i = 0; i < qtd_fotos; i++) {
    if (i === 0) {
      imgs += `<img class="img-carousel" src="${path}/foto_${i}.jpg"/>`
      pontinhos_slider += `<div class="ponto ativo" id="${nome}_${id_smi}_ponto"></div>`
    } else {
      imgs += `<img class="img-carousel" src="${path}/foto_${i}.jpg" style="display:none"/>`
      pontinhos_slider += `<div class="ponto" id="${nome}_${id_smi}_ponto"></div>`

    }
  }

  texto_investimento = capitalize(texto_investimento)
  descricao += `<div class="decricao" id="${nome}_${id_smi}_descricao">${texto_investimento}</div>`

  let html = `<div class="carousel-container fotos" id='${nome}_${id_smi}_fotos' style='display:none' index=0>`

  if (qtd_fotos < 2) {
    html += imgs
    html += pontinhos_slider
    html += descricao
  } else {
    html += `<button id="botao_voltar_${nome}_${id_smi}" onclick="voltar(this, '${nome}_${id_smi}')" style='visibility:hidden'><i class="fa-solid fa-chevron-left"></i></button>`
    html += imgs
    html += `<button id="botao_avancar_${nome}_${id_smi}" onclick="avancar(this, '${nome}_${id_smi}',${qtd_fotos})"><i class="fa-solid fa-chevron-right"></i></button>`
    html += `<div class="container-index-img">${pontinhos_slider}</div>`
    html += descricao
  }
  html += `</div>`

  return html
}


function dado_html_investimentos(feature) {
  let html = ''
  let path = feature.properties['CAMINHO FOTO']
  const qtd_fotos = feature.properties['QUANTIDADE FOTO']
  if (qtd_fotos > 0)
    html += `<img src="${path}/foto_0.jpg" class="img-popup">`
  html += '<p><strong> Município: ' + feature.properties['MUNICÍPIO'] + '</strong></p>'
  html += '<p><strong> Tipologia: ' + feature.properties[coluna_tipologia] + '</strong></p>'

  return html
}


function popup_investimentos(feature, layer) {
  let id_smi = feature.properties['CÓDIGO ESTABELECIMENTO']
  let html = dado_html_investimentos(feature)
  let nome = feature.properties[coluna_area]
  let caminho = `${feature.properties['CAMINHO FOTO']}`
  let texto_investimento = feature.properties['TIPO DE INVESTIMENTO']
  let modal = document.querySelector(".container-modal")
  let qtd_fotos = feature.properties['QUANTIDADE FOTO']

  if (qtd_fotos > 0) {
    html += `<div> <button class="botao_link" onclick="show_modal('${nome}_${id_smi}_fotos',false,${qtd_fotos});"><a>Ver fotos</a></button>`

    let html_fotos = html_carousel_investimentos(caminho, nome, qtd_fotos, id_smi, texto_investimento)
    modal.innerHTML += html_fotos
  }

  html += `<button class="botao_link" onclick="show_modal('${nome}_${id_smi}_informacao',true,${qtd_fotos})"><a>Mais informações</a> </button></div>`
  modal.innerHTML += mais_informacoes(feature, nome, id_smi)
  layer.bindPopup(html);

  layer.on('click', function (point) { map.setView([point.latlng.lat + 0.6, point.latlng.lng]) })
}
