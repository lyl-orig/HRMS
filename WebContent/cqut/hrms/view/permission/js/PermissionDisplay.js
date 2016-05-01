angular.module('permissionModule', [])
.controller('permissionDisplayController',['$rootScope','$scope','$state','$stateParams','PermissionService',
          
    function($rootScope,$scope,$state,$stateParams,PermissionService){
	
	$scope.getDisplayInitData=function(){
		
		PermissionService.getPermissionById($stateParams.permissionId,sucesscb,errorcb);
		
		function sucesscb(data)
		{
			$scope.permission =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	$scope.returnList=function(){
		
		$state.go('main.list.permission.list');
	}
}]);