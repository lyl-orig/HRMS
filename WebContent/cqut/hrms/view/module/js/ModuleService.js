var moduleApp = angular.module('moduleApp', []);

moduleApp.factory('ModuleService',['$resource',function($resource){
	
	var moduleService = $resource('/Module/:action',{});
	
	moduleService.insertModule = function(module,sucesscb,errorcb){
		
		moduleService.save({action:'insertModule'},module,sucesscb,errorcb);
	}
	
	moduleService.updateModule = function(module,sucesscb,errorcb){
		
		moduleService.save({action:'updateModule'},module,sucesscb,errorcb);
	}
	
	moduleService.deleteModule = function(module,sucesscb,errorcb){
		
		moduleService.save({action:'deleteModule'},module,sucesscb,errorcb);
	}
	
	moduleService.getModules = function(sucesscb,errorcb){
		
		moduleService.query({action:'getModules'},sucesscb,errorcb);
	}
	
	return moduleService;
}]);