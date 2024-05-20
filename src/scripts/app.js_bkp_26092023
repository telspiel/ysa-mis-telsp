import "./../styles/app";

import User from "./user";

const loginInfo = require("./../partials/loginInfo.hbs");

console.log("Welcome to app.js!");

if (typeof window === "object") {
  let app = (window.app = window.app || {});
  app.store = {};
  app.requests = [];
}

if (User.getUserPrivilage() == "SHOW_CREDIT_HISTORY") {
  $("#creditHistoryMenu").removeClass("d-none");
}
if (User.getUserPrivilage() == "SHOW_CAMPAIGN_REPORT") {
  $("#campaignReportMenu").removeClass("d-none");
}
$(() => {
  if (User.isLoggedIn()) {
    $("#topNavList").append(
      loginInfo({
        name: User.getName(),
        lastLoginTime: User.getLastLoginTime(),
        lastLoginIp: User.getLastLoginIp(),
      })
    );
  } else {
    console.log("Not logged In");
  }
});

(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s),
    dl = l != "dataLayer" ? "&l=" + l : "";
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
  f.parentNode.insertBefore(j, f);
})(window, document, "script", "dataLayer", "GTM-5VS8M5W");
