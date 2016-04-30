var moduleApp = angular.module('moduleApp', []);

moduleApp.factory('ModuleService',['$resource',function($resource){
	
	var moduleService = $resource('/Module/:action',{});
	
	moduleService.insertModule = function(module,sucesscb,errorcb){
		
		moduleService.save({action:'insertModule'},module,sucesscb,errorcb);
	}
	
	moduleService.updateModule = function(module,sucesscb,errorcb){
		
		moduleService.save({action:'updateModule'},module,sucesscb,errorcb);
	}
	
	moduleService.deleteModule = function(moduleId,sucesscb,errorcb){
		
		moduleService.save({action:'deleteModule'},moduleId,sucesscb,errorcb);
	}
	
	moduleService.getModules = function(sucesscb,errorcb){
		
		moduleService.query({action:'getModules'},sucesscb,errorcb);
	}
	
	moduleService.getModuleById=function(EId,sucesscb,errorcb){
		
		moduleService.save({action:'getModuleById'},EId,sucesscb,errorcb);
	}
	moduleService.searchModuleByName=function(name,sucesscb,errorcb){
		
		moduleService.save({action:'searchModuleByName'},name,sucesscb,errorcb);
	}
	
	return moduleService;
}]);