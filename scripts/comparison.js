var parseDate = d3.timeParse("%m/%d/%Y");

var height  = 300;
var width   = 500;

var comparisonSvg = d3.select("#comparison").append("svg").attr("height", "100%").attr("width", "100%").attr("id", "comparison-data");

function renderStateComparisonData(data, svgGroup) {

    var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveCardinal);

    svgGroup.append("path").attr("d", line(data)).style("stroke",color);
}

function renderComparisonData(translateX) {

    console.log("renderComparisonData");
    
    var max     = 130;//d3.max(data, function(d){return Number(d.number);});
    var minDate = parseDate("03/01/2020");//d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = parseDate("08/01/2020");//d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];
    var colors      = ["red", "orange", "grey", "purple", "blue", "green"];
    
    var chartGroup = comparisonSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    for (i=0; i < top5States.length; i++) {

        var comparisonState = top5States[i];

        console.log("comparisonState:" + comparisonState);

        var stateComparisonData= d3.csv("data/"+comparisonState+".csv");
        
        stateComparisonData.then(function(data) {        

            parseDate = d3.timeParse("%m/%d/%Y");

            var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveCardinal);

            chartGroup.append("path").attr("d", line(data)).style("stroke",colors[i]);
            
        });
        
    }

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);
}

function renderComparisonCovidData(translateX) {

    console.log("renderComparisonCovidData");
    
    var max     = 7886587;//d3.max(data, function(d){return Number(d.total);});
    var minDate = parseDate("20200301");//d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = parseDate("20200801");//d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];
    var colors      = ["red", "orange", "grey", "purple", "blue", "green"];
    
    var covidChartGroup = comparisonSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    for (i=0; i < top5States.length; i++) {

        var comparisonState = top5States[i];

        console.log("comparisonCovidState:" + comparisonState);

        var stateComparisonCovidData= d3.csv("data/"+comparisonState+"-covid.csv");

        stateComparisonCovidData.then(function(data) {

            var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.total));})
                        .curve(d3.curveCardinal);

            covidChartGroup.append("path").attr("d", line(data)).style("stroke",colors[i]);
        });

    }

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);

}

function addComparisonText(x, y, text) {

    comparisonSvg.append("text").attr("x",x).attr("y",y).text(text);
}

function addComparisonLine(x1, y1, x2, y2) {

    comparisonSvg.append("line").attr("x1",x1).attr("y1",y1).attr("x2",x2).attr("y2",y2).attr("stroke","blue").attr("stroke-width","1");
}

function loadComparisonData() {

    console.log("loadComparisonData");

    parseDate = d3.timeParse("%m/%d/%Y");
            
    renderComparisonData(0);

    parseDate = d3.timeParse("%Y%m%d");

    renderComparisonCovidData(600);

}