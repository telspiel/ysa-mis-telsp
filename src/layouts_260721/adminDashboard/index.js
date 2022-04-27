import "./../../scripts/app";
import "./styles";

import Request from "./../../scripts/request";
import User from "./../../scripts/user";
import Endpoints from "./../../../config/endpoints";

const table = require("./../../partials/table.hbs");

console.log("Welcome to admin dashboard!");

if (!User.isLoggedIn()) {
  window.location.href = "/login";
}

const renderTable = (data) => {
  const getHeading = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  const headerRow = data[0];
  let tableHeader = [];
  let formattedTableHeader = [];
  for (let key in headerRow) {
    if (headerRow.hasOwnProperty(key)) {
      tableHeader.push(key);
      formattedTableHeader.push(getHeading(key));
    }
  }
  const tableData = data.map(row => {
    var rowData = [];
    tableHeader.forEach((key) => {
      rowData.push(row[key] || "-")
    });
    return rowData;
  });
  $("#adminTable").append(table({ formattedTableHeader, tableData }));
}

const now = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");

const data = {
  username: User.getName(),
  fromDate: now,
  toDate: now,
};

Request(Endpoints.get("adminDashboard"), "POST", data).done(data => {
  if (Endpoints.validateResponse(data)) {
    const tableData = (data.data || {}).grid || [];
    renderTable(tableData);
  }
});
