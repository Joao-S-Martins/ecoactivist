// JavaScript Document
/**
These would be propeties in a singleton data model if this were meant to be a larger application
*/
var _PHARMA = null;
var _BUSINESS = null;

function loadCarpool() { $(bikemapHeader).html('Carpool Map'); }
function loadBike() { $(bikemapHeader).html('Bike Route Map'); }
/** I don't usually put mutliple lines of code on the same line in a file, but sometimes when a few functions are virtual
copies of one another, I do. Then I come back to refactor them possible. This group of functions would be refactored into one function
that takes in an enumerable which specifies which set of data is to be collected and resented.
*/
function loadRecycling() { $(maplistHeader).html('Recycling Centers'); if (_PHARMA != null) { processPharmaData(); } else { $.getJSON('data/Alameda-County-Pharmaceutical-Take-Back-Locations.json', processPharmaData ); } }
function loadElectronics() { $(maplistHeader).html('Electronic Recycling'); if (_PHARMA != null) { processPharmaData(); } else { $.getJSON('data/Alameda-County-Pharmaceutical-Take-Back-Locations.json', processPharmaData ); } }
function loadClothing() { $(maplistHeader).html('Clothing Donation Locations'); if (_PHARMA != null) { processPharmaData(); } else { $.getJSON('data/Alameda-County-Pharmaceutical-Take-Back-Locations.json', processPharmaData ); } }
function loadPharma() {
	//debugger
	$(maplistHeader).html('Medial Drop-Offs');
	if (_PHARMA != null) {
		processPharmaData();
	} else {
		$.getJSON('data/Alameda-County-Pharmaceutical-Take-Back-Locations.json', processPharmaData );
	}
}
function loadBatteris() { $(maplistHeader).html('Battery Recycling'); if (_PHARMA != null) { processPharmaData(); } else { $.getJSON('data/Alameda-County-Pharmaceutical-Take-Back-Locations.json', processPharmaData ); } }

function loadBusiness() {
	$(maplistHeader).html('Green Certified Businesses');
	if (_BUSINESS != null) {
		processBusinessData();
	} else {
		$.getJSON('data/Certified-Green-Business.json', processBusinessData );
	}
}

function loadReps() {
	
}

function processPharmaData( data ) {
	if (_PHARMA == null)
	{
		_PHARMA = data;
	}
	//debugger
	loadPharmaData( _PHARMA );
}

function loadPharmaData( data ) {
	$page = $(maplist);
	var collapse = $(mapCollapseList);
	collapse.html('');
	//var headers = data.meta.view.columns[14];
	var items = data.data;
	//debugger
	for (var i = 0; i < items.length; i++)
	{
		var address = items[i][10];
		var city = address[0].replace( /.*city":"/, "" ).replace( /","state".*/, ""); //"{"address":"15001 Foothill Blvd","city":"San Leandro","state":"CA","zip":""}"
		var name = items[i][8];
		var dividerName = city;
		var dividerID = dividerName.replace( /\//, "" );
		dividerID = dividerID + "PharmaDivider";
		var divider = $('#' + dividerID);
		
		if (divider.length == 0) {
			divider = $("<div />", { "data-role":"collapsible", "data-collapsed":"true", id:dividerID });
			divider.append($('<h3>' + city  + '</h3>'));
			divider.appendTo(collapse);
		}
		//var mapString = 'https://maps.googleapis.com/maps/api/staticmap?center=' + items[i][cityCol] + ', CA&amp;zoom=14&amp;size=288x200&amp;markers=' + items[i][streetCol] + ' ' + items[i][cityCol] + ', CA ' + items[i][zipCol] + '&amp;sensor=false';
		divider.append("<p>" + name + "</p>")//, { onClick:"$('#maplistImg').src = " + mapString });
	}
	//debugger
	collapse.collapsibleset( "refresh" );
}

function processBusinessData( data ) {
	if (_BUSINESS == null)
	{
		_BUSINESS = data;
	}
	loadBusinessData( _BUSINESS );
}

function loadBusinessData( data ) {
	$page = $(maplist);
	var collapse = $(mapCollapseList);
	collapse.html('');
	//var headers = data.meta.view.columns[14];
	var items = data.data;
	var nameCol = 9;
	var addressCol = 11;
	var cityCol = 8;
	var zipCol = 12;
	var phoneCol = 13;
	var groupingCol = 14;
	//debugger
	for (var i = 0; i < items.length; i++)
	{
		var dividerName = items[i][groupingCol];
		var dividerID = dividerName.replace( /\//, "" );
		dividerID = dividerID + "MaplistDivider";
		var divider = $('#' + dividerID);
		if (divider.length == 0) {
			divider = $("<div />", { "data-role":"collapsible", "data-collapsed":"true", id:dividerID });
			divider.append($('<h3>' + dividerName  + '</h3>'));
			divider.appendTo(collapse);
		}
		//var mapString = 'https://maps.googleapis.com/maps/api/staticmap?center=' + items[i][cityCol] + ', CA&amp;zoom=14&amp;size=288x200&amp;markers=' + items[i][streetCol] + ' ' + items[i][cityCol] + ', CA ' + items[i][zipCol] + '&amp;sensor=false';
		divider.append("<p>" + items[i][nameCol] + ", " + items[i][cityCol] + "</p>")//, { onClick:"$('#maplistImg').src = " + mapString });
	}
	//debugger
	collapse.collapsibleset( "refresh" );
}
