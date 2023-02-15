var pym = require("./lib/pym");
require("./lib/webfonts");

var pymChild;
var renderD3Graphic = require("./renderD3Graphic");

// Initialize the graphic.
var onWindowLoaded = function() {
  // you would format data here if you needed to
  // var data = formatData(window.DATA);
  render();

  window.addEventListener("resize", () => render());

  pym.then(child => {
    pymChild = child;
    child.sendHeight();
  });
};

var render = function() {
  // Render the chart!
  var container = "#d3-graphic";
  var element = document.querySelector(container);
  var width = element.offsetWidth;
  renderD3Graphic({
    container,
    width
  });

  // Update iframe
  if (pymChild) {
    pymChild.sendHeight();
  }
};

/*
 * Initially load the graphic
 * (NB: Use window.load to ensure all images have loaded)
 */
window.onload = onWindowLoaded;