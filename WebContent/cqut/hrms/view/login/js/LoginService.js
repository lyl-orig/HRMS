var loginApp = angular.module("loginApp",[]);
loginApp.factory('LoginService',['$resource', function($resource) 
{
	var loginService = $resource('/Login/:action', {});
	
	loginService.login=function(name,password,sucesscb,errorcb)
	{
		loginService.save({action:"loginCheck"},{name:name,password:password},sucesscb,errorcb);
	};
	
	return loginService;
}]);

