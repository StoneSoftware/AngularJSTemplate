(function () {
    'use strict';
    var routerApp = angular.module('amberModule');
    routerApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //config router
        $urlRouterProvider.otherwise('/signin');
        $stateProvider
            .state('signin', {
                url: '/signin',
                templateUrl: 'html/signin/signin.html',
                controller: 'signinCtrl'
            });
    }]);
})();

