angular.module('organizationModule', [])
.controller('organizationFormController',['$rootScope','$scope','OrganizationService','$state','$stateParams',
function($rootScope,$scope,OrganizationService,$state,$stateParams){

	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.getInitData=function(){
		if($scope.operate=='edit'){
			$scope.getDetail();
		}
	}
	$scope.getDetail=function(){

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
			$state.go('main.list.organization.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}

	$scope.updateOrganization=function(organization){
		
		OrganizationService.updateOrganization(organization,sucesscb,errorcb);

		function sucesscb(data)
		{
			$state.go('main.list.organization.list');
		}
		function errorcb()
		{
			alert('失败!');
		}
	}
	//保存并新增
	$scope.saveAndAddOrganization = function(organization){
		
		OrganizationService.insertOrganization(organization,sucesscb,errorcb);

		function sucesscb(data)
		{
			if(data.insert){
				$scope.organization='';
				$state.go('main.list.organization.form',{operate:'add'});
			}else{
				alert('添加失败!');
			}	
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	
	//返回列表页
	$scope.returnList = function(){
		
		$state.go('main.list.organization.list');
	}
}]);