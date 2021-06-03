var projection = d3.geoEqualEarth();
path = d3.geoPath(projection);
d3.json();

svg = d3.select("body").append("svg");
svg.selectAll("path")
  .data(features)
  .enter().append("path")
    .attr("d", d3.geoPath());
