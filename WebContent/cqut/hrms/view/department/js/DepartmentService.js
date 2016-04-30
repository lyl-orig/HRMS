var departmentApp = angular.module("departmentApp",[]);

departmentApp.factory('DepartmentService',['$resource',function($resource){
	
	var departmentService = $resource('/Department/:action',{});
	
	departmentService.insertDepartment= function(department,sucesscb,errorcb){
		
		departmentService.save({action:'insertDepartment'},department,sucesscb,errorcb);
	}
	
	departmentService.updateDepartment = function(department,sucesscb,errorcb){
		
		departmentService.save({action:'updateDepartment'},department,sucesscb,errorcb);
	}
	
	departmentService.deleteDepartment = function(departmentId,sucesscb,errorcb){
		
		departmentService.save({action:'deleteDepartment'},departmentId,sucesscb,errorcb);
	}
	
	departmentService.getAllDepartments = function(sucesscb,errorcb){
		
		departmentService.query({action:'getAllDepartments'},sucesscb,errorcb);	
	}
	
	departmentService.getDepartmentByName = function(name,sucesscb,errorcb){
		
		departmentService.save({action:'getDepartmentByName'},name,sucesscb,errorcb);
	}
	
	departmentService.getDepartmentByOrgId = function(organizationId,sucesscb,errorcb){
		
		departmentService.save({action:'getDepartmentByOrgId'},{organizationId:organizationId},sucesscb,errorcb);
	}
	
	departmentService.getDepartmentByOrgIdAndName = function(organizationId,name,sucesscb,errorcb){
		
		departmentService.save({action:'getDepartmentByOrgIdAndName'},{organizationId:organizationId,name:name},sucesscb,errorcb);
	}
	
	departmentService.getDepartmentById=function(id,sucesscb,errorcb){
		
		departmentService.save({action:'getDepartmentById'},id,sucesscb,errorcb);
	}
	
	return departmentService;
}]);