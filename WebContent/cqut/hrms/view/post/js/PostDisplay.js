angular.module('postModule', [])
.controller("postDisplayController",['$rootScope','$scope',"$state",'$stateParams','PostService',
function($rootScope,$scope,$state,$stateParams,PostService)
{
	$scope.getDisplayInitData = function()
	{
		
		PostService.getPostById($stateParams.postId,sucesscb,errorcb);

		function sucesscb(data)
		{
			$scope.post =data;
		};

		function errorcb(data)
		{
			alert('加载失败');
		};
	}
	
	$scope.returnList=function(){
		$state.go('main.list.post.list');
	}
}]);