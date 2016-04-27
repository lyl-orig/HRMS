angular.module('postModule', [])
.controller('postFormController',['$rootScope','$scope','$state','$stateParams','DepartmentService','PostService',
          
    function($rootScope,$scope,$state,$stateParams,DepartmentService,PostService){
	

   //加载全部组织机构
     DepartmentService.getAllDepartments(sucesscb,errorcb);
	 
	 function sucesscb(data)
		{
		    $scope.department=data;
		}
		function errorcb()
		{
			alert('获取部门失败!');
		}
			
    $scope.showSaveAndAddButton = $stateParams.operate == 'add' ?true:false;
	
	$scope.operate = $stateParams.operate;
	
	$scope.savePost = function(post){
		if($scope.operate=='add')
		{
		  $scope.addPost(post);
		  
		}else if($scope.operate=='edit'){
			
			$scope.updatePost(post);
		}
	}
	
	$scope.addPost=function(post){
		PostService.insertPost(post,sucesscb,errorcb);
		function sucesscb(data)
		{
			console.log(data);
			$state.go('main.list.post.list');
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
}]);