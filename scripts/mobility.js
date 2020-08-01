var parseDate = d3.timeParse("%m/%d/%Y");

var height  = 300;
var width   = 500;

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

function renderData(data, translateX, tooltipData) {
    
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

    chartGroup.append("path").attr("d", line(data));

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);

    if ((tooltipData !== undefined) && (tooltipData !== null)) {
        chartGroup.append("g").attr("class", "monthend").selectAll("circle").data(mobilityMonthendData).enter().append("circle")
                                                                                    .attr("cx", function(d){return x(parseDate(d.date));})
                                                                                    .attr("cy", function(d){return y(Number(d.number));})
                                                                                    .attr("r", "2.5");
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

    addText(135,240,"Low mobility");
    addLine(125,245,245,245);
    addLine(100,35,125,220);
    addText(120,120,"Sharp drop in mobility");
    addLine(300,280,500,200);
    addText(405,250,"Gradual rise in mobility");    

    /* var height  = 300;
    var width   = 500;

    var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");
    
    var max     = d3.max(data, function(d){return Number(d.number);});
    var minDate = d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50,right:50, top:40, bottom:0};

    var mobilityChartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var mobilityLine = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveCardinal);

    mobilityChartGroup.append("path").attr("d", mobilityLine(data));

    mobilityChartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    mobilityChartGroup.append("g").attr("class", "y axis").call(yAxis);

    covidChartXTranslate    = margin.left + 500;
    var covidChartGroup     = svg.append("g").attr("transform", "translate("+covidChartXTranslate+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));});

    covidChartGroup.append("path").attr("d", mobilityLine(data));

    covidChartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    covidChartGroup.append("g").attr("class", "y axis").call(yAxis); */
    
});
/* 
var mobilityMonthendData= d3.csv("data/us_states_monthend_data_transposed.csv");

mobilityMonthendData.then(function(data) {

    svg.append("g").attr("class", "monthend").selectAll("circle").data(data).enter().append("circle")
                                                                                    .attr("cx", function(d){return parseDate(d.date);})
                                                                                    .attr("cy", function(d){return Number(d.number);})
                                                                                    .attr("r", "2.5");

}); */

var covidData= d3.csv("data/us_covid_cases.csv");

covidData.then(function(data) {

    renderData(data, 600, null);

});