class Endpoints {
  constructor() {
    // this.serverAddress = "http://142.93.215.255:2081/gui-services";
    //  this.serverAddress = "https://backend3.telsp.in/gui-services";
    this.serverAddress = "https://backend3.quicksmart.in/gui-services";
    //this.serverAddress = "https://uatbackend3.gmstool.com/gui-services";
    this.endpoints = {
      login: "user/login",
      dashboard: "mis/dashboard",
      verifyOtp: "user/verifyotp",
      detailedMis: "mis/detailedMis",
      adminDashboard: "mis/adminDashboard",
      summaryReport: "reportService/summaryReport",
      senderidReport: "reportService/senderIdWiseReport",
      detailedReport: "mis/reportService/detailedReport",
      downloadReport: "mis/viewGeneratedReports",
      generateReport: "/mis/generateReport",
      getAllSenderIdList: "/senderIdService/viewAllSenderIdList",
      getHourlyReport: "reportService/getHourlySummaryReport",
      creditHistory: "/creditService/getCreditHistory",
      updatedPassword: "/userProfile/updatedPassword",
      profileDetails: "/userProfile/userProfileDetails",
      campaignReport: "/reportService/campaignReport",
      detailedAnalysis: "/reportService/detailedAnalytics",
      clickerAnalysis: "/reportService/clickerAnalytics",
      addSenderId: "/senderIdService/addSenderId",
      addBulkSenderId:"/senderIdService/addBulkSenderId1",
      deleteSenderId: "/senderIdService/deleteSenderId",
      getActiveSenderIdList: "/senderIdService/viewSenderIdList",
      saveTemplate: "/contentTemplateService/saveContentTemplate",
      viewAllTemplates: "/contentTemplateService/viewAllContentTemplateList",
      deleteContentTemplate: "/contentTemplateService/deleteContentTemplate",
      searchTemplate: "/contentTemplateService/searchContentTemplate",
      getAllChildsForUser: "/staticService/getAllChildsForUser",
      viewSenderIdListByMessageType: "/senderIdService/viewSenderIdListByMessageType",
      senderIdListByMessageType: '/senderIdService/viewSenderIdListByMessageType',
      dltDataFile: "/uploadDltDataFile",
      viewAllContentTemplateListByMessageType: "/contentTemplateService/viewAllContentTemplateListByMessageType",
      senderIdListByMessageType: '/senderIdService/viewSenderIdListByMessageType',
      getAllBlacklistNumbersForUser: '/userBlackListService/getAllBlacklistNumbersForUser',
      addNumberInUserBlackList: '/userBlackListService/addNumberInUserBlackList',
      removeNumberFromUserBlackList: '/userBlackListService/removeNumberFromUserBlackList',
      searchUserBlacklistNumber: '/userBlackListService/searchUserBlacklistNumber',
      uploadBlacklist: "/userBlackListService/uploadUserBlackListNumberFile",
      getAllEntityIdForSenderIdType: "/senderIdService/getAllEntityIdForSenderIdType",
      detailedAnalysisReport : "/reportService/clickerReportForMis"
    };
  }

  get(name) {
    return `${this.serverAddress}/${this.endpoints[name]}`;
  }

  validateResponse(data) {
    if (data && typeof data === "object" && data.constructor === Object) {
      switch (data.code) {
        case 1000:
          return data;
        case 1001:
          window.location.pathname !== "/login"
            ? (window.location.href = "/login")
            : alert(data.message || "Login failed. Please try again!");
          return false;
        default:
          return data;
      }
    } else {
      alert("Something went wrong. Please try again!");
      return false;
    }
  }
}

export default new Endpoints();
