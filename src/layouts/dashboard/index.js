import "./../../scripts/app";
import "./styles";

import Request from "./../../scripts/request";
import User from "./../../scripts/user";
import Endpoints from "./../../../config/endpoints";

const stats = require("./../../partials/dashboard/stats.hbs");
const carousel = require("./../../partials/carousel.hbs");

console.log("Welcome to dashboard!");

if (!User.isLoggedIn()) {
  window.location.href = "/login";
}

// // closed.bs.alert remove only div with class blur
// $(".alert").on("closed.bs.alert", function () {
//   var cnt = $(".blur").contents();
//   $(".blur").replaceWith(cnt);
//   // $("div").removeClass("blur");
// } );

const renderStats = (data) => {
  const getHeading = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  
  }
  let statsData = [];

  const grid = data.data;
  for (let key in data) {
    if(data[key] == null){
      $("#" + key).html(0);
    }else{
    $("#" + key).html(data[key]);
      }
  }
}

const renderHourlyGraph = (data) => {

  const getHeading = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  let statsData = [];
  let tableData = [];
  const grid = data.grid[0];

  for (let key in grid) {
    if (grid.hasOwnProperty(key)) {
      statsData.push({
        heading: getHeading(key),
        value: grid[key]
      });
      tableData.push(grid[key]);
    }
  }

  const hdata = data.grid;
  const totalSubmit = [];
  const totalDelivered = [];
  const newhoursList = [];
  for (var i = 0; i < 24; i++) {
    totalSubmit[i] = 0;
    totalDelivered[i] = 0;
    
    newhoursList[i] = year + "-" + month + "-" + day+"T" + i + ":00:00";
  }

  //var totalSubmit = [];
  for (let row in hdata) {
    var summaryHour = hdata[row]['summaryHour'];
    totalSubmit[summaryHour] = hdata[row]['totalSubmit'];
    totalDelivered[summaryHour] = hdata[row]['totalDelivered'];
  }

  var options = {
    chart: {
      height: 310,
      type: 'area',
    },
    colors: ['#6F5CFF', '#53B574'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    series: [{
      name: 'Total Submit',
      data: totalSubmit
    },{
      name: 'Total Delivered',
      data: totalDelivered
    },],

    xaxis: {
      type: 'datetime',
      categories: newhoursList,
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  }
  console.log(options);
  var chart = new ApexCharts(
    document.querySelector("#hourlyGraph"),
    options
  );

  chart.render();

}


// pie chart start

const renderPieChart = (data) => {
  let dval = data.grid[0];
  console.log(dval.totalAwaited);
  var options = {
  
  
    series: [parseInt(dval.totalRequest),parseInt(dval.totalRejected),parseInt(dval.totalSubmit),parseInt(dval.totalDelivered),parseInt(dval.totalFailed),parseInt(dval.totalAwaited)],
    labels:['Request','Rejected','Submit','Delivered','Failed','Awaited'],
    chart: {
   // width: 380, h-250
    height:350,
    type: 'donut',
  },
  colors: ['#d420aa', '#FF7016', '#6F5CFF', '#49cc75', '#FF0000', '#f7f434'],
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270
    }
  },
  dataLabels: {
    enabled: false
   
  },
  fill: {
    type: 'gradient'
  },
  legend: {
    formatter: function(val, opts) {
      return val + " - " + opts.w.globals.series[opts.seriesIndex]
    }
  },
  title: {
    // text: 'Gradient Donut with custom Start-angle'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  }
  var chart = new ApexCharts(document.querySelector("#summaryReport"), options);
  chart.render();
  }

// pie chart end




const renderSummaryReportGraph = (data) => {
  const getHeading = (key) => {
    let result = key.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  const grid = data.grid[0];

  let tableHeader = [];
  let tableData = [];
  let formattedTableHeader = [];
  for (let key in grid) {
    if(key !== "summaryDate"){

    if (grid.hasOwnProperty(key)) {
      tableHeader.push(key);
      formattedTableHeader.push(getHeading(key));
      tableData.push(grid[key]);
    }
}
  }
  
  console.log(data.grid[0]);


}





/*
var options = {
  chart: {
    height: 350,
    type: 'line',
  },
  series: [{
    type: 'column',
    data: tableData
  }],
  labels: formattedTableHeader
}
*/






// var colors = ['#008FFB','#FEB019','#775DD0','#00E396','#ff0000','#AFAF0A'];
//         var options = {
//             chart: {
//                 height: 350,
//                 type: 'bar',
//             },
//             colors: colors,
//             plotOptions: {
//                 bar: {
//                     columnWidth: '45%',
//                     distributed: true
//                 }
//             },
//             dataLabels: {
//                 enabled: false,
//             },
//             series: [{
//                 data: tableData
//             }],
//             xaxis: {
//                 categories: formattedTableHeader,
//                 labels: {
//                     style: {
//                         colors: colors
//                     }
//                 }
//             }
//         }
// var chart = new ApexCharts(
//   document.querySelector("#summaryReport"),
//   options
// );

// chart.render();

// }




function kFormatter(num) {
  return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
}

Request(Endpoints.get("dashboard"), "POST", {
  username: User.getName()
}).done(data => {
  if (Endpoints.validateResponse(data)) {
    const dashboardData = data.data || {};
    renderStats(dashboardData);
  }
});

Request(Endpoints.get("getHourlyReport"), "POST", {
  loggedInUserName: User.getName()
}).done(data => {
  console.log(data);
  if (Endpoints.validateResponse(data)) {
    const dashboardData = data.data || {};
    renderHourlyGraph(dashboardData);

  }
});

var d = new Date();
var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();
console.log(year + "-" + month + "-" + day);

var todayDate = year + "-" + month + "-" + day;
// replace this variable in from and to date.. once it is live
Request(Endpoints.get("summaryReport"), "POST", {
  loggedInUserName: User.getName(),
  fromDate: todayDate,
  toDate: todayDate
}).done(data => {
  console.log(data);
  if (Endpoints.validateResponse(data)) {
    const dashboardData = data.data || {};
    renderSummaryReportGraph(dashboardData);
    renderPieChart(dashboardData);
  }
});
