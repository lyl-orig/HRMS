angular.module('employeeModule', [])
.controller('employeeListController',['$rootScope','$scope','$state','$stateParams','EmployeeService',
function($rootScope,$scope,$state,$stateParams,EmployeeService){
	
	$scope.insertEmployee = function()
	{
		$state.go('main.list.employee.form',{operate:'add'});
	}
	
}]);