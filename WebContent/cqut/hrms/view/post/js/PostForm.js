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
	$scope.getInitData = function(){
		if($scope.operate=='edit'){
			$scope.getDetail();
		}
	}
	$scope.getDetail=function(){
		
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
			if(data.insert){
				$state.go('main.list.post.list');
			}else{
				alert('添加失败!');
			}
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.updatePost=function(post){
		
		PostService.updatePost(post,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.update){
				$state.go('main.list.post.list');
			}else{
				alert('更新失败!');
			}
			
		}
		function errorcb()
		{
			alert('添加失败!');
		}
	}
	$scope.saveAndAddPost=function(post){
		
		PostService.insertPost(post,sucesscb,errorcb);
		function sucesscb(data)
		{
			if(data.insert){
				$state.go('main.list.post.form',{operate:'add'});
				$scope.post=''
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
		$state.go('main.list.post.list');
	}
}]);