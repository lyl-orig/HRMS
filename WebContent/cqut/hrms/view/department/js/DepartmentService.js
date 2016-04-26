var departmentApp = angular.module("departmentApp",[]);

departmentApp.factory('DepartmentService',['$resource',function($resource){
	
	var departmentService = $resource('/Department/:action',{});
	
	departmentService.insertDepartment= function(department,sucesscb,errorcb){
		
		departmentService.save({action:'insertDepartment'},department,sucesscb,errorcb);
	}
	
	departmentService.updateDepartment = function(department,sucesscb,errorcb){
		
		departmentService.save({action:'updateDepartment'},department,sucesscb,errorcb);
	}
	
	departmentService.deleteDepartment = function(department,sucesscb,errorcb){
		
		departmentService.save({action:'deleteDepartment'},department,sucesscb,errorcb);
	}
	
	departmentService.getAllDepartments = function(sucesscb,errorcb){
		
		departmentService.query({action:'getAllDepartments'},sucesscb,errorcb);	
	}
	
	departmentService.getDepartmentsByName = function(name,sucesscb,errorcb){
		
		departmentService.query({action:'getDepartmentsByName',name:name},sucesscb,errorcb);
	}
	
	departmentService.getDepartmentsByOrgaId = function(organizationId,sucesscb,errorcb){
		
		departmentService.query({action:'getDepartmentsByOrgaId',organizationId:organizationId},sucesscb,errorcb);
	}
	
	departmentService.getDepartmentsByOrgaIdAndName = function(organizationId,name,sucesscb,errorcb){
		
		departmentService.get({action:'getDepartmentsByOrgaIdAndName',organizationId:organizationId,name:name},sucesscb,errorcb);
	}
	return departmentService;
}]);