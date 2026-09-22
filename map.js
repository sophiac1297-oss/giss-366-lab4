let map = L.map("map", {center: [32.7698192507876, -108.27710604629873], zoom: 15});
var osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Stadia_StamenWatercolor = L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}', {
	minZoom: 1,
	maxZoom: 16,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
})
var Stadia_AlidadeSatellite = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'jpg'
})


let baseMaps = {  "Streets": osmLayer, "Watercolor": Stadia_StamenWatercolor, "Satellite": Stadia_AlidadeSatellite  };
L.control.layers(baseMaps).addTo(map);


L.marker([32.771791963004816, -108.28193533550078])
    .addTo(map).bindPopup("<b>Cuban Guy</b><br>Restaurant")
    .openPopup();
L.marker([32.77430410867552, -108.27578525384548])
    .addTo(map).bindPopup("<b>June June's</b><br>Ice Cream")
    .openPopup();
L.marker([32.77081450509003, -108.27760923109005])
    .addTo(map).bindPopup("<b>Tranquilbuzz</b><br>Coffee Shop")
    .openPopup();
L.marker([32.767527676866756, -108.27704672678499])
    .addTo(map).bindPopup("<b>Corner Kitchen</b><br>Restaurant")
    .openPopup();

L.polygon([
    [32.768260338330755, -108.29204740986359],
    [32.771008311770046, -108.28373161305969],
    [32.76355321642268, -108.2803664657149],
    [32.75615192032947, -108.28201668220129],
    [32.75353955130172, -108.2882292619147],
    [32.756505672744304, -108.2969980593227],
    [32.761920630464694, -108.3018839944098],
    [32.76768896686315, -108.29916599078518],
    [32.76945748570364, -108.29343876886188]
], {
    color: "green",
    fillColor: "rgb(19, 250, 19)",
    fillOpacity: 0.5
}).addTo(map).bindPopup("<b>Boston Hill Open Space</b><br>Trail System");

L.polygon([ 
    [32.769055508179356, -108.27813262828029],
    [32.769099193068314, -108.2787752011252],
    [32.768963539922, -108.27877793547775],
    [32.76894514625913, -108.27848535975687],
    [32.76885777630857, -108.27813262828029]
], {
    color: "green",
    fillColor: "rgb(19, 250, 19)",
    fillOpacity: 0.5
}).addTo(map).bindPopup("<b>Greg Goyo Jaurequi Park</b><br>Playground");
