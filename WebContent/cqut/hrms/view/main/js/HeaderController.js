define(['app'], function (app) 
{
	app.controller('HeaderController',['$rootScope','$state','$scope','LoginService',
	function($rootScope,$state,$scope,LoginService){
		
		var loginer=JSON.parse(sessionStorage.getItem("loginer"));
		//console.log(loginer.name);
		$scope.name=loginer.name;
		
		//退出登录
		$scope.loginOut = function()
		{
		  $state.go("login");
		}
	}]);
});