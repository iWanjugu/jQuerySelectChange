$(document).ready(function(){

//Initializing arrays with city names
var USA = [
    {display: "Washington, D.C.", value: "WashingtonDC" }, 
    {display: "Alaska", value: "Alaska" }, 
    {display: "New York", value: "New-York" },
	{display: "Florida", value: "Florida" },
	{display: "Hawaii", value: "Hawaii" },
    {display: "California", value: "California" }];
    
var AUSTRALIA = [
    {display: "Canberra", value: "Canberra" }, 
    {display: "Sydney", value: "Sydney" }, 
    {display: "Melbourne", value: "Melbourne" },
	{display: "Perth", value: "Perth" },
    {display: "Gold Coast ", value: "Gold-Coast" }];
    
var FRANCE = [
    {display: "Paris", value: "Paris" }, 
    {display: "Avignon", value: "Avignon" }, 
    {display: "Strasbourg", value: "Strasbourg" },
    {display: "Nice", value: "Nice" }];

//Function executes on change of first select option field 
$("#country").change(function(){

var select = $("#country option:selected").val();

switch(select){
case "USA":
	city(USA);
break;

case "AUSTRALIA":
	city(AUSTRALIA);
break;

case "FRANCE":
	city(FRANCE);
break;

default:
	$("#city").empty();
	$("#city").append("<option>--Select--</option>");
break;
}
});

//Function To List out Cities in Second Select tags
function city(arr){
	$("#city").empty();//To reset cities
	$("#city").append("<option>--Select--</option>");
	$(arr).each(function(i){//to list cities
		$("#city").append("<option value=\""+arr[i].value+"\">"+arr[i].display+"</option>")
	});
}

});