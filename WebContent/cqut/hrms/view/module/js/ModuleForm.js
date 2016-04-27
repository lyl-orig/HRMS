angular.module('moduleModule', [])
.controller('moduleFormController',['$rootScope','$scope','ModuleService','$state','$stateParams',
function($rootScope,$scope,ModuleService,$state,$stateParams){

	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.saveModule = function(module){
	
		if($scope.operate=='add')
		{
			$scope.addModule(module);
		}
		else if($scope.operate=='edit')
		{
			$scope.updateModule(module);
		}
	}
	
	
	$scope.addModule = function(module)
	{   
		ModuleService.insertModule(module,sucesscb,errorcb);

		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.module.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	
	//保存并新增
	$scope.saveAndAddModule = function(module){
		alert('保存并新增!');
	}
	//返回列表页
	$scope.returnList = function(){
		
		$state.go('main.list.module.list');
	}
}]);