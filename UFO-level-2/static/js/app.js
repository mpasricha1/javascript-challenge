// from data.js
var tableData = data;
var date = d3.select("#datesearch");
var city = d3.select("#citysearch");
var state = d3.select("#statesearch");
var country = d3.select("#countrysearch");
var shape = d3.select("#shapesearch");
var clear = d3.select("#clearfilters");
var dateCard = d3.select("#totaldates");
var cityCard = d3.select("#totalcities");

// YOUR CODE HERE!
//Function to generate the rows of the table
function generateTable(data){ 
	var tbody = d3.select("tbody");
	$("#tablebody tr").remove();
	data.forEach(function(ufoData){
		var row = tbody.append("tr"); 
		Object.entries(ufoData).forEach(function([key,value]){
			var cell = row.append("td"); 
			cell.text(value);
		});
	});
};

date.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(tableData.filter(row => row.datetime === filterData.toLowerCase().trim()));
	d3.select("#datesearch").node().value = "";
});

city.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(tableData.filter(row => row.city === filterData.toLowerCase().trim()));
	d3.select("#citysearch").node().value = "";
});

state.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(tableData.filter(row => row.state === filterData.toLowerCase().trim()));
	d3.select("#statesearch").node().value = "";
});

country.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(tableData.filter(row => row.country === filterData.toLowerCase().trim()));
	d3.select("#countrysearch").node().value = "";
});

shape.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(tableData.filter(row => row.shape === filterData.toLowerCase().trim()));
	d3.select("#shapesearch").node().value = "";
});

clear.on("click", function(){
	d3.select("#datesearch").node().value = "";
	d3.select("#citysearch").node().value = "";
	d3.select("#statesearch").node().value = "";
	d3.select("#countrysearch").node().value = "";
	d3.select("#shapesearch").node().value = "";
	generateTable(tableData)
});

generateTable(tableData);
