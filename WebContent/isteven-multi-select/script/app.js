
//agGrid.LicenseManager.setLicenseKey("");
//agGrid.initialiseAgGridWithAngular1(angular);

var app = angular.module("app", ['ui.router', 'isteven-multi-select']);
app.controller("rightAreaCtrl", function ($scope, $timeout, $state) {
    $scope.test = "angularjs环境部署成功";
    $scope.modernBrowsers = [
        { name: "Opera", maker: "(Opera Software)", ticked: false, selected: true },
        { name: "Internet Explorer", maker: "(Microsoft)", ticked: false },
        { name: "Firefox", maker: "(Mozilla Foundation)", ticked: false },
        { name: "Safari", maker: "(Apple)", ticked: false },
        { name: "Chrome", maker: "(Google)", ticked: false }
    ];
    $scope.outputBrowsers = [
        { name: "Opera", maker: "Opera Software", ticked: true },
        { name: "Firefox", maker: "Mozilla Foundation", ticked: true },
        { name: "Chrome", maker: "Google", ticked: true }
    ];
});

