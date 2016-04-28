var  dutyApp=angular.module('dutyApp', []);

dutyApp.factory('DutyService',['$resource',function($resource){
	
	var dutyService = $resource('/Duty/:action',{});
	
	dutyService.insertDuty=function(duty,sucesscb,errorcb){
		dutyService.save({action:'insertDuty'},duty,sucesscb,errorcb);
	}
	
	dutyService.getAllDutys=function(sucesscb,errorcb){
		dutyService.query({action:'getAllDutys'},sucesscb,errorcb);
	}
	
	return dutyService;
}]);