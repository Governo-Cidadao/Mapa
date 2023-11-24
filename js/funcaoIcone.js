function icone_investimentos(feature, latlng) {
  var nameIcon;
  const BASE_CAMINHO_IMAGEM = 'images/icones_novos';
  switch (String(feature.properties[coluna_categoria])) {
    case 'ABASTECIMENTO DE ÁGUA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Abastecimento de água.svg';
      break;
    case 'APICULTURA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Apicultura (1).svg';
      break;
    case 'AQUICULTURA E PESCA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/AQUICULTURA E PESCA.svg';
      break;
    case 'ARTESANATO E CONFECCÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/ARTESANATO.svg';
      break;
    case 'AVICULTURA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/avicultura 1.svg';
      break;
    case 'BANDAS FILARMÔNICAS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Banda.svg';
      break;
    case 'BARRAGEM':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Barragem.svg';
      break;
    case 'CENTRO DE COMERCIALIZAÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Unidade de comercializacao.svg';
      break;
    case 'CENTRO DE FORMAÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Centro de formação.svg';
      break;
    case 'CENTRO DE MANEJO ':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Centros de manejo.svg';
      break;
    case 'COMERCIALIZAÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/comercializacao 1.svg';
      break;
    case 'DIBA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/RECUPERAÇÃO ESTRUTURAL DO DIBA.svg';
      break;
    case 'EQUIPAMENTO CULTURAL':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Cultura.svg';
      break;
    case 'ESGOTAMENTO SANITÁRIO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/esgotamento sanitário.svg';
      break;
    case 'IMPLANTAÇÃO DE RODOVIA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/INFRAESTRUTURA.svg';
      break;
    case 'RECUPERAÇÃO DE RODOVIA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/INFRAESTRUTURA.svg';
      break;
    case 'FRUTICULTURA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/FRUTICULTURA_1.svg';
      break;
    case 'GALPÃO PARA ARMAZENAMENTO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Galpão de armazenamento.svg';
      break;
    case 'LEGUMINOSA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Leguminosa.svg';
      break;
    case 'LEITE E DERIVADOS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Leite e derivados.svg';
      break;
    case 'MANDIOCULTURA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/mandioca 1.svg';
      break;
    case 'OBRAS HIDROAMBIENTAIS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Obras hidroambientais.svg';
      break;
    case 'PARQUE TECNOLÓGICO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Parque tecnológico.svg';
      break;
    case 'PRODUÇÃO DE ALIMENTOS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/ALIMENTOS.svg';
      break;
    case 'QUEIJEIRA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Leite e derivados.svg';
      break;
    case 'RECICLAGEM':
      nameIcon = BASE_CAMINHO_IMAGEM + '/reciclagem 1.svg';
      break;
    case 'RECUPERAÇÃO DE ÁREAS DEGRADADAS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Combate a desertificação.svg';
      break;
    case 'SISTEMAS SIMPLIFICADO DE ABASTECIMENTO DE ÁGUA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Sistema de abastecimento de água.svg';
      break;
    case 'IMPLANTAÇÃO DE ESCOLA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Escola.svg';
      break;
    case 'AMPLIAÇÃO/REFORMA DE ESCOLA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Escola.svg';
      break;
    case 'PROJETO DE INOVAÇÃO PEDAGÓGICA (PIP)':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Projeto de inovação pedagógica (pip).svg';
      break;
    case 'CENTRAL DO CIDADÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/central do cidadao.svg';
      break;
    case 'CENTRO ADMINISTRATIVO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Centro administrativo.svg';
      break;
    case 'POSTO INTEGRADO DE FISCALIZAÇÃO':
      nameIcon = BASE_CAMINHO_IMAGEM + '/POSTO DE FISCALIZAÇÃO.svg';
      break;
    case 'SINE':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Sine.svg';
      break;
    case 'ENFRENTAMENTO DA COVID-19':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Enfrentamento da covid-19.svg';
      break;
    case 'HOSPITAL DA MULHER':
      nameIcon = BASE_CAMINHO_IMAGEM + '/hospital regional.svg';
      break;
    case 'HOSPITAL REGIONAL ':
      nameIcon = BASE_CAMINHO_IMAGEM + '/hospital regional.svg';
      break;
    case 'LABORATÓRIO DE ANATOMOCITOPATOLOGIA':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Laboratório.svg';
      break;
    case 'MATERNIDADES':
      nameIcon = BASE_CAMINHO_IMAGEM + '/hospital regional.svg';
      break;
    case 'REDE METROPOLITANA DE DADOS':
      nameIcon = BASE_CAMINHO_IMAGEM + '/Rede metropolitana de dados.svg';
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
  });

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
  html += '<p><strong> Tipologia </strong></p> <p>' + capitalize(feature.properties[coluna_tipologia]) + '</p> <br>'
  html += '<p><strong> Total Investimento </strong></p> <p>R$ ' + formatarNumeroInteiro(feature.properties["VALOR_TOTAL"]) + '</p>';
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

  if (qtd_fotos < 1) {
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

  // layer.on('click', function (point) { map.setView([point.latlng.lat + 0.1, point.latlng.lng]) })
}
