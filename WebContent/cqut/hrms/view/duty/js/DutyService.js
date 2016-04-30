var  dutyApp=angular.module('dutyApp', []);

dutyApp.factory('DutyService',['$resource',function($resource){
	
	var dutyService = $resource('/Duty/:action',{});
	
	dutyService.insertDuty=function(duty,sucesscb,errorcb){
		dutyService.save({action:'insertDuty'},duty,sucesscb,errorcb);
	}
	
	dutyService.getAllDutys=function(sucesscb,errorcb){
		dutyService.query({action:'getAllDutys'},sucesscb,errorcb);
	}
	
	dutyService.getDutyById=function(id,sucesscb,errorcb){
		
		dutyService.save({action:'getDutyById'},id,sucesscb,errorcb);
	}
	dutyService.updateDuty=function(duty,sucesscb,errorcb){
		
		dutyService.save({action:'updateDuty'},duty,sucesscb,errorcb);
	}
	
	dutyService.deleteDuty=function(dutyId,sucesscb,errorcb){
		
		dutyService.save({action:'deleteDuty'},dutyId,sucesscb,errorcb);
	}
	
	 dutyService.getDutyByName=function(name,sucesscb,errorcb){
			
			dutyService.save({action:'getDutyByName'},name,sucesscb,errorcb);
		}
	return dutyService;
}]);