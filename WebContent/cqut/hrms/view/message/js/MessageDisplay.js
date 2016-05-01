angular.module('messageModule', [])
.controller('messageDisplayController',['$rootScope','$scope','$state','$stateParams','MessageService',
          
    function($rootScope,$scope,$state,$stateParams,MessageService){
	
	$scope.getDisplayInitData=function(){
		
		MessageService.getMessageById($stateParams.messageId,sucesscb,errorcb);	
		
		function sucesscb(data)
		{
			console.log(data);
			$scope.message =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	
	$scope.returnList=function(){
		$state.go('main.list.message.list');
	}
}]);