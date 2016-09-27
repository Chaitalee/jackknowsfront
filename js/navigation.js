// var adminurl = "http://blazen.io/";
var adminurl = "http://jacknows.wohlig.com/";

// var adminurl = "http://localhost/";
// var adminurl = "http://chaitalee.com/";
// var imgurl = "http://localhost:81/upload/";
// var adminurl = "http://146.148.4.222/";
var imgurl = "http://jacknows.wohlig.com/upload/";
var imgpath = adminurl + "upload/readFile";
var uploadurl = adminurl + "upload/";
// var adminurl = "http://pantherworldadmin.jaipurpinkpanthers.com/";
// var imgurl = "http://pantherworldadmin.jaipurpinkpanthers.com/upload/";
// var imgpath = imgurl + "readFile";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Users",
        classis: "active",
        link: "#/page/userView",
        subnav: []
    }, {
        name: "Category",
        classis: "active",
        link: "#/page/viewCategory",
        subnav: []
    }, {
        name: "Newsletter",
        classis: "active",
        link: "#/page/viewNewsletter",
        subnav: []
    }, {
        name: "Contact",
        classis: "active",
        link: "#/page/viewContact",
        subnav: []
    }, {
        name: "Testimonial",
        classis: "active",
        link: "#/page/viewTestimonial",
        subnav: []
    }, {
        name: "Notification",
        classis: "active",
        link: "#/page/viewNotification",
        subnav: []
    }, {
        name: "Booking",
        classis: "active",
        link: "#/page/viewBooking",
        subnav: []
    }, {
        name: "All Experts",
        classis: "active",
        link: "#/page/viewExpert",
        subnav: []
    },{
        name: "Approved Experts",
        classis: "active",
        link: "#/page/viewExpertApproved",
        subnav: []
    },{
        name: "Unapproved Experts",
        classis: "active",
        link: "#/page/viewExpertUnapproved",
        subnav: []
    }, {
        name: "Need Help",
        classis: "active",
        link: "#/page/viewNeedHelp",
        subnav: []
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        saveApi: function(data, apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName, data).success(successCallback).error(errorCallback);
        },
        deleteProject: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "project/delete", data).success(successCallback).error(errorCallback);
        },
        findProjects: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        findOneProject: function(apiName, urlParams, successCallback, errorCallback) {
            console.log(adminurl + apiName);
            $http.post(adminurl + apiName, urlParams).success(successCallback).error(errorCallback);
        },
        sideMenu1: function(apiName, pagination, successCallback, errorCallback) {
            $http.post(adminurl + apiName, pagination).success(successCallback).error(errorCallback);
        },
        submitLogin: function(data, successCallback, errorCallback) {
            $http.post(adminurl + "register/login", data).success(successCallback).error(errorCallback);
        },
        deleteApi: function(data, successCallback, errorCallback) {
            $http.post(adminURL + "api/delete", data).success(successCallback).error(errorCallback);
        },
        logout: function(successCallback, errorCallback) {
            $http.post(adminurl + "register/logout").success(successCallback).error(errorCallback);
        },
        getDropDown: function(apiName, successCallback, errorCallback) {
            $http.post(adminurl + apiName).success(successCallback).error(errorCallback);
        },

    };
});
