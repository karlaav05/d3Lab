/*
*    main.js
*/

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

d3.csv("data/ages.csv").then((data)=> {
    console.log("CSV:", data);
})

d3.tsv("data/ages.tsv").then((data)=> {
    console.log("TSV:", data);
})

d3.json("data/ages.json").then((data)=> {
    data.forEach((d)=>{
        d.age = +d.age;
    });
    console.log("JSON:", data);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
            .attr("cx", (d, i)=>{ return (i*70) + 150; })
            .attr("cy", 200)
            .attr("r", (d)=>{ return d.age; })
            .attr("fill", (d)=>{ return (d.age > 10)? "magenta":"pink"; });
}).catch((error)=>{
    console.log(error);
});