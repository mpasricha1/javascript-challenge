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
	d3.event.preventDefault();
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

// Create function called update cards that does all the card updates so they are syncedq
function updateCards(data){ 
	console.log(data)
	dateCard.text(data.length);
	cityCard.text(data.city.length);
};


date.on("change", function(){
	var filterData = d3.event.target.value;
	data = data.filter(row => row.datetime === filterData.trim())
	console.log(data)
	generateTable(data);
	updateCards(data);
	d3.select("#datesearch").node().value = "";
});

city.on("change", function(){
	var filterData = d3.event.target.value;

	generateTable(data.filter(row => row.city === filterData.toLowerCase().trim()));
	//updateCards(data.filter(row => row.city === filterData.toLowerCase().trim()).length);
});

state.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(data.filter(row => row.state === filterData.toLowerCase().trim()));
});

country.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(data.filter(row => row.country === filterData.toLowerCase().trim()));
});

shape.on("change", function(){
	var filterData = d3.event.target.value;
	generateTable(data.filter(row => row.shape === filterData.toLowerCase().trim()));
});

clear.on("click", function(){
	
	document.getElementById("citysearch").value=""
	document.getElementById("statesearch").value=""
	document.getElementById("countrysearch").value=""
	document.getElementById("shapesearch").value=""
	generateTable(data)
});

generateTable(tableData);
