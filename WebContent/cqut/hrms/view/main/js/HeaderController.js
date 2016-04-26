define(['app'], function (app) 
{
	app.controller('HeaderController',['$rootScope','$state','$scope','LoginService','ModuleService',
	function($rootScope,$state,$scope,LoginService,ModuleService){
		
		 ModuleService.getModules(sucesscb,errorcb);
		 function sucesscb(data)
		 {
			 console.log(data);
			 $scope.modules=data;
		 }
		 function errorcb(){
			 alert("系统列表加载失败");
		 }
		 $scope.isSelected = 0;
		
		 $scope.loadSystem=function(systemModuleId,index){
			 $scope.isSelected=index;
			 alert(systemModuleId+","+index)
		 }
		var loginer=JSON.parse(sessionStorage.getItem("loginer"));
		$scope.name=loginer.name;
		
		//退出登录
		$scope.loginOut = function()
		{
		  $state.go("login");
		}
	}]);
});