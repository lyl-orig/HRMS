define(['app'], function (app) 
{
	app.controller('HeaderController',['$rootScope','$state','$scope','LoginService','ModuleService','NodeService',
	function($rootScope,$state,$scope,LoginService,ModuleService,NodeService){
		
		 ModuleService.getModules(sucesscb,errorcb);
		 function sucesscb(data)
		 {
			 $scope.modules=data;
		 }
		 function errorcb(){
			 alert("系统列表加载失败");
		 }
		 $scope.isSelected = 0;
		
		 $scope.loadSystem=function(systemModuleId,index){
			 //alert(systemModuleId);
			 $rootScope.nodes=[
			               {name:'个人信息',mapurl:'main.list.employee.list'},
			               ]
			/* NodeService.getNodesByModuleId(systemModuleId,sucesscb,errorcb);
			 
			 function sucesscb(data){
				 
				 $rootScope.nodes=data;
			 }
			 function errorcb(){
				 alert("加载失败");
			 }*/
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