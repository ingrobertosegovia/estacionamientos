let map = L.map('map').setView([-21.52889,-64.72758],6)


//Agregar tilelAyer mapa base desde openstreetmap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
})
//DIBUJAR LOS ESPACIOS DE PARQUEO EN DISTINTAS ZONAS
var coord_camino = [
  [-21.519378, -64.740974],
  [-21.518592, -64.742110]
  ];
    var camino = L.polyline(coord_camino,{ color: 'blue',weight:16,opacity:0.70}).addTo(map); 
 //ESPACIOS DE PARQUEO
 
 
 //DIBUJAR MARCADORES
    var campesino = L.marker([-21.518811, -64.741600], {
      title: "Pantoja",
      draggable:true,
      opacity: 0.75
      }).bindPopup("<i>Calle Pantoja</i>")
      .addTo(map);
      var Corduba = L.marker([-21.53995,-64.72472], {
      title: "Corduba",
      draggable:false,
      opacity: 1
      }).bindPopup("<b>CENTRO</b>")
      .addTo(map);
      var Tarraco = L.marker([-21.53833,-64.72412], {
      title: "Tarraco",
      draggable:false,
      opacity: 0.5
      }).bindPopup("<h2>PALACIO</h2>")
      .addTo(map);
  //MARCADORES    
     
   
   var imageUrl = 'img/captura.png';
  var imageBounds = [[-21.518476188827012, -64.74437320959024],[-21.520512307504077, -64.74063689158646]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);
   