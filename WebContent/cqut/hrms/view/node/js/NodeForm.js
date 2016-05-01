angular.module('nodeModule', [])
.controller('nodeFormController',['$rootScope','$scope','$state','$stateParams','NodeService','ModuleService',
          
    function($rootScope,$scope,$state,$stateParams,NodeService,ModuleService){

	//获取全部模块
     ModuleService.getModules(sucesscb,errorcb);
	 function sucesscb(data)
	 {
		 $scope.module=data;
	 }
	 function errorcb(){
		 alert("系统列表加载失败");
	 }
	 
    $scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	//alert($scope.operate+$stateParams.nodeId);
	
	//初始化
	$scope.getInitNode = function(){
		if($scope.operate=='edit'){
			$scope.getNodeDetail();
		}
	}
	$scope.getNodeDetail =function(){
		
		NodeService.getNodeById($stateParams.nodeId,sucesscb,errorcb);
		function sucesscb(data)
		{
			$scope.node=data;
			//console.log(data);
		}
		function errorcb()
		{
			alert('初始化失败!');
		}
		
	}
	$scope.saveNode = function(node){
		if($scope.operate=='add')
		{
		  $scope.addNode(node);	
		}else if($scope.operate=='edit'){
			$scope.updateNode(node);
		}
	}
	
	$scope.addNode=function(node){
		
		NodeService.insertNode(node,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.insert==true){
				$state.go('main.list.node.list');
			}else{
				alert('添加失败!');
			}
			
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.updateNode=function(node)
	{
		NodeService.updateNode(node,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.insert==true){
				$state.go('main.list.node.list');
			}else{
				alert('添加失败!');
			}
			
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.saveAndAddNode = function(node){
		
		NodeService.insertNode(node,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.insert==true){
				$scope.node=''
				$state.go('main.list.node.form',{operate:'add'});
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
		$state.go('main.list.node.list');
	}
}]);