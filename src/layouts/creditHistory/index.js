import "./../../scripts/app";
import "./styles";

import Request from "./../../scripts/request";
import User from "./../../scripts/user";
import Endpoints from "./../../../config/endpoints";

const table = require("./../../partials/table.hbs");

console.log("Welcome to Credit Management!");

if (!User.isLoggedIn()) {
  window.location.href = "/login";
}
const renderDetailedMis = (data) => {
  if (!Endpoints.validateResponse(data)) {
    return false;
  }
  const grid = (data.data || {}).grid || [];
  const getHeading = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  const headerRow = grid[0];
  let tableHeader = [];
  let formattedTableHeader = [];
  for (let key in headerRow) {
    if (headerRow.hasOwnProperty(key)) {
      tableHeader.push(key);
      formattedTableHeader.push(getHeading(key));
    }
  }
  const tableData = grid.map(row => {
    var rowData = [];
    tableHeader.forEach((key) => {
      rowData.push(row[key] || "-")
    });
    return rowData;
  });

  if ($.fn.dataTable.isDataTable('#misTable')) {
    $('#misTable').DataTable().destroy();
  }
  $('#misTable').DataTable({
    data: tableData,
    "columns": [
      { title: "Created Date" },
      { title: "Credit" },
      { title: "Status" },
      { title: "Updated Credit" },
      { title: "Updated By" },
      { title: "Comment" }
    ],
    "order": [[ 0, "desc" ]],
  });

  const totalPageCount = (data.data || {}).totalPageCount || 0;
  $("#totalPages").val(totalPageCount);

  const pageNumber = +($("#pageNumber").val());
  if (totalPageCount > pageNumber) {
    $("#pageNext").show();
  } else {
    $("#pageNext").hide();
  }

  if (pageNumber > 1) {
    $("#pagePrev").show();
  } else {
    $("#pagePrev").hide();
  }
}

const now = moment(new Date()).format("YYYY-MM-DD");
console.log(now);
  $('.datepicker').val(now);
$(() => {

  $("#fromDate").val(now).datetimepicker({
    format: "Y-m-d"
  });
  $("#toDate").val(now).datetimepicker({
    format: "Y-m-d"
  });
});
$("#controls-form").submit(function (e) {
  e.preventDefault();
  const data = {
    loggedInUserName: User.getName(),
    fromDate: this[0].value,
    toDate: this[1].value
  };
  Request(Endpoints.get("creditHistory"), "POST", data, {
    showMainLoader: true
  }).done(data => {
    renderDetailedMis(data);
  });
});
//
const data = {
  loggedInUserName: User.getName(),
  fromDate  : $("#from").val(),
  toDate  : $("#to").val()
};
Request(Endpoints.get("creditHistory"), "POST", data, {
  showMainLoader: true
}).done(data => {
  renderDetailedMis(data);
});
