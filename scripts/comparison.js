var parseDate = d3.timeParse("%m/%d/%Y");

var height  = 300;
var width   = 500;

var comparisonSvg = d3.select("#comparison").append("svg").attr("height", "100%").attr("width", "100%").attr("id", "comparison-data");

function renderComparisonData(data, translateX, tooltipData, color) {

    console.log("renderComparisonData");
    
    var max     = d3.max(data, function(d){return Number(d.number);});
    var minDate = d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var chartGroup = comparisonSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveCardinal);

    chartGroup.append("path").attr("d", line(data)).attr("stroke",color);

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);

    if ((tooltipData !== undefined) && (tooltipData !== null)) {

        var tooltip = d3.select("#states").append("div").style("opacity","0").style("position", "absolute").style("color","blue").style("background-color","white");

        chartGroup.append("g").attr("class", "monthend").selectAll("circle").data(tooltipData).enter().append("circle")
                                                                                    .attr("cx", function(d){return x(parseDate(d.date));})
                                                                                    .attr("cy", function(d){return y(Number(d.number));})
                                                                                    .attr("r", "5")
                                                                                    .on("mouseover", function(d){

                                                                                        tooltip.transition(200).style("opacity","1")
                                                                                            .style("left",d3.event.pageX+"px")
                                                                                            .style("top",d3.event.pageY+"px");

                                                                                            tooltip.html(d.tooltip);

                                                                                            console.log("mousemove");
                                                                                    })
                                                                                    .on("mouseout", function(d){

                                                                                        tooltip.transition(200).style("opacity","0");

                                                                                        console.log("mouseout");
                                                                                    });
    }

}

function renderComparisonCovidData(data, translateX, tooltipData, color) {

    console.log("renderComparisonCovidData");
    
    var max     = d3.max(data, function(d){return Number(d.total);});
    var minDate = d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var chartGroup = stateSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.total));})
                        .curve(d3.curveCardinal);

    chartGroup.append("path").attr("d", line(data)).attr("stroke",color);

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);

    if ((tooltipData !== undefined) && (tooltipData !== null)) {

        var tooltip = d3.select("#states").append("div").style("opacity","0").style("position", "absolute").style("color","blue").style("background-color","white");

        chartGroup.append("g").attr("class", "monthend").selectAll("circle").data(tooltipData).enter().append("circle")
                                                                                    .attr("cx", function(d){return x(parseDate(d.date));})
                                                                                    .attr("cy", function(d){return y(Number(d.total));})
                                                                                    .attr("r", "5")
                                                                                    .on("mouseover", function(d){

                                                                                        tooltip.transition(200).style("opacity","1")
                                                                                            .style("left",d3.event.pageX+"px")
                                                                                            .style("top",d3.event.pageY+"px");

                                                                                            tooltip.html(d.tooltip);

                                                                                            console.log("mousemove");
                                                                                    })
                                                                                    .on("mouseout", function(d){

                                                                                        tooltip.transition(200).style("opacity","0");

                                                                                        console.log("mouseout");
                                                                                    });
    }

}

function addComparisonText(x, y, text) {

    comparisonSvg.append("text").attr("x",x).attr("y",y).text(text);
}

function addComparisonLine(x1, y1, x2, y2) {

    comparisonSvg.append("line").attr("x1",x1).attr("y1",y1).attr("x2",x2).attr("y2",y2).attr("stroke","blue").attr("stroke-width","1");
}

function loadComparisonData() {

    console.log("loadComparisonData");

    var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];
    var colors      = ["red", "orange", "grey", "purple", "blue", "green"];

    for (i=0; i < top5States.length; i++) {

        var comparisonState = top5States[i];

        var stateComparisonData= d3.csv("data/"+comparisonState+".csv");

        stateComparisonData.then(function(data) {        

            parseDate = d3.timeParse("%m/%d/%Y");
            
            renderComparisonData(data, 0, null, colors[i]);
            
        });

        var stateComparisonCovidData= d3.csv("data/"+comparisonState+"-covid.csv");

        stateComparisonCovidData.then(function(data) {
            
            parseDate = d3.timeParse("%Y%m%d");
            
            renderComparisonCovidData(data, 600, null, colors[i]);

        });

    }

}