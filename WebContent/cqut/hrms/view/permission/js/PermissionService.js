var permissionApp = angular.module("permissionApp", []);

permissionApp.factory("PermissionService",['$resource',function($resource){
	
	var permissionService = $resource('/Permission/:action', {});
	
	permissionService.insertPermission=function(permission,sucesscb,errorcb){
		
		permissionService.save({action:"insertPermission"},permission,sucesscb,errorcb);
	}
	
	permissionService.updatePermission=function(permission,sucesscb,errorcb){
		
		permissionService.save({action:"updatePermission"},permission,sucesscb,errorcb);
	}
	
	permissionService.deletePermission=function(permissionId,sucesscb,errorcb){
		
		permissionService.save({action:"deletePermission"},permissionId,sucesscb,errorcb);
	}
	
	permissionService.getAllPermissions=function(sucesscb,errorcb){
		
		permissionService.query({action:"getAllPermissions"},sucesscb,errorcb);
	
	}
	
	permissionService.getPermissionById=function(permissionId,sucesscb,errorcb){
		
		permissionService.save({action:"getPermissionById"},permissionId,sucesscb,errorcb);
	
	}
	
	return permissionService;
	
}]);