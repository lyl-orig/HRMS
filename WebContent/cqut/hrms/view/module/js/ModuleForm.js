angular.module('moduleModule', [])
.controller('moduleFormController',['$rootScope','$scope','ModuleService','$state','$stateParams',
function($rootScope,$scope,ModuleService,$state,$stateParams){

	$scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	$scope.moduleId = $stateParams.moduleId;
	
	$scope.getModuleData=function(){
		if($scope.operate=='edit'){
			$scope.getModuleDetail();
		}
	}
	$scope.getModuleDetail=function(){
		
		ModuleService.getModuleById($scope.moduleId,sucesscb,errorcb);

		function sucesscb(data)
		{
			$scope.module =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	
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
			if(data.insert){
				$state.go('main.list.module.list');
			}else{
				alert('添加失败!');
			}	
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.updateModule=function(module){
		//alert($scope.module.EId);
		ModuleService.updateModule(module,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.update){
				$state.go('main.list.module.list');
			}else{
				alert('保存失败');
			}	
		}
		function errorcb()
		{
			alert('保存失败!');
		}
	}
	
	//保存并新增
	$scope.saveAndAddModule = function(module){
		
		ModuleService.insertModule(module,sucesscb,errorcb);

		function sucesscb(data)
		{
			if(data.insert){
				$scope.module='';
				$state.go('main.list.module.form',{operate:'add'});
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
		
		$state.go('main.list.module.list');
	}
}]);