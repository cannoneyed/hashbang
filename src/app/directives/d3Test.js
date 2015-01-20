
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
            width = 480 - margin.left - margin.right,
            height = 360 - margin.top - margin.bottom;
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
            //Set our scale's domains
            x.domain(data.map(function(d) { return d.name; }));
            y.domain([0, d3.max(data, function(d) { return d.count; })]);
            

              
                
            var bars = svg.selectAll(".bar").data(data);
            bars.enter()
              .append("rect")
              .attr("class", "bar")
              .attr("x", function(d) { return x(d.name); })
              .attr("width", x.rangeBand());
   
            //Animate bars
            bars
                .transition()
                .duration(1000)
                .attr('height', function(d) { return height - y(d.count); })
                .attr("y", function(d) { return y(d.count); })
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