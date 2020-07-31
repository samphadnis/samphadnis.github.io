var parseDate = d3.timeParse("%m/%d/%Y");

var mobilityData= d3.csv("data/us_states_data_transposed.csv");

mobilityData.then(function(data) {

    var height  = 300;
    var width   = 500;
    
    var max     = d3.max(data, function(d){return Number(d.mean);});
    var minDate = d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

    var margin = {left:50,right:50, top:40, bottom:0};

    var mobilityChartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var mobilityLine = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.mean));})
                        .curve(d3.curveCardinal);

    mobilityChartGroup.append("path").attr("d", mobilityLine(data));

    mobilityChartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    mobilityChartGroup.append("g").attr("class", "y axis").call(yAxis);

    covidChartXTranslate = margin.left + 500;
    var covidChartGroup = svg.append("g").attr("transform", "translate("+covidChartXTranslate+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.mean));});

    covidChartGroup.append("path").attr("d", line(data));

    covidChartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    covidChartGroup.append("g").attr("class", "y axis").call(yAxis);
    
});