angular.module('moduleModule', [])
.controller("moduleDisplayController",['$rootScope','$scope',"$state",'$stateParams','ModuleService',
function($rootScope,$scope,$state,$stateParams,ModuleService)
{
	$scope.getDisplayInitData = function()
	{
		
		ModuleService.getModuleById($stateParams.moduleId,sucesscb,errorcb);

		function sucesscb(data)
		{
			$scope.module =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	
	$scope.returnList=function(){
		$state.go('main.list.module.list');
	}
}]);