let arr1 = [5, 10, 18, 24, 44, 57, 60];
let arr2 = [22, 30, 15, 50];
let arr3 = [17, 25, 70, 33, 42, 51, 63, 48, 36];
let arrData = [arr1, arr2, arr3];

let body = d3.select("body");

body.append("button").text("Data array 1.").attr("Databutton", "0").on('click', Dbutton);
body.append("button").text("Data array 2.").attr("Databutton", "1").on('click', Dbutton);
body.append("button").text("Data array 3.").attr("Databutton", "2").on('click', Dbutton);


let svg = body.append("svg")
    .attr("width", 500)
    .attr("height", 300)
    .attr("stroke", "black");

let xScale = d3.scaleLinear()
    .domain([d3.min([].concat(arr1, arr2, arr3)). d3.max([].concat(arr1, arr2, arr3))])
    .range([0, 300]);
data(arrData2);

function Dbutton() {
    let index = this.getAttribute("Databutton");
    arrData2 = arrData[index];
    data(arrData2)
}

function data(arrData){
    let update = svg.selectAll("rect")
        .data(arrData2);
    
    update.exit()
    .transition()
    .duration(3000)
    .style("fill", "white")
    .remove();

    let enter = update.enter()
        .append("rect")
        .attr("y", (d, i) => {
            return (i * 25)
        })
        .attr("width", (d) => {
            return (d * 5)
        })
        .attr("height", 20)
        .attr("fill", "red")
        .attr("stroke", "black")
        .on("mouseover", function(){
            d3.select(this).style("fill","turquoise")
        });
    
    enter.merge(update)
        .transition()
        .duration(3000)
        .attr("width", (d) => {
            return (d * 5)
        })
}