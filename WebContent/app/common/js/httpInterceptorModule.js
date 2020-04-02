(function () {
    'use strict';
    angular.module('HttpInterceptorModule', []).config(function ($httpProvider) {
        //$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        //$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        //$httpProvider.defaults.headers.Pragma = 'no-cache';
        $httpProvider.interceptors.push('TokenInterceptor');
    })
        .factory('TokenInterceptor', function () {
            return {
                request: function (config) {
                    if (config.url.indexOf("/login") < 0) {
                        config.headers = config.headers || {};
                        config.headers.Authorization = window.localStorage.getItem("token");
                    }
                    return config;
                },
                response: function (response) {
                    var token = response.headers().token;
                    if (token) {
                        window.localStorage.setItem("token", token);
                    }
                    return response;
                },
                responseError: function (errorReason) {
                    console.log(errorReason);
                },
                requestError: function (errorReason) {
                    console.log(errorReason);
                }
            };
        });
})();