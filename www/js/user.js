// JavaScript Document
/**
This was written for a single user app. For a multi-user app, it would be written as an actual object.
The code below would be wrapped in a constructor function. The methods would take parameters or
return values and objects instead of directly interfacing with the UI elements. Setter and getter functions would be added
to publicly expose each private variable and saveSettings would still be available so that all values can be passed in
and set with one convenient method. Though none of these NEED to be private, defining setter and getter functions makes
it easier to implement event-driven design, such as throwing a language changing event when a new language is set for the user.
*/

var _LANGUAGE = null; //string
var _STREET = null; //string 
var _CITY = null; //string
var _ZIP = null //string
var _GPS = false; //boolean

function saveSettings() {
	//_LANGUAGE = $(languageSelect).value;
	_STREET = $(street).value;
	_CITY = $(city).value;
	_ZIP = $(zip).value;
	//_GPS = $(gpsSelect).value;
}
	
function showSettings() {
	//if (_LANGUAGE) { $(languageSelect).value = _ZIP; }
	if (_STREET) { $(street).value = _STREET; }
	if (_CITY) { $(city).value = _CITY; }
	if (_ZIP) { $(zip).value = _ZIP; }
	//if (_GPS) { $(gpsSelect).value = _ZIP; }
	
}