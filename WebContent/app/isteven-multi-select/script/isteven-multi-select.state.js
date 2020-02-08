(function () {
    'use strict';
    var routerApp = angular.module('app');
    routerApp.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
        //clear cache
        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.Pragma = 'no-cache';

        //config router
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'right': {
                        templateUrl: 'html/right.html',
                        controller: 'rightAreaCtrl'
                    }
                }
            });
    }]);
})();

