// from data.js
var tableData = data;

// YOUR CODE HERE!
function generateTableHead(table,data1) { 
	var thead = table.createTHead(); 
	var row = thead.insertRow()
	for (let key of data1){ 
		let th=document.createElement("th"); 
		let text = document.createTextNode(key); 
		th.appendChild(text); 
		row.appendChild(th);
	}
}	

function generateTable(table, data){ 
	for(let element of data){ 
		let row = table.insertRow();
		for (key in element){ 
			let cell = row.insertCell();
			let text = document.createTextNode(element[key]);
			cell.appendChild(text)
		}
	}
}

let table = document.querySelector("table"); 
let data1 = Object.keys(tableData[0]);
generateTableHead(table,data1)
generateTable(table,tableData)