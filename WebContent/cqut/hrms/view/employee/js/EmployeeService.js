var employeeApp = angular.module("employeeApp", []);

employeeApp.factory('EmployeeService',['$resource',function($resource){
	
	var employeeService = $resource('/Employee/:action', {});
	
	employeeService.insertEmployee=function(employee,sucesscb,errorcb){
		
		employeeService.save({action:"insertEmployee"},employee,sucesscb,errorcb);
	}
	
	return employeeService;
	
}]);