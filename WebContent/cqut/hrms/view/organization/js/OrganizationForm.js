angular.module('organizationModule', [])
.controller('organizationFormController',['$rootScope','$scope','OrganizationService','$state','$stateParams',
function($rootScope,$scope,OrganizationService,$state,$stateParams){

	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.saveOrganization = function(organization){
		
		console.log(organization);
		if($scope.operate=='add')
		{
			$scope.addOrganization(organization);
		}
		else if($scope.operate=='edit')
		{
			$scope.updateOrganization(organization);
		}
	}
	
	
	$scope.addOrganization = function(organization)
	{   
		OrganizationService.insertOrganization(organization,sucesscb,errorcb);

		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.organization.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	
	//保存并新增
	$scope.saveAndAddOrganization = function(organization){
		alert('保存并新增!');
	}
	//返回列表页
	$scope.returnList = function(){
		
		$state.go('main.list.organization.list');
	}
}]);