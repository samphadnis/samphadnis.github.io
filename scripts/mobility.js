var parseDate = d3.timeParse("%m/%d/%Y");

d3.csv("data/us_states_data_transposed.csv")
.row(function(d){return {date:parseDate(d.date),mean:Number(d.mean.trim())};})
.get(function(error, data){

    var height  = 300;
    var width   = 500;
    
    var max     = d3.max(data, function(d){return d.mean;});
    var minDate = d3.min(data, function(d){return d.date;});
    var maxDate = d3.max(data, function(d){return d.date;});

    var y = d3.scaleLinear().domain([0,max]).range([height,0]);
    var x = d3.scaleTime().domain([minDate,maxDate]).range([0,width]);

    var yAxis = d3.axisLeft(y);
    var xAxis =  d3.axisBottom(x);

    var svg = d3.select("body").append("svg").attr("height", "100%").attr("width", "100%");

    var margin = {left:50,right:50, top:40, bottom:0};

    var chartGroup = svg.append("g").attr("transform", "translate("+margin.left+", "+margin.top+")");

    var line = d3.line().x(function(d){return x(d.date);})
                        .y(function(d){return y(d.mean);});

    chartGroup.append("path").attr("d", line(data));

    chartGroup.append("g").attr("class", "x axis").attr("transform", "translate(0, "+height+")").call(xAxis);
    chartGroup.append("g").attr("class", "y axis").call(yAxis);
    console.log(data);
});