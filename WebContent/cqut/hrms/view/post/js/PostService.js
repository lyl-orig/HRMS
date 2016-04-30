var postApp = angular.module('postApp', []);

postApp.factory('PostService',['$resource',function($resource){
	
	var postService=$resource('/Post/:action', {});
	
	postService.insertPost=function(post,sucesscb,errorcb){
		
		postService.save({action:'insertPost'},post,sucesscb,errorcb);
	};
	
	postService.getAllPosts = function(sucesscb,errorcb){
		
		postService.query({action:'getAllPosts'},sucesscb,errorcb);
	}
	
	postService.getPostById=function(postId,sucesscb,errorcb){
		
		postService.save({action:'getPostById'},postId,sucesscb,errorcb);
	}
	
	postService.updatePost = function(post,sucesscb,errorcb){
		
		postService.save({action:'updatePost'},post,sucesscb,errorcb);
		
	};
	
	postService.deletePost =function(postId,sucesscb,errorcb){
		
		postService.save({action:'deletePost'},postId,sucesscb,errorcb);
		
	};
	
	postService.getPostByDepartmentIdAndName=function(departmentId,name,sucesscb,errorcb){
		
		postService.save({action:'getPostByDepartmentIdAndName'},{departmentId:departmentId,name:name},sucesscb,errorcb);
		
	};
	
	postService.getPostByDepartmentId=function(departmentId,sucesscb,errorcb){
		
		postService.save({action:'getPostByDepartmentId'},departmentId,sucesscb,errorcb);
		
	};
	
	postService.getPostByName=function(name,sucesscb,errorcb){
		
		postService.save({action:'getPostByName'},name,sucesscb,errorcb);
		
	};
	
	return 	postService;
}]);