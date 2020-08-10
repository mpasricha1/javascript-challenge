// from data.js
var tableData = data;
var date = d3.select("#datesearch")
var filterButton = d3.select("#filterscreen")

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
	var filterResults = data.filter(date => date.datetime === filterDate);

	generateTable(filterResults);
});

filterButton.on("click", function(){
	console.log("Button Clicked")
	document.getElementById("overlay").style.display = "block"
} )
