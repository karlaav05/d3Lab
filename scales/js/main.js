/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 500)
	.attr("height", 500);

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		d.height = +d.height;
	});
    console.log(data);

    height = d3.max(data, (d)=>{return d.height});
    building = data.map((d)=>{return d.name});

    var x = d3.scaleBand()
	    .domain(building)
	    .range([0,400])
	    .paddingInner(.5)
	    .paddingOuter(.5);

    var y = d3.scaleLinear()
	    .domain([0,height])
	    .range([0,400]);

    var colors = d3.scaleOrdinal()
        .domain(building)
        .range(d3.schemeSet3);

	var buildings = svg.selectAll("rect")
        .data(data);

    buildings.enter()
        .append("rect")
            .attr("x", (d)=>{return x(d.name);})
            .attr("y", (d)=>{return 700 - y(d.height);})
            .attr("height", (d)=>{return y(d.height);})
            .attr("width", x.bandwidth())
            .attr("fill", (d)=>{return colors(d.name)});
}).catch((error)=>{
    console.log(error);
});