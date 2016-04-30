angular.module('nodeModule', [])
.controller("nodeDisplayController",['$rootScope','$scope',"$state",'$stateParams','NodeService',
function($rootScope,$scope,$state,$stateParams,NodeService)
{
	$scope.getDisplayInitData = function()
	{
		
		NodeService.getNodeById($stateParams.nodeId,sucesscb,errorcb);

		function sucesscb(data)
		{
			$scope.node =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	
	$scope.returnList=function(){
		$state.go('main.list.node.list');
	}
}]);