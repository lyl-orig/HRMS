var employeeApp = angular.module("employeeApp", []);

employeeApp.factory('EmployeeService',['$resource',function($resource){
	
	var employeeService = $resource('/Employee/:action', {});
	
	employeeService.insertEmployee=function(employee,sucesscb,errorcb){
		
		employeeService.save({action:"insertEmployee"},employee,sucesscb,errorcb);
	}
	
	employeeService.getEmployeeByPermissionId=function(permissionId,sucesscb,errorcb){
		
		employeeService.save({action:"getEmployeeByPermissionId"},permissionId,sucesscb,errorcb);
	}
	
	employeeService.getEmployee=function(sucesscb,errorcb){
		
		employeeService.query({action:"getEmployee"},sucesscb,errorcb);
	}
	
	employeeService.getEmployeeByDepartmentId=function(departmentId,sucesscb,errorcb){
		
		employeeService.save({action:"getEmployeeByDepartmentId"},departmentId,sucesscb,errorcb);
	}
	
	employeeService.getEmployeeByName=function(name,sucesscb,errorcb){
		
		employeeService.save({action:"getEmployeeByName"},name,sucesscb,errorcb);
	}
	
	employeeService.getEmployeeByDepartmentIdAndName=function(departmentId,name,sucesscb,errorcb){
		
		employeeService.save({action:"getEmployeeByDepartmentIdAndName"},{departmentId:departmentId,name:name},sucesscb,errorcb);
	}
	
	return employeeService;
	
}]);