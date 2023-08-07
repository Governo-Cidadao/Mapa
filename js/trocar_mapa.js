function ativar_desativar_mapa()
{
    let botao = document.getElementById('bt_ativar_desativar_mapa')
    if(botao.textContent =='REMOVER')
    {
        map.removeLayer(mapa_fundo);
        botao.textContent ='ADICIONAR';
        minimap.remove();
    }else
    {
        mapa_fundo.addTo(map);
        botao.textContent ='REMOVER';
        minimap.addTo(map);
    }
    // alert(botao.value)
    // map.removeLayer(mapa_fundo);

    // mapa_fundo = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
    //           layers: 'TOPO-WMS'
    //       })
    //     //   .addTo(map);
    // mapa_fundo.addTo(map);
}

function mudar_mapa()
{
  let mapa_escolhido = document.getElementById('select_map').value;
  let botao = document.getElementById('bt_ativar_desativar_mapa')
  botao.textContent ='REMOVER';
  if (mapa_escolhido == 'google_maps')
  {
        map.removeLayer(mapa_fundo);
        mapa_fundo = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
            maxZoom: 20,
            subdomains:['mt0','mt1','mt2','mt3']
        })
        mapa_fundo.addTo(map);

        minimap.remove();
        base_minimap = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
          maxZoom: 8,
          minZoom: 3,
          time:''
          // time: 1
          // subdomains:['mt0','mt1','mt2','mt3']
      })

      minimap = new L.Control.MiniMap(base_minimap, {
        toggleDisplay: true
    })
      minimap.addTo(map)

  }else if(mapa_escolhido=='google_maps_hybrid')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http:mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',{
          maxZoom: 20,
          // subdomains:['mt0','mt1','mt2','mt3']
      })
      mapa_fundo.addTo(map);

      minimap.remove();
      base_minimap = L.tileLayer('http:mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)

  }else if(mapa_escolhido=='open_street_map')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
          maxZoom: 20,
          // subdomains:['mt0','mt1','mt2','mt3']
      })
      mapa_fundo.addTo(map);

      minimap.remove();
      base_minimap = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)

  }else if(mapa_escolhido=='ersi')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
          maxZoom: 20,
          // subdomains:['mt0','mt1','mt2','mt3']
      })
      mapa_fundo.addTo(map);


      minimap.remove();
      base_minimap = L.tileLayer( 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)

  }else if(mapa_escolhido=='cartocdn')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
          maxZoom: 20,
          // subdomains:['mt0','mt1','mt2','mt3']
      })
      mapa_fundo.addTo(map);

      minimap.remove();
      base_minimap = L.tileLayer( 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)

  }else if(mapa_escolhido=='opentopomap')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{
          maxZoom: 20,
          // subdomains:['mt0','mt1','mt2','mt3']
      })
      mapa_fundo.addTo(map);

      minimap.remove();
      base_minimap = L.tileLayer( 'http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)

  }else if(mapa_escolhido=='earthdata')
  {
    map.removeLayer(mapa_fundo);
      mapa_fundo = L.tileLayer( 'http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',{
          maxZoom: 8,
          minZoom: 3,
          time:''
          // time: 1
          // subdomains:['mt0','mt1','mt2','mt3']
      })

      mapa_fundo.addTo(map);

      minimap.remove();
      base_minimap = L.tileLayer( 'http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default//GoogleMapsCompatible_Level8/{z}/{y}/{x}.jpg',{
        maxZoom: 8,
        minZoom: 3,
        time:''
        // time: 1
        // subdomains:['mt0','mt1','mt2','mt3']
    })

    minimap = new L.Control.MiniMap(base_minimap, {
      toggleDisplay: true
  })
    minimap.addTo(map)
  }
  //
  // alert(mapa_escolhido);

}