/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
	.attr("width", 1000)
	.attr("height", 1000);

d3.json("data/buildings.json").then((data)=> {
	data.forEach((d)=>{
		d.height = +d.height;
	});
    console.log(data);

	var buildings = svg.selectAll("rect").
        data(data);
        
    buildings.enter()
        .append("rect")
            .attr("x", (d,i)=>{return (i * 50) + 25;})
            .attr("y", (d)=>{return 1000 - d.height;})
            .attr("width", 40)
            .attr("height", (d)=>{return d.height;})
            .attr("fill", "violet");
}).catch((error)=>{
    console.log(error);
});