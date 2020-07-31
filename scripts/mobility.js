var parseDate = d3.timeParse("%m/%d/%Y");

var height  = 300;
var width   = 500;

var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

function renderData(data, translateX) {
    
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
}

function addText(x, y, text) {

    svg.append("text").attr("x",x).attr("y",y).text(text);
}

function addLine(x1, y1, x2, y2) {

    svg.append("line").attr("x1",x1).attr("y1",y1).attr("x2",x2).attr("y2",y2).attr("stroke","blue").attr("stroke-width","1");
}

var mobilityData= d3.csv("data/us_states_data_transposed.csv");

mobilityData.then(function(data) {

    renderData(data, 0);

    addText(125,225,"Low mobility");
    addLine(125,250,155,250);

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

var covidData= d3.csv("data/us_covid_cases.csv");

covidData.then(function(data) {

    renderData(data, 600);

});