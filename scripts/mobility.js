var parseDate = d3.timeParse("%m/%d/%Y");

var height  = 300;
var width   = 500;

var svg = d3.select("#summary").append("svg").attr("height", "100%").attr("width", "100%").attr("id", "summary-data");

function renderData(data, translateX, tooltipData) {
    
    console.log("All US renderMobilityData");
    
    var max     = d3.max(data, function(d){return Number(d.number);});
    var minDate = d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveCardinal);

    chartGroup.append("path").attr("d", line(data)).attr("stroke", "green");

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);

    if ((tooltipData !== undefined) && (tooltipData !== null)) {

        var tooltip = d3.select("#summary").append("div").style("opacity","0").style("position", "absolute").style("color","blue").style("background-color","white");

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

function addText(x, y, text) {

    svg.append("text").attr("x",x).attr("y",y).text(text);
}

function addLine(x1, y1, x2, y2) {

    svg.append("line").attr("x1",x1).attr("y1",y1).attr("x2",x2).attr("y2",y2).attr("stroke","blue").attr("stroke-width","1");
}

var mobilityData= d3.csv("data/us_states_data_transposed.csv");

mobilityData.then(function(data) {

    var mobilityMonthendData = [{date:"3/31/2020",number:"18.56862745", tooltip:"In March, there was a dramatic drop in mobility"},{date:"4/30/2020",number:"41.1372549", tooltip:"Mobility remained low in April"},{date:"5/31/2020",number:"36.43137255", tooltip:"Mobility was higher in May"},{date:"6/30/2020",number:"80.78431373", tooltip:"Mobility continued to rise towards normal levels in June"}];
    
    renderData(data, 0, mobilityMonthendData);

    addText(135,80,"Mobility Index timeline");
    addText(135,240,"Low mobility");
    addLine(125,245,245,245);
    addLine(100,35,125,220);
    addText(120,120,"Sharp drop in mobility");
    addLine(300,280,500,200);
    addText(405,250,"Gradual rise in mobility");
    
});

var covidData= d3.csv("data/us_covid_cases.csv");

covidData.then(function(data) {

    var  covidMonthendData = [{date:"3/31/2020",number:"188461", tooltip:"In March, COVID cases increased"},{date:"4/30/2020",number:"1075637", tooltip:"In April, the rate of increase was steady"},{date:"5/31/2020",number:"1799036", tooltip:"In May, rate of increase remained steady"},{date:"6/30/2020",number:"2653319", tooltip:"In June, rate of increase remained steady, but increased sharply in July"}];
    renderData(data, 600, covidMonthendData);

    addText(735,80,"COVID-19 cases timeline");

});
