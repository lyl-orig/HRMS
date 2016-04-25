angular.module('departmentModule', [])
.controller('departmentFormController',['$rootScope','$scope','$state','$stateParams','DepartmentService',
          
    function($rootScope,$scope,$state,$stateParams,DepartmentService){
	
	$scope.selectItem=function(){
		alert($scope.organization.id);
	  }
    $scope.organization = [{
        id: 1,
        name: '大江工业'
    }];
    
    $scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.saveDepartment = function(department){
		if($scope.operate=='add')
		{
		  $scope.addDepartment(department);	
		}else if($scope.operate=='edit'){
			$scope.updateDepartment(department);
		}
	}
	
	$scope.addDepartment=function(department){
		DepartmentService.insertDepartment(department,sucesscb,errorcb);
		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.department.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
}]);