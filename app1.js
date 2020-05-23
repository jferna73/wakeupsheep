var tableData = data;
var len =tableData.length;
console.log(len);

var tbody = d3.select("tbody");


function init() {
data.forEach(function(UFO) {
  // console.log(UFO);
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(function([key, value]) {
    // console.log(key, value);
  var cell = row.append("td");
  cell.text(value);
  });
});
}


function my_filteredata(){
  var date_elem =  d3.select("#form-control-date");
  var date_val = date_elem.property("value");

  var city_elem  = d3.select("#form-control-city");
  var city_val= city_elem.property("value");

  var shape_elem = d3.select("#form-control-shape");
  var shape_val = shape_elem.property("value");

  var country_elem = d3.select("#form-control-country");
  var country_val = country_elem.property("value");

  var state_elem = d3.select("#form-control-state");
  var state_val = state_elem.property("value");

  var filter_data = [...data]

  if (date_val != "" ){
    filter_data = filter_data.filter(function(d){
      return data_val == d.datetime
    });
  }
  if (city_val != ""){
    filter_data = filter_data.filter(function(d){
      return city_val == d.city
    });
  }
  if (shape_val != ""){
    filter_data = filter_data.filter(function(d){
      return shape_val == d.shape
    });
  }
  if (country_val != ""){
    filter_data = filter_data.filter(function(d){
      return country_val == d.country
    });
  }
  if (state_val != ""){
    filter_data = filter_data.filter(function(d){
      return state_val == d.state
    });
  }

  filter_data.forEach(function(UFO) {
    var row = tbody.append("tr");
    Object.entries(UFO).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
    });
  });
}

function handleSubmit(){
  d3.select("tbody").selectAll("tr").remove();
  
  my_filteredata();
}

init();

