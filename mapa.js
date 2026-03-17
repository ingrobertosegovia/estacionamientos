let map = L.map('map').setView([-21.52889,-64.72758],8)

//////////////////////////dark
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
subdomains: 'abcd',
	maxZoom: 19
});
//CartoDB_DarkMatter.addTo(map);
/////////////////////////////////
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
 attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
subdomains: 'abcd',
minZoom: 1,
maxZoom: 18,
ext: 'jpg'
});
//Stamen_Watercolor.addTo(map);

/////////////// osm mapa mapa mas sencillo

osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
//osm.addTo(map);

//////////////////////
Hibrid= L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
  maxZoom: 20,
  subdomains:['mt0','mt1','mt2','mt3']
});
//Hibrid.addTo(map);

/////////////////////////////////

//Agregar tilelAyer mapa base desde openstreetmap

googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
   maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
 });
//googleSat.addTo(map);
////////////////////////////////////
// Google Map Layer

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
 });
//googleStreets.addTo(map);


/////////////////////////////////////////
Stamen_Toner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
                    attribution: 'Map tiles by <a href="http://stamen.com"/>Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0"/>CC BY 3.0</a> &mdash; Map data &copy;<a href="http://www.openstreetmap.org/copyright"/>OpenStreetMap</a>',
                    subdomains: 'abcd',
                    minZoom: 0,
                    maxZoom: 20  });

                   //Stamen_Toner.addTo(map);
////////////////////////////////////////////////
Esri_WorldTopoMap =
                   L.tileLayer(
                       'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
                           attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap,iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, EsriChina (Hong Kong), and the GIS User Community'
                       });
                       Esri_WorldTopoMap.addTo(map);
