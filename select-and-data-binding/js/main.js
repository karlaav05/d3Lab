/*
*    main.js
*/

var data = [25, 20, 15, 10, 5];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var rectangles = svg.selectAll("rect")
    .data(data);

rectangles.enter()
		  .append("rect")
          .attr("x", (d, i)=>{ return (i*50) + 100; })
          .attr("y", (d)=>{ return 350 - d; })
          .attr("width", 40)
          .attr("height", (d)=>{ return d; })
          .attr("fill", "Magenta");