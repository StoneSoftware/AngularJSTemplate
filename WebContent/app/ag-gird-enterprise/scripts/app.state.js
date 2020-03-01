(function () {
    'use strict';
    var routerApp = angular.module('gridApp');
    routerApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //config router
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'html/home.html',
                controller: 'homeCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'html/login.html',
                controller: 'loginCtrl'
            });
    }]);
})();

