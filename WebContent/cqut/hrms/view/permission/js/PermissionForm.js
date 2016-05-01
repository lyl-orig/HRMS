angular.module('permissionModule', [])
.controller('permissionFormController',['$rootScope','$scope','PermissionService','$state','$stateParams',
function($rootScope,$scope,PermissionService,$state,$stateParams){

	$scope.level=[{'id':1,'name':'系统管理员'},
	              {'id':2,'name':'部门管理员'},
	              {'id':3,'name':'领导级别'}];
	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.getInitData=function(){
		if($scope.operate=='edit'){
			$scope.getDetail();
		}
	}
	$scope.getDetail=function(){

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
	$scope.savePermission = function(permission){
		
		console.log(permission);
		if($scope.operate=='add')
		{
			$scope.addPermission(permission);
		}
		else if($scope.operate=='edit')
		{
			$scope.updatePermission(permission);
		}
	}
	
	
	$scope.addPermission = function(permission)
	{   
		PermissionService.insertPermission(permission,sucesscb,errorcb);

		function sucesscb(data)
		{
			$state.go('main.list.permission.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}

	$scope.updatePermission=function(permission){
		
		PermissionService.updatePermission(permission,sucesscb,errorcb);

		function sucesscb(data)
		{
			$state.go('main.list.permission.list');
		}
		function errorcb()
		{
			alert('失败!');
		}
	}
	//保存并新增
	$scope.saveAndAddPermission = function(permission){
		
		PermissionService.insertPermission(permission,sucesscb,errorcb);

		function sucesscb(data)
		{
			if(data.insert){
				$scope.permission='';
				$state.go('main.list.permission.form',{operate:'add'});
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
		
		$state.go('main.list.permission.list');
	}
}]);