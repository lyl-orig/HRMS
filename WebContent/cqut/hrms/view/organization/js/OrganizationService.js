var organizationApp = angular.module("organizationApp", []);

organizationApp.factory('OrganizationService',['$resource',function($resource){
	
	var organizationService = $resource('/Organization/:action', {});
	
	organizationService.insertOrganization=function(organization,sucesscb,errorcb){
		
		organizationService.save({action:"insertOrganization"},organization,sucesscb,errorcb);
	}
	
	organizationService.getOrganizations=function(sucesscb,errorcb){
		
		organizationService.query({action:"getOrganizations"},sucesscb,errorcb);
	}
	
	return organizationService;
	
}]);