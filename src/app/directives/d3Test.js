
angular.module( 'hashBang.directives', [])

.directive( 'd3Test', [
    function () {
      return {
        restrict: 'E',
        scope: {
          data: '='
        },
        link: function (scope, element) {
          
          var margin = {top: 20, right: 20, bottom: 30, left: 40},
            width = 1000 - margin.left - margin.right,
            height = 700 - margin.top - margin.bottom;
          var svg = d3.select(element[0])
            .append("svg")
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append("g")
              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
   
          var x = d3.scale.ordinal().rangeRoundBands([0, width], .1);
          var y = d3.scale.linear().range([height, 0]);
   
   
          //Render graph based on 'data'
          scope.render = function(data) {
            // // //Set our scale's domains
            // x.domain(data.map(function(d) { return d.name; }));
            // y.domain([0, d3.max(data, function(d) { return d.count; })]);
            
            var rowWidth = rowWidth;

            var bits = svg.selectAll(".bit").data(data.values);
            bits.enter()
              .append("rect")
              .attr("class", "bar")
              .attr("x", function(d, index) {
                return index % data.rowWidth * (data.size + data.size / 4) + 10 * (32 - data.rowWidth); 
              })
              .attr("y", function(d, index) { 
                return  Math.floor(index / data.rowWidth) * (data.size + data.size / 4);
              })
              .attr("fill", function (d) {
                return d.value === 0 ? '#444' : '#fdfdfd';
              })
              .attr("width", data.size)
              .attr("height", data.size);

            var text = svg.selectAll('.text').data(data.values);
            text.enter()
              .append("text")
              .attr("class", "digit")
              .text(function(d) {
                return d.value;
              })
              .attr("x", function(d, index) {
                return index % data.rowWidth * (data.size + data.size / 4) + (data.size / 3.5) + 10 * (32 - data.rowWidth); 
              })
              .attr("y", function(d, index) { 
                return  Math.floor(index / data.rowWidth) * (data.size + data.size / 4) + (data.size / 1.4);
              })
              .attr("fill", function (d) {
                return d.value === 1 ? '#444' : '#fdfdfd';
              })
              .attr("font-family", 'courier')
              .style("font-size", data.size / 1.5 + 'px')
              .attr("z-index", '20');
                
          };
   
           //Watch 'data' and run scope.render(newVal) whenever it changes
           //Use true for 'objectEquality' property so comparisons are done on equality and not reference
            scope.$watch('data', function(){
                scope.render(scope.data);
            }, true);  
          }
      };
    }
  ]);