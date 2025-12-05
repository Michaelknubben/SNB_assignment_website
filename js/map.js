/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat. De coördinaten van AP zijn: 51.23009 en 4.41616.
Gebruik hiervoor de documentatie op https://leafletjs.com/
*/
 
let map = L.map('mkMap').setView([51.22506, 4.43663], 14);
 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let Marker = L.marker([51.22506, 4.43663]).addTo(map);
Marker.bindPopup("<b>Michael Knubben</b><br>2060 antwerpen").openPopup();