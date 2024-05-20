const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const exphbs = require("express-handlebars");
const PageConfig = require("./../config/pages.js");

const app = express();
const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "layouts"),
  partialsDir: path.join(__dirname, "partials")
});

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "./../dist")));
app.use(function (req, res, next) {
  res.header("X-Content-Type-Options", "nosniff");
  res.header("X-Frame-Options", "DENY");
  res.header("X-XSS-Protection", "1; mode=block");
  res.header("X-Powered-By", "IR");
  next();
});

app.engine("hbs", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "layouts"));

app.get("/", function (req, res) {
  res.redirect("/login");
});

app.get("/login", function (req, res) {
  res.render("login/index.hbs", PageConfig.getStore("login"));
});

app.get("/dashboard", function (req, res) {
  res.render("dashboard/index.hbs", PageConfig.getStore("dashboard"));
});

app.get("/detailedMis", function (req, res) {
  res.render("detailedMis/index.hbs", PageConfig.getStore("detailedMis"));
});

app.get("/adminDashboard", function (req, res) {
  res.render("adminDashboard/index.hbs", PageConfig.getStore("adminDashboard"));
});

app.get("/summaryReport", function (req, res) {
  res.render("summaryReport/index.hbs", PageConfig.getStore("summaryReport"));
});

app.get("/senderidReport", function (req, res) {
  res.render("senderidReport/index.hbs", PageConfig.getStore("senderidReport"));
});

app.get("/downloadReport", function (req, res) {
  res.render("downloadReport/index.hbs", PageConfig.getStore("downloadReport"));
});
app.get("/creditHistory", function (req, res) {
  res.render("creditHistory/index.hbs", PageConfig.getStore("creditHistory"));
});
app.get("/user-profile", function (req, res) {
  res.render("user-profile/index.hbs", PageConfig.getStore("user-profile"));
});
app.get("/campaign-report", function (req, res) {
  res.render("campaign-report/index.hbs", {
    ...PageConfig.getStore("campaign-report")
  });
});
app.get("/detailed-analysis", function (req, res) {
  res.render("detailed-analysis/index.hbs", {
    ...PageConfig.getStore("detailed-analysis")
  });
});

app.get("/clicker-analysis", function (req, res) {
  res.render("clicker-analysis/index.hbs", {
    ...PageConfig.getStore("clicker-analysis")
  });
});

app.get("/blacklist", function(req, res) {
  res.render("blacklist/index.hbs", {
    ...PageConfig.getStore("blacklist")
  });
});

app.get("/template-mgmt", function (req, res) {
  res.render("template-mgmt/index.hbs", {
    ...PageConfig.getStore("template-mgmt")
  });
});

app.get("/add-senderid", function (req, res) {
  res.render("add-senderid/index.hbs", {
    ...PageConfig.getStore("add-senderid")
  });
});
app.get("*", function (req, res) {
  res.status(404).send("404 - Not Found!!!");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Genesis listening at http://%s:%s", host, port);
});
