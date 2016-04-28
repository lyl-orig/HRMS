angular.module('messageModule', [])
.controller('messageFormController',['$rootScope','$scope','$state','$stateParams','MessageService',
          
    function($rootScope,$scope,$state,$stateParams,MessageService){
		
    $scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.saveMessage = function(message){
		if($scope.operate=='add')
		{
		  $scope.addMessage(message);
		  
		}else if($scope.operate=='edit'){
			
			$scope.updateMessage(message);
		}
	}
	
	$scope.addMessage=function(message){
		MessageService.insertMessage(message,sucesscb,errorcb);
		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.message.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.saveAndAddMessage=function(message){
		
		MessageService.insertMessage(message,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.insert){
				$state.go('main.list.message.form',{operate:'add'});
				$scope.message='';
			}else{
				alert('添加失败!');
			}
			
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.returnList=function(){
		$state.go('main.list.message.list');
	}
}]);