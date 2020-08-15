// from data.js
var tableData = data;
var date = d3.select("#datesearch");
var clear = d3.select("#clearfilters");

// YOUR CODE HERE!
//Function to generate the rows of the table
function generateTable(data){ 
	var clear = d3.select("#clearfilters");
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
	
	generateTable(data.filter(row => row.datetime === filterData.trim()));
	d3.select("#datesearch").node().value = "";
});

clear.on("click", function(){
	d3.select("#datesearch").node().value = "";
	generateTable(tableData)
});

generateTable(tableData);
