/// <reference path="../angular.min.js" />

var myApp = angular.module("emtModule", ['ngRoute']);


myApp.config(function ($routeProvider, $locationProvider) {

    $routeProvider.
          when("/Login", { templateUrl: "Scripts/views/Login.html" })
          .when("/Register", { templateUrl: "Scripts/views/Register.html" })
          .otherwise({
              redirectTo: "/Login"
          })
    $locationProvider.html5Mode(true);
})


myApp.controller("loginController", function ($scope) {

    $scope.add = function () {
        $scope.std.push(
            {
                name: $scope.Val.unm,
                pwd: $scope.Val.pwn,

            });
    };

    var std = [
        { name: "yash", pwd: "cs" },
        { name: "yash2", pwd: "it" },
        { name: "yash3", pwd: "sql" },
        { name: "yash3", pwd: "sql" }
    ];
    $scope.std = std;
});

myApp.controller("registerController", function ($scope) {

    $scope.Register = function () {
        window.location = "#/Login";
    }
});
