/**
 * Created by Nan on 2017/10/13.
 */
var app = angular.module("app", ["ui.router"]);

app.config(function ($stateProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    $stateProvider
        .state("homepage", {
            url: "/homepage",
            templateUrl: "./App/View/homepage.html"
        })
});