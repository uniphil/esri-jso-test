define([
  'app/print',
  'dojo/text!app/template.html',
  'esri/map'
], function(print, template, Map) {

  // make sure we can load AMD modules
  print('print works');

  // grab the container for the template and inject it
  var mainContainer = document.getElementById('container');
  mainContainer.innerHTML = template;

  // put the map on the page
  var map = new Map('map-canvas', {
    center: [-4, 24],
    zoom: 6,
    basemap: 'streets'
  });

});
