/*
*    main.js
*/
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 900)
	.attr("height", 700);

var circle = svg.append("circle")
	.attr("cx", 700)
	.attr("cy", 100)
	.attr("r", 100)
	.attr("fill", "PaleVioletRed");

var rect = svg.append("rect")
	.attr("x", 100)
	.attr("y", 300)
	.attr("width", 400)
	.attr("height", 210)
	.attr("fill","Olive");