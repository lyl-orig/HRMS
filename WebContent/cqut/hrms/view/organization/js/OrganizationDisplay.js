angular.module('organizationModule', [])
.controller('organizationDisplayController',['$rootScope','$scope','$state','$stateParams','OrganizationService',
          
    function($rootScope,$scope,$state,$stateParams,OrganizationService){
	
	$scope.getDisplayInitData=function(){
		OrganizationService.getOrganizationById($stateParams.organizationId,sucesscb,errorcb);
		
		function sucesscb(data)
		{
			$scope.organization =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	$scope.returnList=function(){
		$state.go('main.list.organization.list');
	}
}]);