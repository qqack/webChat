(function () {
	var app = angular.module('webChat', ['ngRoute']);
	 // 路由
    app.config(function($routeProvider){
        $routeProvider.
        when('/login', {
            controller: 'loginController',
            templateUrl: 'view/login.html'
        }).
        when('/main', {
            controller: 'mainController',
            templateUrl: 'view/main.html'
        }).
        otherwise({
            redirectTo: '/main'
        });
    });
    //登录控制器
    // app.controller("loginController", function($scope, $location) {
    //     $scope.login = function(){
    //     	if($scope.username){
    // 			$location.path("/main");
    // 		}
    //     };
    // });
    //主页面控制器
    // app.controller("mainController", function($scope, $location) {
    // });
})();