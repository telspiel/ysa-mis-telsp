/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"login": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/layouts/login/index.js","common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/layouts/login/styles.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader!./src/layouts/login/styles.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".otp-wrapper {\\n\\ttext-align: center;\\n\\tmargin-top: 30px;\\n}\\n.otp-container {\\n\\tdisplay: inline-block;\\n}\\n.otp-number-input {\\n  width: 26px;\\n  height: 33px;\\n  margin: 0 2px;\\n  border: none;\\n  border-bottom: 2px solid rgba(0, 0, 0, 0.2);\\n  padding: 0;\\n  color: rgba(0, 0, 0, 0.7);\\n  margin-bottom: 0;\\n  padding-bottom: 0;\\n  font-size: 30px;\\n  box-shadow: none;\\n  text-align: center;\\n  background-color: none;\\n  font-weight: 600;\\n  border-radius: 0;\\n  outline: 0;\\n  transition: border 0.3s ease;\\n}\\n.otp-number-input:focus {\\n  border-color: rgba(0, 0, 0, 0.5);\\n}\\n.otp-number-input.otp-filled-active {\\n  border-color: #00bb09;\\n}\\n\\n.otp-submit {\\n\\tbackground: #42b549;\\n\\tborder: 0;\\n\\tcolor: #fff;\\n\\tmargin-top: 30px;\\n\\tpadding: 10px 15px;\\n\\tfont-size: 14px;\\n\\tborder-radius: 3px;\\n\\tletter-spacing: 1px;\\n\\tfont-weight: 500;\\n\\tcursor: pointer;\\n\\t\\n}\\n.otp-submit[disabled] {\\n  opacity: 0.6;\\n  cursor: default;\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/layouts/login/styles.css?./node_modules/css-loader");

/***/ }),

