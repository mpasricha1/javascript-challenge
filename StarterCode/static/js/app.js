// from data.js
var tableData = data;
var date = d3.select("#datesearch")
var city = d3.select("#citysearch")
var state = d3.select("#statesearch")
var country = d3.select("#countrysearch")
var shape = d3.select("#shapesearch")
var clear = d3.select("#clearfilters")

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
	
generateTable(tableData);

date.on("change", function(){
	var filterDate = d3.event.target.value;
	generateTable(data.filter(row => row.datetime === filterDate.trim()));
});

city.on("change", function(){
	var filterDate = d3.event.target.value;
	generateTable(data.filter(row => row.city === filterDate.toLowerCase().trim()));
});

state.on("change", function(){
	var filterDate = d3.event.target.value;
	generateTable(data.filter(row => row.state === filterDate.toLowerCase().trim()));
});

country.on("change", function(){
	var filterDate = d3.event.target.value;
	generateTable(data.filter(row => row.country === filterDate.toLowerCase().trim()));
});

shape.on("change", function(){
	var filterDate = d3.event.target.value;
	generateTable(data.filter(row => row.shape === filterDate.toLowerCase().trim()));
});

clear.on("click", function(){
	document.getElementById("datesearch").value=""
	document.getElementById("citysearch").value=""
	document.getElementById("statesearch").value=""
	document.getElementById("countrysearch").value=""
	document.getElementById("shapesearch").value=""
	generateTable(data)
});
