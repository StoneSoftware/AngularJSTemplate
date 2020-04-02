(function () {
    'use strict';
    var amberApplication = angular.module('amberModule', ['ui.router', 'HttpInterceptorModule']);
    amberApplication.controller('signinCtrl', function ($scope) {
        $scope.test = 'angularjs环境部署成功';

    });
})();
