// Pesonalizando seção do controll layer 
const myButton = document.querySelector(".leaflet-control-layers-list");
const teste = document.querySelector(".containerFiltro");
teste.appendChild(myButton)

var novoElemento = document.createElement('div');
myButton.parentNode.insertBefore(novoElemento, myButton);
novoElemento.appendChild(myButton)
novoElemento.classList.add('control-layers_personalizado')
containerFiltro.appendChild(novoElemento)

div_layer_control.addEventListener('click', function() {
div_layer_control.classList.remove('leaflet-control-layers-expanded');
if (novoElemento.style.display === 'none') {
      novoElemento.style.display = 'block';
} 
else {
    novoElemento.style.display = 'none';
}
});
document.addEventListener("mouseup", function(event) {
  if (!novoElemento.contains(event.target)) {
    novoElemento.style.display = "None"
  }
});

div_layer_control.addEventListener('mouseover',  function() {
div_layer_control.classList.remove('leaflet-control-layers-expanded');
});