/***/ "./src/layouts/login/index.js":
/*!************************************!*\
  !*** ./src/layouts/login/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../scripts/app */ \"./src/scripts/app.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/layouts/login/styles.css\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../scripts/user */ \"./src/scripts/user.js\");\n/* harmony import */ var _scripts_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../scripts/request */ \"./src/scripts/request.js\");\n/* harmony import */ var _config_endpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../config/endpoints */ \"./config/endpoints.js\");\n/* harmony import */ var _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../scripts/cookie */ \"./src/scripts/cookie.js\");\n\n\n\n\n\n\n\n\nconsole.log(\"Welcome to login!\");\n\n_scripts_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].logout();\n\n$(function () {\n\n  $(\"#userId\").val(_scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"MISWPKEY\"));\n  $(\"#userPass\").val(_scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"MISWPVAL\"));\n  if (_scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"MISWPKEY\") && _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"MISWPVAL\")) {\n    $(\"#rememberMe\").prop(\"checked\", true);\n  }\n\n  $(\"#login-form\").submit(function (e) {\n    e.preventDefault();\n    const params = {\n      username: this[0].value,\n      password: this[1].value\n    };\n\n    if (params.username && params.password) {\n      Object(_scripts_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"login\"), \"POST\", params).done(data => {\n        console.log(data);\n        if (_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].validateResponse(data)) {\n          if (data.otpRequired) {\n            $(\".otp-wrapper\").removeClass('d-none');\n            $(\".user-verify-btn\").addClass('d-none');\n            $(\".form-group\").addClass('d-none');\n            $(\".toggle-password\").addClass('d-none');\n            $(\".fxt-checkbox-area\").addClass('d-none');\n          } else {\n            proceedWithLoggedinuser(data, params);\n          }\n        }\n      });\n    } else {\n      alert(\"Enter both username and password!\");\n    }\n  });\n});\n\n$(\".otp-submit\").on('click', function (e) {\n  e.preventDefault();\n  const params = {\n    username: $(\"#userId\").val(),\n    password: $(\"#userPass\").val(),\n    userOtp: otpCodeTemp\n  };\n\n  Object(_scripts_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"verifyOtp\"), \"POST\", params).done(data => {\n    if (_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].validateResponse(data)) {\n      if (data.code == 1000) {\n        proceedWithLoggedinuser(data, params);\n      } else {\n        alert(\"Invalid OTP\");\n      }\n    } else {\n\n      $('.otp-number-input').val('');\n    }\n  });\n});\n\n$(\"#resend-otp\").on('click', function () {\n  const params = {\n    username: $(\"#userId\").val(),\n    password: $(\"#userPass\").val()\n  };\n\n  if (params.username && params.password) {\n    Object(_scripts_request__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"login\"), \"POST\", params).done(data => {\n      if (_config_endpoints__WEBPACK_IMPORTED_MODULE_4__[\"default\"].validateResponse(data)) {\n        $('.otp-number-input').val('');\n      }\n    });\n  } else {\n    alert(\"Enter both username and password!\");\n  }\n});\n\nfunction proceedWithLoggedinuser(data, params) {\n  console.log(\"proceedWithLoggedinuser\");\n  let userData = data.data;\n  let visual = true;\n  if (userData.isVisualizeAllowed == \"Y\") {\n    visual = true;\n  } else {\n    visual = false;\n  }\n\n  let rememberMe = $('#rememberMe').is(\":checked\");\n  if (rememberMe) {\n    _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"MISWPKEY\", params.username);\n    _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"MISWPVAL\", params.password);\n  } else {\n    _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].del(\"MISWPKEY\");\n    _scripts_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].del(\"MISWPVAL\");\n  }\n\n  _scripts_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].setName(userData.username).setToken(userData.authToken).setLastLoginTime(userData.lastLoginTime).setLastLoginIp(userData.lastLoginIp).setUserPrivilage(userData.userPrivileges).setJWTToken(data.authJwtToken).login(userData);\n  _scripts_user__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateTokenExpiry();\n}\n\n/* Secure Password Field */\nwindow.onload = function () {\n  init();\n};\nfunction init() {\n  var x = document.getElementsByTagName(\"input\")[\"Password\"];\n  var style = window.getComputedStyle(x);\n  console.log(style);\n\n  if (style.webkitTextSecurity) {} else {\n    x.setAttribute(\"type\", \"password\");\n  }\n}\n/* CodeEnds Herer */\n\n/* OTP style code here */\nvar otpCodeTemp = \"\";\n$(document).ready(function () {\n  $('.otp-event').each(function () {\n    var $input = $(this).find('.otp-number-input');\n    var $submit = $(this).find('.otp-submit');\n    $input.keydown(function (ev) {\n      var otp_val = $(this).val();\n      if (ev.keyCode == 37) {\n        $(this).prev().focus();\n        ev.preventDefault();\n      } else if (ev.keyCode == 39) {\n        $(this).next().focus();\n        ev.preventDefault();\n      } else if (otp_val.length == 1 && ev.keyCode != 8 && ev.keyCode != 46) {\n        var otp_next_number = $(this).next();\n        if (otp_next_number.length == 1 && otp_next_number.val().length == 0) {\n          otp_next_number.focus();\n        }\n      } else if (otp_val.length == 0 && ev.keyCode == 8) {\n        $(this).prev().val(\"\");\n        $(this).prev().focus();\n      } else if (otp_val.length == 1 && ev.keyCode == 8) {\n        $(this).val(\"\");\n      } else if (otp_val.length == 0 && ev.keyCode == 46) {\n        next_input = $(this).next();\n        next_input.val(\"\");\n        while (next_input.next().length > 0) {\n          next_input.val(next_input.next().val());\n          next_input = next_input.next();\n          if (next_input.next().length == 0) {\n            next_input.val(\"\");\n            break;\n          }\n        }\n      }\n    }).focus(function () {\n      $(this).select();\n      var otp_val = $(this).prev().val();\n      if (otp_val === \"\") {\n        $(this).prev().focus();\n      } else if ($(this).next().val()) {\n        $(this).next().focus();\n      }\n    }).keyup(function (ev) {\n      otpCodeTemp = \"\";\n      $input.each(function (i) {\n        if ($(this).val().length != 0) {\n          $(this).addClass('otp-filled-active');\n        } else {\n          $(this).removeClass('otp-filled-active');\n        }\n        otpCodeTemp += $(this).val();\n      });\n      if ($(this).val().length == 1 && ev.keyCode != 37 && ev.keyCode != 39) {\n        $(this).next().focus();\n        ev.preventDefault();\n      }\n      $input.each(function (i) {\n        if ($(this).val() != '') {\n          $submit.prop('disabled', false);\n        } else {\n          $submit.prop('disabled', true);\n        }\n      });\n    });\n    $input.on(\"cut copy paste\", function (e) {\n      e.preventDefault();\n    });\n  });\n});\n\n/* Code Ends here */\n\n//# sourceURL=webpack:///./src/layouts/login/index.js?");

/***/ }),

/***/ "./src/layouts/login/styles.css":
/*!**************************************!*\
  !*** ./src/layouts/login/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!./styles.css */ \"./node_modules/css-loader/index.js!./src/layouts/login/styles.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/layouts/login/styles.css?");

/***/ })

/******/ });