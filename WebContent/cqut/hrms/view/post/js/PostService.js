var postApp = angular.module('postApp', []);

postApp.factory('PostService',['$resource',function($resource){
	
	var postService=$resource('/Post/:action', {});
	
	postService.insertPost=function(post,sucesscb,errorcb){
		
		postService.save({action:'insertPost'},post,sucesscb,errorcb);
	};
	
	postService.getAllPosts = function(sucesscb,errorcb){
		
		postService.query({action:'getAllPosts'},sucesscb,errorcb);
	}
	return 	postService;
}]);