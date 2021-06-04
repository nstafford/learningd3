<script src="https://unpkg.com/topojson@3"></script>

var width = 960,
    height = 1160;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

var projection = d3.geoEqualEarth();
path = d3.geoPath(projection);
d3.json();

var topology = topojson.topology({foo: geojson});

svg.selectAll("path")
  .data(features)
  .enter().append("path")
    .attr("d", d3.geoPath());

d3.json("uk.json", function(error, uk) {
  if (error) return console.error(error);
  console.log(uk);
});


// topojson.feature converts topojson to geojson (which d3 requires)
// see: https://github.com/topojson/topojson-client/blob/master/README.md#feature

d3.json("uk.json", function(error, uk) {
  if (error) return console.error(error);

  svg.append("path")
      .datum(topojson.feature(uk, uk.objects.subunits))
      .attr("d", d3.geo.path().projection(d3.geo.mercator()));
});
