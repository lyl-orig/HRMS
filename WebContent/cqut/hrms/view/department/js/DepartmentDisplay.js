angular.module('departmentModule', [])
.controller("departmentDisplayController",['$rootScope','$scope',"$state",'$stateParams','DepartmentService',
function($rootScope,$scope,$state,$stateParams,DepartmentService)
{
	$scope.getDisplayInitData = function()
	{
		
		DepartmentService.getDepartmentById($stateParams.departmentId,sucesscb,errorcb);

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