///////////////////////////////////////////////////
document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
})
//CALLES DE PARQUEO PERSONAS CON DIACAPACIDAD
//BAJADA SAN ROQUE
var sanroque = [
  [-21.530363714953445, -64.73345210089488],
  [-21.53119298347869, -64.73376783169337]
  ];
    var camino= L.polyline(sanroque,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////palacio
var palacio = [
  [-21.53242392024272, -64.73241204649892],
  [-21.532683063488026, -64.73162736266413],
  [-21.53339570502802, -64.73191987793982],
  [-21.533166796308564, -64.73267206007732],
  [-21.533166796308564, -64.73267206007732],
  [-21.53242392024272, -64.73241204649892]
  ];
    var camino1 = L.polyline(palacio,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////calle colon abogados
////palacio
var colonabog = [
  [-21.53188403699633, -64.73132091808958],
  [-21.53267442538729, -64.73163200576376],
  [-21.532942206270867, -64.73075910303628]
  
  ];
    var camino2 = L.polyline(colonabog,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////catedral
var motocatedral = [
  [-21.533129099194902, -64.73536067765735],
  [-21.533288550238485, -64.73484643282156]
   
  ];
    var camino3 = L.polyline(motocatedral,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////plazuela sucre
var psucre = [
  [-21.534957922015252, -64.73240370757922],
  [-21.535204186205057, -64.73160628211744],
  [-21.53595187733048, -64.73190292438923],
  [-21.535699680357414, -64.73268121163993]
  ];
  var camino4 = L.polyline(psucre,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////contraloria
var contraloria = [
  [-21.534444414061376, -64.731308082981],
  [-21.535187112018587, -64.73159227095664]
  ];
  var camino5 = L.polyline(contraloria,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////corte
var corteE = [
  [-21.5326523010232, -64.73431332530251],
  [-21.53253690833083, -64.73465164428104]
  ];
  var camino6 = L.polyline(corteE,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////museo
var museo = [
  [-21.535155369572056, -64.73433050711543],
  [-21.534900882337222, -64.73509493663741],
  [-21.534668849469675, -64.73589423487441],
  [-21.53390994576523, -64.73562745042959]
  ];
  var camino7 = L.polyline(museo,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
  ////SantaAna
var SantaAna = [
  [-21.533899360404227, -64.73564072671748],
  [-21.533640018955804, -64.73647523426636]
  
  ];
  var camino8 = L.polyline(SantaAna,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);

  ////catedral1
var catedral1= [
  [-21.5332887351698, -64.73541525691834],
  [-21.53302762839338, -64.7362772652886]
  
  ];
  var camino9 = L.polyline(catedral1,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////prosalud
var prosalud= [
  [-21.53289938690829, -64.7362326950309],
  [-21.53263298670868, -64.73705582293142]
  
  ];
  var camino10 = L.polyline(prosalud,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////entel
var entel= [
  [-21.5351521860081, -64.73432849413398],
  [-21.535433018625955, -64.73352091027603],
  [-21.534686426604367, -64.73321429698976]
  
  ];
  var camino11 = L.polyline(entel,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
  ///mcampesino
  var mcampesino= [
    [-21.519455201377358, -64.74089400280191],
    [-21.518581736494163, -64.74217254377726]
        
    ];
    var camino12 = L.polyline(mcampesino,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);

     ///banco union avenida
  var avbancounion= [
    [-21.54094901068746, -64.72510002465535],
    [-21.535158352599254, -64.72289361926705]
    ];
    var camino13 = L.polyline(avbancounion,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
/////corrado caja de salud d campos
    var cajasalud= [
      [-21.53053921037353, -64.73175221555644],
      [-21.532437549029922, -64.73243499444688]
      ];
      var camino16 = L.polyline(cajasalud,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);

/////tecnico san luis
    var tecnicosanluis= [
      [-21.53366303594812, -64.73648354631747],
      [-21.532902060068242, -64.73623410089934]
      ];
      var camino17 = L.polyline(tecnicosanluis,{ color: 'blue',weight:15,opacity:0.5}).addTo(map);
////ALTERNATIVAS
///cosaalt
var cosaalt= [
  [-21.534525215668964, -64.72619693931274],
  [-21.535171404707235, -64.72655104649544],
  [-21.53412029703866, -64.72596913783549]
      
  ];
  var camino18 = L.polyline(cosaalt,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

  ///farmacia san javier
var farmaciasj= [
  [-21.534755997798484, -64.72782538126118],
  [-21.535572124386917, -64.72531956546518]
     
  ];
  var camino19 = L.polyline(farmaciasj,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);
 ///mercado molino
 var mmolino= [
  [-21.532081299623282, -64.73870567626598],
  [-21.53236822704516, -64.73785809828613],
  [-21.533099265653323, -64.73812631916583],
  [-21.532787389564145, -64.73895512168411]
     
  ];
  var camino20 = L.polyline(mmolino,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

///personal alcaldia
var personal= [
  [-21.533363736052095, -64.73732165652672],
  [-21.533104255665307, -64.73811290812185]
      
  ];
  var camino21 = L.polyline(personal,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

///impuestos internos
var impuestos= [
  [-21.538207815178893, -64.73364006800809],
  [-21.537217329255686, -64.7332484655237],
  [-21.536945381056572, -64.73402898828365],
  [-21.537769113642316, -64.73436084675028]
      
  ];
  var camino22 = L.polyline(impuestos,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);


///garcia agreda
var garcia= [
  [-21.53818610913451, -64.73449051124396],
  [-21.538959531846565, -64.73294824118565],
  [-21.53970301174629, -64.73152398813745],
  [-21.54020697917907, -64.73051547757912],
  [-21.54037912606527, -64.72994148489656],
  [-21.540710944860756, -64.72820609565119]
      
  ];
  var camino23 = L.polyline(garcia,{ color: 'yellow',weight:15,opacity:0.65}).addTo(map);
///banco union palmarcito
var bancopalmar= [
  [-21.534252211847196, -64.71583724462178],
  [-21.533191838830465, -64.71696913673414]
      
  ];
  var camino24 = L.polyline(bancopalmar,{ color: 'YELLOW',weight:25,opacity:0.65}).addTo(map);
///banco union palmarcito
var palmarcito= [
  [-21.533665888900927, -64.7164675636891],
  [-21.53406758274928, -64.71695840789896]
      
  ];
  var camino25 = L.polyline(palmarcito,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

///font
var font= [
  [-21.541269665490777, -64.712677237614],
  [-21.5401745452621, -64.71394480600046]
      
  ];
  var camino26 = L.polyline(font,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

///font farma corp
var fontfarmacorp= [
  [-21.54122770701354, -64.71394480600046],
  [-21.538231840390356, -64.71224870025914]
      
  ];
  var camino27 = L.polyline(fontfarmacorp,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);

///belgrano
var belgrano= [
  [-21.53881827350617, -64.72062701481167],
  [-21.53770684455019, -64.72394987207839],
  [-21.536962358802842, -64.72611959178707]
      
  ];
  var camino28 = L.polyline(belgrano,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);
///stadium
var stadium= [
  [-21.53301586225378, -64.726030843398],
  [-21.531962965285437, -64.72782255887441]
        
  ];
  var camino29 = L.polyline(stadium,{ color: 'YELLOW',weight:15,opacity:0.65}).addTo(map);
///col san bernardo
var sbernardo= [
  [-21.530412343533015, -64.73264910251001],
  [-21.530387166565433, -64.73346557894399]
        
  ];
  var camino30 = L.polyline(sbernardo,{ color: 'YELLOW',weight:20,opacity:0.65}).addTo(map);

///mcampesino1
var mcampesino1= [
  [-21.521509590696134, -64.74236926369827],
  [-21.51910322502661, -64.74394019206865]
      
  ];
  var camino14 = L.polyline(mcampesino1,{ color: 'YELLOW',weight:25,opacity:0.65}).addTo(map);
///suipacha cba
var cba= [
  [-21.53367355221656, -64.73103299187099],
  [-21.532195945236488, -64.73048117346212]
      
  ];
  var camino15 = L.polyline(cba,{ color: 'YELLOW',weight:18,opacity:0.65}).addTo(map);
///////

//DIBUJAR LOS ESPACIOS DE PARQUEO EN DISTINTAS ZONAS

 //ESPACIOS DE PARQUEO
 
 
 //DIBUJAR MARCADORES SIMPLES
    var campesino = L.marker([-21.519141395232122, -64.74172973662712], {
     title: "Pantoja",
      draggable:true,
     opacity: 3
     
      }).bindPopup('<H1>Calle Pantoja</H1><p>Estacionamiento vehicular , ubicado en la Calle Pantoja, zona del mercado campesino, el mismo es atendido por las personas con discapacidad</p><img src = "img/tcampesino.PNG"/>')
      .addTo(map);

 /////////////***************
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
  //MARCADORES  sobreponer imagen en mapa  
   //CAMPESINO   
   var imageUrl = 'img/CAPTURA11.png';
  var imageBounds = [[-21.518192986193213, -64.74446335385915],[-21.521508194329783, -64.74095385846886]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);
//COLON PALACIO
var imageUrl1 = 'img/captura21.png';
var imageBounds1 = [[-21.5314425149904, -64.73297490426347],[-21.53395581013038, -64.73020791204361]];
L.imageOverlay(imageUrl1, imageBounds1).addTo(map);



     
   


//señal prohibido estacionar
var greenIcon = new L.Icon({
  iconUrl: 'img/pestacionar.png',
  
  iconSize: [25, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53305882037967, -64.73168772286685 ], {icon: greenIcon}).addTo(map);
//////rrhh alcaldia
var rrhh = new L.Icon({
  iconUrl: 'img/logo.png',
  
  iconSize: [25, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.532594923888656, -64.73802888896905 ], {icon: rrhh}).addTo(map);


////ingresos
var rrhh = new L.Icon({
  iconUrl: 'img/logo.png',
  
  iconSize: [25, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53295998394135, -64.73793190419444 ], {icon: rrhh}).addTo(map);

////ingresos
var alcaldia = new L.Icon({
  iconUrl: 'img/logo.png',
  
  iconSize: [30, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.534290083307123, -64.73472372958857 ], {icon: rrhh}).addTo(map);
//señal prohibido estacionar OTRA
var greenIcon1 = new L.Icon({
  iconUrl: 'img/pestacionar.png',
  
  iconSize: [25, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.marker([-21.532232550785146, -64.73139331510778], {icon: greenIcon1}).addTo(map);

/////icono de otro color
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  
  shadowSize: [41, 41]
});

L.marker([-21.533884828043313, -64.7342230555103], {icon: greenIcon}).addTo(map);

//PARADAS DE MICRO
//PALACIO
var pmpalacio = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.532416272371567, -64.7321972367356], {icon: pmpalacio}).addTo(map);
//PALACIO
var pmpalacio = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.532416272371567, -64.7321972367356], {icon: pmpalacio}).addTo(map);
//odontologia
var pmpalacio1 = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53542518561728, -64.72336092345992], {icon: pmpalacio1}).addTo(map);
//oruro frente odont
var pmpalacio2 = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.535127268172488, -64.72317597573998], {icon: pmpalacio2}).addTo(map);
//farmacia san javier
var pmpalacio3 = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53454481215571, -64.72604341954178], {icon: pmpalacio3}).addTo(map);
//super rapido
var pmpalacio4 = new L.Icon({
  iconUrl: 'img/micro.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.534207030418255, -64.72586298274206], {icon: pmpalacio4}).addTo(map);


//ESTACIONAMIENTOS MUNICIPALES
///MERCADO CENTRAL
var mcentral = new L.Icon({
  iconUrl: 'icon/mercado.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53158,-64.73352], {icon: mcentral}).bindPopup('<H3>MERCADO CENTRAL</H3>').addTo(map);

var pcentral = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53176544733152, -64.7338505141262], {icon: pcentral}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Mercado Central</p>').addTo(map);
////////////////////
///MERCADO LA LOMA
var mloma = new L.Icon({
  iconUrl: 'icon/mercado.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.52638,-64.73694], {icon: mloma}).bindPopup('<H3>MERCADO LA LOMA</H3>').addTo(map);

var ploma = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.52643, -64.73711], {icon: ploma}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Mercado La Loma</p>').addTo(map);
////////////////////
///MERCADO BOLIVAR
var mbolivar = new L.Icon({
  iconUrl: 'icon/mercado.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53630,-64.72101], {icon: mbolivar}).bindPopup('<H3>MERCADO BOLIVAR</H3>').addTo(map);

var pbolivar = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.536497857012023, -64.72055616656037], {icon: pbolivar}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Mercado Bolivar</p>').addTo(map);
////////////////////
///MERCADO VILLA AVAROA
var mavaroa = new L.Icon({
  iconUrl: 'icon/mercado.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.52136,-64.73149], {icon: mavaroa}).bindPopup('<H3>MERCADO VILLA AVAROA</H3>').addTo(map);

var pavaroa = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.521600133979188, -64.73163129196281], {icon: pavaroa}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Mercado Villa Avaroa</p>').addTo(map);

////////////////////
///PATIO DEL CAVILDO
var mcavildo = new L.Icon({
  iconUrl: 'img/LOGO.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53493,-64.73434], {icon: mcavildo}).bindPopup('<H3>PATIO DEL CAVILDO</H3>').addTo(map);

var pcavildo = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.53497750966434, -64.7345072706486], {icon: pcavildo}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Patio del Cavildo</p>').addTo(map);

////////////////////
///fuente de los deseos
var fdeseos = new L.Icon({
  iconUrl: 'img/parqueog.png',
  iconSize: [40, 40],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.marker([-21.538114485463286, -64.73515250827779], {icon: fdeseos}).bindPopup('<H3>PARQUEO MUNICIPAL</H3><p>Fuente de los Deseos</p>').addTo(map);




//prueba icono

//señal prohibido estacionar

//MARCADOR CON IMAGEN ADENTRO
var imgmarker = L.marker([-21.53296477670084, -64.7317178555662], {
   
    title: "Palacio de justicia",
    draggable:true,
    opacity: 1
    }).bindPopup("<h1>Palacio de Justicia</h1><p>esta es una prueba para ver si fucnciona toda la programacion que se esta realizando para el mapa de parqueos</p><img src = 'img/imgpalacio.PNG'/>")
    
    .addTo(map);


    //agregar la leyenda

    const leyenda = L.control.legend({
     position: "bottomright", 
     collapsed:false,
     symbolwidth:24,
     opacity:1,
     column:1,
     legends:[
      {
        label:"marcadores",
        type: "circle",
        radius:6,
        color:"blue",
        fillcolor:"#FF0000",
        fillopacity:0.6,
        weight:2,
      layers:[greenIcon,greenIcon1],
      inactive:false 
        },{
          label:"Senal No Estacionar",
          type: "image",
          url:"Leaflet.Legend-master/examples/marker/purple.png"

        },{
          label:"Parqueos - Personas con Discapacidad",
          type: "polyline",
          color:"blue",
          fillcolor:"blue",
         // dashArray:[5,5],
          weight:4,
          layers:[camino,camino1,camino2,camino3,camino4,camino5,camino6,camino7,camino8,camino9,camino10,camino11,camino12,camino13,camino16,camino17],
          inactive:false 
          },{
            label:"Parqueos - A considerar por el GAMT",
            type: "polyline",
            color:"yellow",
            fillcolor:"yellow",
           // dashArray:[5,5],
            weight:4,
            layers:[camino14,camino15,camino18,camino19,camino20,camino21,camino22,camino23,camino24,camino25,camino26,camino27,camino28,camino29,camino30],
            inactive:false 
            }
          
          
      
      
      
      
      ]
      }).addTo(map);


//ADICIONAR UN CIRCULO
     var circulo= L.circle({lat:-21.532447082767593, lng:-64.73385487198699},{ 
       color:'steelblue',
     radius:500,
     fillcolor:'steelblue',
    opacity:0.5}).addTo(map);

    var circulo1= L.circle({lat:-21.538542919052425, lng:-64.7328406290163},{ 
      color:'steelblue',
    radius:500,
    fillcolor:'steelblue',
   opacity:0.5}).addTo(map);

   var circulo2= L.circle({lat:-21.53403445628074, lng:-64.72664444146328},{ 
    color:'steelblue',
  radius:500,
  fillcolor:'steelblue',
 opacity:0.5}).addTo(map);

 var circulo3= L.circle({lat:-21.519594819549603, lng:-64.74237222592195},{ 
  color:'steelblue',
radius:500,
fillcolor:'steelblue',
opacity:0.5}).addTo(map);

  //////prueba de marcador  
  
  var singleMarker = L.marker([-21.53404683601236, -64.73416513105032]);
singleMarker.addTo(map);
var popup = singleMarker.bindPopup('This is a popup')
popup.addTo(map);

  ////////////////////////
  var popup = L.popup()
  .setLatLng([-21.533910196996192, -64.73465902903527])
  .setContent('<a href="https://www.youtube.com/watch?v=YcAW-VbTYnY" target="_blank">La capital del mundo</a>');
  var marker = L.marker([-21.533910196996192, -64.73465902903527]).bindPopup(popup).openPopup().addTo(map);

  /////////////////////////////

  var baseLayers = {
    "Satellite":googleSat,
    
    "Water Color":Stamen_Watercolor,
    "OpenStreetMap": osm,
    "Hibrido": Hibrid,
    "Google Map":googleStreets,
    "Stamen_Toner" : Stamen_Toner ,
    "Esri_WorldTopoMap" : Esri_WorldTopoMap,
};

var overlays = {
    "Area de Influencia_1": circulo,
    "Area de Influencia_2": circulo1,
    "Area de Influencia_3": circulo2,
    "Area de Influencia_4": circulo3,
    
};

L.control.layers(baseLayers, overlays).addTo(map);
  
////////////////////////////
///var markers = [
 /// ["León", -21.533727717062007, -64.73240473724482],
 /// ["Zamora", -21.535853437475282, -64.73142304871872],
 /// ["Salamanca", -21.535529859695842, -64.7339014236018]
///];

///for (var i = 0; i < markers.length; i++) {
 /// marker = new L.marker([markers[i][1],markers[i][2]])
  ///  .bindPopup(markers[i][0])
  ///  .addTo(map);
 //// }


 //var polygon = L.polygon([
 // [-21.534975004659117, -64.73239789850301],
 // [-21.535204352154352, -64.73161649597995],
 // [-21.535941790106897, -64.73191995327046],
 // [-21.5356736312848, -64.73266721684834]
//]).addTo(map);

//var polygon = L.polygon([
 // [-21.53490586356972, -64.73509490480478],
 // [-21.535149233168738, -64.7343325593792],
 // [-21.534408633040503, -64.73406190420248],
 // [-21.534146379964767, -64.73483778237576]
//]).addTo(map);

//var polygon = L.polygon([
 // [-21.535953857740623, -64.73189000483566],
 // [-21.5306145097729, -64.72980923263549],
 // [-21.52772850170335, -64.73523244758985],
//  [-21.534404177557867, -64.73668665584805],
//  [-21.535953857740623, -64.73189000483566]
//]).addTo(map);

///ELEVADO TRAFICO VEHICULAR
//var lapaz= [
 // [-21.540954677419347, -64.72507714448578],
 // [-21.53449244826147, -64.72263446125385]
      
//  ];
//  var camino40 = L.polyline(lapaz,{ color: 'red',weight:25,opacity:0.65}).addTo(map);

 // var belgrano= [
 //   [-21.53657421153475, -64.72726977141232],
 //   [-21.5387978909198, -64.72064019698824]
        
 //   ];
   // var camino41 = L.polyline(belgrano,{ color: 'red',weight:25,opacity:0.65}).addTo(map);

  