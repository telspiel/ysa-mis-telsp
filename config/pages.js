const _ = require("lodash");

class PageConfig {
  constructor() {
    this.pages = [
      {
        name: "login",
        entypoint: "./src/layouts/login",
        store: {
          title: "Login",
          scripts: [
            "js/jquery.js",
            "js/popper.js",
            "js/bootstrap.min.js",
            "js/common.js",
            "js/login.js",
            "js/login-main.js",
            "js/validator.min.js",
            "js/imagesloaded.pkgd.min.js",
          ],
          styles: ["css/bootstrap.min.css", "css/login.css","css/star-animation.css","css/flaticon.css"],
          navDisplay: true
        }
      },
      {
        name: "dashboard",
        entypoint: "./src/layouts/dashboard",
        store: {
          title: "Dashboard",
          scripts: [
            // "js/jquery.js",
            // "js/popper.js",
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/plugins/apexcharts.min.js", // new
            "js/common.js",
            "js/dashboard.js"
          ],
          styles: ["css/theme.css", "css/new_style.css", "font-awesome/css/font-awesome.min.css"],
          dashboard: true
        }
      },
      {
        name: "detailedMis",
        entypoint: "./src/layouts/detailedMis",
        store: {
          title: "Analytics",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            // "js/jquery.js",
            // "js/popper.js",
            // "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            "js/detailedMis.js"
          ],
          styles: [
            "css/theme.css",
            "css/new_style.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ],
          detailedMis: true
        }
      },
      {
        name: "adminDashboard",
        entypoint: "./src/layouts/adminDashboard",
        store: {
          title: "Admin Dashboard",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            // "js/jquery.js",
            // "js/popper.js",
            // "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "js/adminDashboard.js"
          ],
          styles: [
            "css/theme.css",
            "css/new_style.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "font-awesome/css/font-awesome.min.css"
          ],
        }
      },
      {
        name: "summaryReport",
        entypoint: "./src/layouts/summaryReport",
        store: {
          title: "Summary-Report",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            // "js/jquery.js",
            // "js/popper.js",
            // "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            "js/summaryReport.js"
          ],
          styles: [
            "css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ],
          summaryReport: true
        }
      },
      {
        name: "senderidReport",
        entypoint: "./src/layouts/senderidReport",
        store: {
          title: "Sender ID Report",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            // "js/jquery.js",
            // "js/popper.js",
            // "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            "js/senderidReport.js"
          ],
          styles: [
            "css/theme.css",
            "css/new_style.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ],
          senderidReport: true
        }
      },
      {
        name: "downloadReport",
        entypoint: "./src/layouts/downloadReport",
        store: {
          title: "Download Report",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            // "js/jquery.js",
            // "js/popper.js",
            // "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "datepicker/js/datetimepicker.js",
            "js/downloadReport.js"
          ],
          styles: [
            "css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ],
          downloadReport: true
        }
      },
      {
        name: "creditHistory",
        entypoint: "./src/layouts/creditHistory",
        store: {
          title: "Credit History",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            "js/creditHistory.js"
          ],
          styles: ["css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "blacklist",
        entypoint: "./src/layouts/blacklist",
        store: {
          title: "Blacklist",
          scripts: [
            "js/vendor-all.min.js",
            "js/bootstrap.min.js",
            "js/pcoded.min.js",
            "js/common.js",
            "js/moment.js",
            "datatable/js/jquery.dataTables.min.js",
            "datatable/js/dataTables.bootstrap4.min.js",
            "datatable/js/dataTables.responsive.min.js",
            "datatable/js/responsive.bootstrap4.min.js",
            "datepicker/js/jquery-ui.js",
            "../js/blacklist.js"
          ],
          styles: [
            "css/bootstrap.min.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "css/theme.css",
            "css/new_style.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "user-profile",
        entypoint: "./src/layouts/user-profile",
        store: {
          title: "User Profile",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            // "../js/datetimepicker.js",
            "../js/user-profile.js"
          ],
          styles: ["css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "campaign-report",
        entypoint: "./src/layouts/campaign-report",
        store: {
          title: "Campaign Report",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/jquery.js",
            "js/popper.js",
            "js/bootstrap.js",
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            "../js/campaign-report.js"
          ],
          styles: ["css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "clicker-analysis",
        entypoint: "./src/layouts/clicker-analysis",
        store: {
          title: "Clicker Analysis",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/moment.js",
            "js/plugins/apexcharts.min.js",
            "js/chart-apex.js",
            "js/common.js",
            "js/clicker-analysis.js"
          ],
          styles: ["css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"],
        }
      },
      {
        name: "detailed-analysis",
        entypoint: "./src/layouts/detailed-analysis",
        store: {
          title: "Detailed Analysis",
          scripts: [
            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            "js/common.js",
            "js/moment.js",
            "datepicker/js/jquery-ui.js",
            "datepicker/js/datetimepicker.js",
            // "../js/datetimepicker.js",
            "../js/detailed-analysis.js"
          ],
          styles: ["css/theme.css",
            "css/new_style.css",
            "css/datetimepicker.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "datepicker/css/datetimepicker.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "add-senderid",
        entypoint: "./src/layouts/add-senderid",
        store: {
          title: "Add Sender ID",
          scripts: [
            "js/vendor-all.min.js",
            // "js/plugins/bootstrap.min.js",
            "js/bootstrap.min.js",
            "js/pcoded.min.js",
            "js/common.js",
            "js/moment.js",
            "datatable/js/jquery.dataTables.min.js",
            "datatable/js/dataTables.bootstrap4.min.js",
            "datatable/js/dataTables.responsive.min.js",
            "datatable/js/responsive.bootstrap4.min.js",
            "datepicker/js/jquery-ui.js",
            "js/datetimepicker.js",
            "js/add-senderid.js"
          ],
          // styles: ["../css/bootstrap.css"],
          styles: ["css/bootstrap.min.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "css/theme.css",
            "css/new_style.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      },
      {
        name: "template-mgmt",
        entypoint: "./src/layouts/template-mgmt",
        store: {
          title: "Template Management",
          scripts: [

            "js/vendor-all.min.js",// new
            "js/bootstrap.min.js",// new js
            "js/pcoded.min.js", // new
            
            "js/moment.js",
            "datatable/js/jquery.dataTables.min.js",
            "datatable/js/dataTables.bootstrap4.min.js",
            "datatable/js/dataTables.responsive.min.js",
            "datatable/js/responsive.bootstrap4.min.js",
            "js/common.js",
            "js/template-mgmt.js"

            // "js/vendor-all.min.js",
            // // "js/plugins/bootstrap.min.js",
            // "js/pcoded.min.js",
            // "js/common.js",
            // // "js/moment.js",
            // "datatable/js/jquery.dataTables.min.js",
            // "datatable/js/dataTables.bootstrap4.min.js",
            // "datatable/js/dataTables.responsive.min.js",
            // "datatable/js/responsive.bootstrap4.min.js",
            // "datepicker/js/jquery-ui.js",
            // // "js/datetimepicker.js",
            // "js/template-mgmt.js"
          ],
          styles: ["css/bootstrap.min.css",
            "datatable/css/dataTables.bootstrap4.min.css",
            "datatable/css/responsive.bootstrap4.min.css",
            "datepicker/css/jquery-ui.css",
            "css/theme.css",
            "css/new_style.css",
            "font-awesome/css/font-awesome.min.css"
          ]
        }
      }
    ];
  }

  getPageList() {
    return this.pages;
  }

  getStore(pageName) {
    return _.find(this.getPageList(), { name: pageName }).store;
  }

  getWebPackEntry() {
    let webPackEntry = {};
    this.getPageList().forEach(page => {
      webPackEntry[page.name] = page.entypoint;
    });
    return webPackEntry;
  }
}

module.exports = new PageConfig();
