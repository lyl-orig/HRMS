var organizationApp = angular.module("organizationApp", []);

organizationApp.factory('OrganizationService',['$resource',function($resource){
	
	var organizationService = $resource('/Organization/:action', {});
	
	organizationService.insertOrganization=function(organization,sucesscb,errorcb){
		
		organizationService.save({action:"insertOrganization"},organization,sucesscb,errorcb);
	}
	
	organizationService.getOrganizations=function(sucesscb,errorcb){
		
		organizationService.query({action:"getOrganizations"},sucesscb,errorcb);
	}
	
	organizationService.getOrganizationById=function(EId,sucesscb,errorcb){
		
		organizationService.save({action:"getOrganizationById"},EId,sucesscb,errorcb);
	}
	
	organizationService.getOrganizationByName=function(name,sucesscb,errorcb){
		
		organizationService.save({action:"getOrganizationByName"},name,sucesscb,errorcb);
	}
	
	organizationService.deleteOrganization=function(EId,sucesscb,errorcb){
		
		organizationService.save({action:"deleteOrganization"},EId,sucesscb,errorcb);
	}
	
	organizationService.updateOrganization=function(organization,sucesscb,errorcb){
		
		organizationService.save({action:"updateOrganization"},organization,sucesscb,errorcb);
	}
	
	return organizationService;
	
}]);