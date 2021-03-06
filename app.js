const width = 960;
const height = 1160;

const svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

const projection = d3.geoEqualEarth();
const pathGenerator = d3.geoPath().projection(projection);

const g = svg.append('g');

svg.call(d3.zoom().on('zoom', () => {
  g.attr('transform', event.transform);
}));

//g.append('path')
//    .attr('class', 'sphere')
//    .attr('d', pathGenerator({type: 'Sphere'}));

//var topology = topojson.topology({foo: geojson});

//svg.selectAll("path")
//  .data(features)
//  .enter().append("path")
//    .attr("d", d3.geoPath());

//d3.json("countries-110m.json", function(error, uk) {
//  if (error) return console.error(error);
//  console.log(uk);
//});

d3.json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then((data) => {
    console.log("json worked!");
    console.log(data);
    // build map here since it is async and this waits for load??
    //const countries = topojson.feature(data, data.objects.countries);
    //g.selectAll('path').data(countries.features)
    //    .enter().append('path')
    //        .attr('d', pathGenerator);
  })
  .catch((error) => {
    console.error("Error loading the data");
  });

// topojson.feature converts topojson to geojson (which d3 requires)
// see: https://github.com/topojson/topojson-client/blob/master/README.md#feature

//d3.json("uk.json", function(error, uk) {
//  if (error) return console.error(error);

//  svg.append("path")
//      .datum(topojson.feature(uk, uk.objects.subunits))
//      .attr("d", d3.geo.path().projection(d3.geo.mercator()));
//});
