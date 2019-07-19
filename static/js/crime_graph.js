// Set the dimensions of the graph
var margin = {top: 80, right: 180, bottom: 80, left: 180},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// // Parse the date / time to just be Year
// var parseDate = d3.time.format("%B %d, %Y").parse;

// // Set the ranges for x and y
// var x = d3.time.scale().range([0, width]);
// var y = d3.scale.linear().range([height, 0]);

// // Define the axes
// var xAxis = d3.svg.axis().scale(x)
//     .orient("bottom").ticks(5);

// var yAxis = d3.svg.axis().scale(y)
//     .orient("left").ticks(5);

// // Define the line
// var Incidents = d3.svg.line()	
//     .x(function(d) { return x(d.date); })
//     .y(function(d) { return y(d.Incidents); });
    
// Add the svg canvas
var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");


// set ward data set
var Ward_1_crime = []
var Ward_2_crime = []
var Ward_3_crime = []
var Ward_4_crime = []
var Ward_5_crime = []
var Ward_6_crime = []
var Ward_7_crime = []
var Ward_8_crime = []


// Get the data from the csv and create variables that filters the crime_data by ward and the type of offense
d3.csv("Resources/dc_crimes_search_results.csv", function(crime_data) {
    var Ward_1_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 1 && eachdata.offensegroup == "violent";
    })
    var Ward_1_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 1 && eachdata.offensegroup == "property";
    })

    var Ward_2_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 2 && eachdata.offensegroup == "violent";
    })

    var Ward_2_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 2 && eachdata.offensegroup == "property";
    })

    var Ward_3_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 3 && eachdata.offensegroup == "violent";
    })

    var Ward_3_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 3 && eachdata.offensegroup == "property";
    })

    var Ward_4_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 4 && eachdata.offensegroup == "violent";
    })

    var Ward_4_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 4 && eachdata.offensegroup == "property";
    })

    var Ward_5_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 5 && eachdata.offensegroup == "violent";
    })

    var Ward_5_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 5 && eachdata.offensegroup == "property";
    })

    var Ward_6_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 6 && eachdata.offensegroup == "violent";
    })

    var Ward_6_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 6 && eachdata.offensegroup == "property";
    })

    var Ward_7_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 7 & eachdata.offensegroup == "violent";
    })

    var Ward_7_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 7 & eachdata.offensegroup == "property";
    })

    var Ward_8_vc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 8 & eachdata.offensegroup == "violent";
    })

    var Ward_8_pc_data = crime_data.filter(function(eachdata) {
        return eachdata.WARD == 8 & eachdata.offensegroup == "property";
    })
console.log(Ward_1_pc_data);

// count the number of violent (vc) and property (pc) crimes by ward
            Ward_1_vc = Ward_1_vc_data.length;
            Ward_2_vc = Ward_2_vc_data.length;
            Ward_3_vc = Ward_3_vc_data.length;
            Ward_4_vc = Ward_4_vc_data.length;
            Ward_5_vc = Ward_5_vc_data.length;
            Ward_6_vc = Ward_6_vc_data.length;
            Ward_7_vc = Ward_7_vc_data.length;
            Ward_8_vc = Ward_8_vc_data.length;
            Ward_1_pc = Ward_1_pc_data.length;
            Ward_2_pc = Ward_2_pc_data.length;
            Ward_3_pc = Ward_3_pc_data.length;
            Ward_4_pc = Ward_4_pc_data.length;
            Ward_5_pc = Ward_5_pc_data.length;
            Ward_6_pc = Ward_6_pc_data.length;
            Ward_7_pc = Ward_7_pc_data.length;
            Ward_8_pc = Ward_8_pc_data.length;

// trace a stacked bar char to see which wards have the highest crime reported to MPD and to see what type of crime it is
    
    var vc_by_ward = {
        x: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"],
        y: [Ward_1_vc, Ward_2_vc, Ward_3_vc, Ward_4_vc, Ward_5_vc, Ward_6_vc, Ward_7_vc, Ward_8_vc,],
        type: "bar",
        textposition: 'auto',
        name: "Violent Offenses",
  hoverinfo: 'none',
  marker: {
    color: 'rgba(58,200,225,.5)',
    line: {
      color: 'rgb(8,48,107)'
    }
}
    };

    var pc_by_ward = {
        x: ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5", "Ward 6", "Ward 7", "Ward 8"],
        y: [Ward_1_pc, Ward_2_pc, Ward_3_pc, Ward_4_pc, Ward_5_pc, Ward_6_pc, Ward_7_pc, Ward_8_pc,],
        type: "bar",
        textposition: 'auto',
        name: "Property Related Offenses",
  hoverinfo: 'none',
  opacity: 0.5,
  marker: {
    color: 'rgb(158,202,225)',
    line: {
      color: 'rgb(8,48,107)'
    }
}
    };

    var bar = [vc_by_ward, pc_by_ward];

    var layout = {title: "Crime in Washington DC (2017-2019)",
    barmode: "stack",
    width: 1,
    yaxis: {
        title: '# of Offenses'
        },
    };

  Plotly.newPlot("mychart", bar, layout);
    // console.log(crime_by_ward);
    
});