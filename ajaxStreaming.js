$.ajax({
  //old code which takes file from local
  url: "testdata.csv",
  dataType: "text",
  success: function(data) {
    console.log(data);
    var papaParsedData = Papa.parse(data);
    console.log(papaParsedData);
    var employee_data = data.split(/\r?\n|\r/);
    var table_data =
      '<table class="table table-dark"><thead><tr><th scope="col">User</th><th scope="col">Ratings</th><th scope="col">Review</th><th scope="col">Product ID</th><th scope="col">Product Image</th></tr ></thead >';
    for (var count = 0; count < employee_data.length; count++) {
      //var cell_data = employee_data[count].find(",").replace("-").split(","); //ignoring comma in cell data needs some work. need to brainstorm better working RegEx
      var cell_data = employee_data[count].split(",");
      table_data += "<tbody><tr>";
      for (var cell_count = 0; cell_count < cell_data.length; cell_count++) {
        //if (count === 0) {
        //    table_data += '<th>' + cell_data[cell_count] + '</th>';
        //}
        var table_row = "<td>" + cell_data[cell_count] + "</td>";
        table_data += table_row;
      }
      table_data += "</tbody></tr>";
    }
    table_data += "</table>";
    $("#review_table").html(table_data);
  }
});
