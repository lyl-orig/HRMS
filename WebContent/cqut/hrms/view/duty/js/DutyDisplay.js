angular.module('dutyodule', [])
.controller('dutyDisplayController',['$rootScope','$scope','$state','$stateParams','DutyService',
          
    function($rootScope,$scope,$state,$stateParams,DutyService){
	
	$scope.getDisplayInitData=function(){
		
		DutyService.getDutyById($stateParams.dutyId,sucesscb,errorcb);	
		
		function sucesscb(data)
		{
			$scope.duty =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	$scope.returnList=function(){
		$state.go('main.list.duty.list');
	}
}]);