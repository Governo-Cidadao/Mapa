// botão layer personalizado
const div_control = document.createElement('div');
const a_image_button = document.createElement('a');
const containerFiltro = document.querySelector('.containerFiltro')
const layer_padrao = document.querySelector('.leaflet-control-layers')

//  adicionando classes
containerFiltro.appendChild(div_control)
div_control.appendChild(a_image_button)
div_control.classList.add('container_buton_personalizado')
a_image_button.classList.add('image_buton_personalizado')
layer_padrao.style.display= 'None';


// Pesonalizando seção do controll layer
const section_layer = document.querySelector(".leaflet-control-layers-list");
const controle_personalizado = document.createElement('div');


containerFiltro.appendChild(section_layer)
section_layer.parentNode.insertBefore(controle_personalizado, section_layer);
controle_personalizado.appendChild(section_layer)
controle_personalizado.classList.add('control-layers_personalizado')
containerFiltro.appendChild(controle_personalizado)



// eventos ao clicar no novo layer controll
div_control.addEventListener('click', function() {
div_control.classList.remove('leaflet-control-layers-expanded');
if (controle_personalizado.style.display === 'none') {
      controle_personalizado.style.display = 'block';
}
else {
    controle_personalizado.style.display = 'none';
}
});
document.addEventListener("mouseup", function(event) {
  if (!controle_personalizado.contains(event.target)) {
    controle_personalizado.style.display = "None"
  }
});


// Fechando modal de carrossel ao clicar fora do elmento
document.addEventListener('mouseup', function(e) {
  container_modal = document.querySelector('.container-modal')
  if (!container_modal.contains(e.target)) {
      container_modal.style.display = 'none';
  }
  else{
    container_modal.style.display = 'flex';
  }
});