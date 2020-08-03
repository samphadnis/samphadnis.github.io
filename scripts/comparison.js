var parseDate = d3.timeParse("%m/%d/%Y");

var cmpheight  = 500;
var cmpwidth   = 700;
var color   = "green";
var colors  = ["red", "orange", "grey", "purple", "blue", "green"];
var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];   

var comparisonSvg = d3.select("#comparison").append("svg").attr("height", "100%").attr("width", "100%").attr("id", "comparison-data");

function renderComparisonData(translateX) {

    console.log("renderComparisonData");
    
    var max     = 130;//d3.max(data, function(d){return Number(d.number);});
    var minDate = parseDate("03/01/2020");//d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = parseDate("08/01/2020");//d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([cmpheight,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,cmpwidth]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];   
    
    var chartGroup = comparisonSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    for (i=0; i < top5States.length; i++) {

        var comparisonState = top5States[i];

        console.log("comparisonState:" + comparisonState);

        var stateComparisonData= d3.csv("data/"+comparisonState+".csv");

        console.log("i out:" + i);

        color = colors[i];

        console.log("color out:" + color);
        
        stateComparisonData.then(function(data) {

            parseDate = d3.timeParse("%m/%d/%Y");

            var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.number));})
                        .curve(d3.curveLinear);

                        if(data[0].number=="60") {

                            color = "red";
                        } else if (data[0].number=="71") {

                            color = "orange";
                        } else if (data[0].number=="72") {

                            color = "grey";
                        }  else if (data[0].number=="51") {

                            color = "purple";
                        } else if (data[0].number=="61") {

                            color = "blue";
                        }  else if (data[0].number=="70") {

                            color = "green";
                        }

                        console.log("color:" + color);
                        console.log("i:" + i);
                        console.log("color i:" + colors[i]);

            chartGroup.append("path").attr("d", line(data)).attr("stroke", color);
            
        });
        
    }

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+cmpheight+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);
}

function renderComparisonCovidData(translateX) {

    console.log("renderComparisonCovidData");
    
    var max     = 7886587;//d3.max(data, function(d){return Number(d.total);});
    var minDate = parseDate("20200301");//d3.min(data, function(d){return parseDate(d.date);});
    var maxDate = parseDate("20200801");//d3.max(data, function(d){return parseDate(d.date);});

    var y = d3.scaleLinear().domain([0,max]).range([cmpheight,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,cmpwidth]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var margin = {left:50+translateX,right:50, top:40, bottom:0};

    var top5States  = ["California", "Florida", "Texas", "New York", "New Jersey", "Illinois"];
    
    var covidChartGroup = comparisonSvg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    parseDate = d3.timeParse("%Y%m%d");

    for (j=0; j < top5States.length; j++) {

        var comparisonState = top5States[j];

        console.log("comparisonCovidState:" + comparisonState);

        var stateComparisonCovidData= d3.csv("data/"+comparisonState+"-covid.csv");

        stateComparisonCovidData.then(function(data) {

            var line = d3.line().x(function(d){return x(parseDate(d.date));})
                        .y(function(d){return y(Number(d.total));})
                        .curve(d3.curveLinear);

            covidChartGroup.append("path").attr("d", line(data)).attr("stroke", "green");
        });

    }

    covidChartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+cmpheight+")").call(xAxis);
    covidChartGroup.append("g").attr("class", "y axis").call(yAxis);

}

function addComparisonText(x, y, text) {

    comparisonSvg.append("text").attr("x",x).attr("y",y).text(text);
}

function addComparisonLine(x1, y1, x2, y2) {

    comparisonSvg.append("line").attr("x1",x1).attr("y1",y1).attr("x2",x2).attr("y2",y2).attr("stroke","blue").attr("stroke-width","1");
}

function addComparisonText(x, y, text, color) {

    comparisonSvg.append("text").attr("x",x).attr("y",y).text(text).style('fill', color);
}

function loadComparisonData() {

    console.log("loadComparisonData");

    parseDate = d3.timeParse("%m/%d/%Y");
            
    renderComparisonData(0);

    addComparisonText(100, 60, "California", "red");
    addComparisonText(200, 60, "Florida", "orange");
    addComparisonText(300, 60, "Texas", "grey");
    addComparisonText(400, 60, "New York", "purple");
    addComparisonText(500, 60, "New Jersey", "blue");
    addComparisonText(600, 60, "Illinois", "green");

    //parseDate = d3.timeParse("%Y%m%d");

    //renderComparisonCovidData(600);

}