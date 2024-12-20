// code from https://isotope.metafizzy.co/layout.html 
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'packery',
  packery: { gutter: 10 },
  filter: '*',
  resizable: false,
  animationEngine: 'best-available'
});
// layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.isotope('layout');
});
