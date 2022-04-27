import "./../../scripts/app";
import "./styles";

import Request from "./../../scripts/request";
import User from "./../../scripts/user";
import Endpoints from "./../../../config/endpoints";
import Alert from "./../../scripts/alert";
import Cookie from "./../../scripts/cookie";
const table = require("./../../partials/table.hbs");

console.log("Welcome to detailed mis!");

if (!User.isLoggedIn()) {
  window.location.href = "/login";
}

$("#fromDate,#toDate").datetimepicker({
  timepicker: false,
  maxDate: '0',
  dateFormat: 'yyyy-mm-dd',
  value: '12.03.2013',
  format: 'Y-m-d',
  closeOnDateSelect: true
}).attr('readonly', 'readonly');

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

  var dtable = $('#misTable').DataTable({
    data: tableData,
    // "columns": [
    //   { title: "Summary Date" },
    //   { title: "Campaign Name" },
    //   { title: "Campaign Id" },
    //   { title: "Total Request" },
    //   { title: "Total Rejected" },
    //   { title: "Total Submit" },
    //   { title: "Total Delivered" },
    //   { title: "Total Failed" },
    //   { title: "Total Awaited" },
    //   { title: "Total Clicks" },
    //   { title: "Action" }
    // ],
    "order": [[0, "desc"]],
  paging: false,
  "columnDefs": [
    { className: "text-wrap", "targets": [ 1 ] },
    {
      "targets": [2],
      "visible": false,
      "searchable": false
    }, {
      "targets": -1,
      "data": null,
      "defaultContent": "<button class='btn btn-info' id='clicker'> Clicker Analytics</button> &nbsp; <button class='btn btn-success' id='detail'> Detailed Analytics</button>"
      // 'render': function (data, type, row) {
      //   console.log(row[2]);
      //   //     return  "<a href='/clicker-analysis?champianId="+row[2]+"' class='btn btn-info'>Clicker Analytics</a> <a  href='/detailed-analysis?champianId="+row[2]+"' class='btn btn-success'>Detailed Analytics</a>"
      //   return "<a id='click' data-id=" + row[2] + " class='btn btn-info'>Clicker Analytics</a> <a id='detail' data-id=" + row[2] + " class='btn btn-success'>Detailed Analytics</a>";
      // }
    }]
});


  $('#misTable tbody').on('click', 'button#clicker', function () {
    var data = dtable.row($(this).parents('tr')).data();
    if (data) {
      localStorage.setItem("campaignId", data[2]);
      localStorage.setItem("campaignName", data[1]);
      location.href = "/clicker-analysis";
    }
  });

  $('#misTable tbody').on('click', 'button#detail', function () {
    var data = dtable.row($(this).parents('tr')).data();
    if (data) {
      localStorage.setItem("campaignId", data[2]);
      localStorage.setItem("campaignName", data[1]);
      location.href = "/detailed-analysis";
    }
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

$(() => {
$("#misTable_wrapper").removeClass("form-inline");
  $("#controls-form").submit(function (e) {
    e.preventDefault();
    const data = {
      loggedInUserName: User.getName(),
      fromDate: this[0].value,
      toDate: this[1].value,
      pageNumber: +this[2].value,
    };
    Request(Endpoints.get("campaignReport"), "POST", data, {
      showMainLoader: true
    }).done(data1 => {
      renderDetailedMis(data1);
Alert.clearAll();
      data1.message &&
        (data1.result === "Success"
          ? Alert.success(data1.message, {
            clearTime: 10 * 1000
          })
          : Alert.error(data1.message, {
            clearTime: 10 * 1000
          }));
  $("#misTable_wrapper").removeClass("form-inline");
      var donwloadlink = data1.data.downloadReportLink;
      if (donwloadlink != null) {
        $("#donwloadCampaignReport").html(donwloadlink);
        getDownloadableFile();
        $("#donwloadCampaignReport").removeClass("d-none");
      } else {
        $("#donwloadCampaignReport").addClass("d-none");
      }
    });
  });
  $("#pageNext").click(() => {
    const pageNumber = +($("#pageNumber").val());
    const totalPages = +($("#totalPages").val());
    if (pageNumber < totalPages) {
      $("#pageNumber").val(pageNumber + 1);
      $("#controls-form").submit();
    }
  });
  $("#pagePrev").click(() => {
    const pageNumber = +($("#pageNumber").val());
    if (pageNumber > 1) {
      $("#pageNumber").val(pageNumber - 1);
      $("#controls-form").submit();
    }
  });
});

const data = {
  loggedInUserName: User.getName(),
  fromDate: now,
  toDate: now,
  pageNumber: 1
};
Request(Endpoints.get("campaignReport"), "POST", data).done(data => {
  renderDetailedMis(data);
  $("#misTable_wrapper").removeClass("form-inline");
  var donwloadlink = data.data.downloadReportLink;
  if (donwloadlink != null) {
    $("#donwloadCampaignReport").html(donwloadlink);
    getDownloadableFile();
    $("#donwloadCampaignReport").removeClass("d-none");
  } else {
    $("#donwloadCampaignReport").addClass("d-none");
  }
});
function getDownloadableFile() {
  $('#donwloadCampaignReport').on('click', 'a', function (e) {
    e.preventDefault();
    console.log(this.getAttribute('href'));
    // Use XMLHttpRequest instead of Jquery $ajax
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      var a;
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        // Trick for making downloadable link
        a = document.createElement('a');
        a.href = window.URL.createObjectURL(xhttp.response);
        // Give filename you wish to download
        const dTime = moment(new Date()).format("DDMMYYYY-HHmm");
        a.download =  User.getName()+"-"+dTime+"-CampaignReport.csv";
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
      }
    };
    // Post data to URL which handles post request
    xhttp.open("GET", this.getAttribute('href'));
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
    xhttp.setRequestHeader("Authorization", Cookie.get("misJWT"));
    // You should set responseType as blob for binary responses
    xhttp.responseType = 'blob';
    xhttp.send();
    exit();
  });
}
