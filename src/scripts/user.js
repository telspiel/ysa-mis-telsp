import Cookie from "./cookie";

class User {
  constructor() {
    this.name = Cookie.get("misUser");
    this.token = Cookie.get("tokenMis");
    this.lastLoginTime = Cookie.get("lastLoginTime");
    this.lastLoginIp= Cookie.get("lastLoginIp");
    this.userPrivilage= Cookie.get("misUserPrivilage");
    this.userId = Cookie.get("misUserId");
    this.jwtToken = Cookie.get("misJWT");
  }

  getName() {
    return this.name;
  }
  getUserId() {
    return this.userId;
  }
  getToken() {
    return this.token;
  }
  getLastLoginTime(){
    return this.lastLoginTime;
  }
  getLastLoginIp(){
    return this.lastLoginIp;
  }
  getUserPrivilage(){
    return this.userPrivilage;
  }
  getJWTToken() {
    return this.jwtToken;
  }
  setLastLoginTime(lastLoginTime){
    this.lastLoginTime = lastLoginTime;
    Cookie.set("lastLoginTime", lastLoginTime, 7);
    return this;
  }
  setUserId(id) {
    this.userId = id;
    Cookie.set("misUserId", id, 7);
    return this;
  }
  setLastLoginIp(lastLoginIp){
    this.lastLoginIp = lastLoginIp;
    Cookie.set("lastLoginIp", lastLoginIp, 7);
    return this;
  }
  setName(name) {
    this.name = name;
    Cookie.set("misUser", name, 7);
    return this;
  }
  setJWTToken(jwt) {
    this.jwtToken = jwt;
    Cookie.set("misJWT", jwt, 7);
    return this;
  }
  setToken(token) {
    this.token = token;
    Cookie.set("tokenMis", token, 7);
    return this;
  }
  setUserPrivilage(userPrivilage){
    this.userPrivilage = userPrivilage;
    Cookie.set("misUserPrivilage", userPrivilage, 7);
    return this;
  }
  updateTokenExpiry() {
    var dt = new Date();
    dt.setTime(dt.getTime() + 10 * 60 * 1000);
    // expirt time set to 30 seconds
    Cookie.set("tokenMisExpiry", dt, 7)
  }

  isLoggedIn() {
    return this.getToken() ? true : false;
  }

  login() {

    this.isLoggedIn() &&
      (window.location.href = "/dashboard");
    return this;
  }

  logout() {
    this.name = "";
    this.token = "";
    Cookie.del("misUser");
    Cookie.del("tokenMis");
    Cookie.del("tokenMisExpiry");
    Cookie.del("lastLoginTime");
    Cookie.del("lastLoginIp");
    Cookie.del("misUserPrivilage");
    Cookie.del("misUserId");
    return this;
  }
}

export default new User();
