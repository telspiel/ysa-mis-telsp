import Loader from "./loader";
import Cookie from "./cookie";
import User from ".//user";

export default (Request = (url, method, data, options = {}) => {
  if (typeof url !== "string") {
    return false;
  }

  var tokenExpiry = Date.parse(Cookie.get("tokenMisExpiry"));
  var currentDate = new Date();
  if (currentDate < tokenExpiry) {
    User.updateTokenExpiry();
  } else {
    if (Cookie.get("tokenMis")) {
      User.logout();
      window.location.href = "/login"
    }
  }

  options.showMainLoader && Loader.showMainLoader();
  return $.ajax(
    $.extend(
      {},
      {
        url: url,
        method: method || "POST",
        data: typeof data === "object" && JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        cache: false,
        headers: {
          "Authorization": Cookie.get("misJWT")
        },
        statusCode: {
          401: function(xhr) {
            // if(window.console) console.log(xhr.responseText);
            User.logout();
            window.location.href = "/login"
          }
        }
      },
      options
    )
  )
    .done((data, textStatus, jqXHR) => {
      window.app.requests.push({
        success: true,
        response: data,
        xhr: jqXHR
      });
    })
    .fail((jqXHR, textStatus, errorThrown) => {
      window.app.requests.push({
        success: false,
        response: errorThrown,
        xhr: jqXHR
      });
    })
    .always(() => {
      Loader.hideMainLoader();
    });
});
