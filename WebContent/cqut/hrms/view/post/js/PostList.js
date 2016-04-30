angular.module('postModule', [])
.controller('postListController',['$rootScope','$scope','$state','$stateParams','DepartmentService','PostService',
       function($rootScope,$scope,$state,$stateParams,DepartmentService,PostService){
	   
	  //加载全部部门
     
		PostService.getAllPosts(sucesscb,errorcb);
		function sucesscb(data)
		{
		      $scope.posts=data;
		      DepartmentService.getAllDepartments(sucesscb,errorcb);
			 
			  function sucesscb(data)
				{
				    $scope.department=data;
				}
				function errorcb()
				{
					alert('获取部门失败!');
				}	
		}
		function errorcb()
		{
			alert('表格初始化失败!');
		}	
		
		$scope.gridOptions = {
				data:'posts',
				rowTemplate: '<div style="height: 100%"><div ng-style="{ \'cursor\': row.cursor }" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell ">' +
				'<div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }"> </div>' +
				'<div ng-cell></div>' +
				'</div></div>',
				multiSelect: true,
				enableCellSelection: true,
				enableRowSelection: true,
				enableCellEdit: true,
				enablePinning: true,
				showSelectionCheckbox:true,
				selectedItems:[],
				columnDefs:[
				  {
					 field : 'EId',
					 displayName : 'EID',
					 width:150,
					 enableCellEdit: true,
					 visible:false
				},
				  {
					 field : 'name',
					 displayName : '岗位名称',
					 width:150,
					 enableCellEdit: true,
				  },{
					  field : 'code',
					  displayName : '岗位编码',
					  width:150,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updatePost(row.getProperty(col.field))">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayPost(row.getProperty(col.field))" >查看</a>'+
					  '&nbsp;&nbsp<a ng-click="deletePost(row.getProperty(col.field))" >删除</a></div>'
				  }],
				    enablePaging: true,
			        showFooter: true,
			        pagingOptions:
			        { 
			        	pageSizes: [10, 20, 50], 
			        	pageSize: 10,
			        	totalServerItems: 0,
			        	currentPage: 1 },
			      i18n:'zh-cn'
			};
		$scope.displayPost=function(postId){
			//alert(postId);
			$state.go('main.list.post.display',{postId:postId});
		}
		$scope.updatePost=function(postId){
			
			$state.go('main.list.post.form',{operate:'edit',postId:postId});
		}
		$scope.deletePost=function(postId){
			
			  PostService.deletePost(postId,sucesscb,errorcb);
			 
			  function sucesscb(data)
				{
				  $scope.refreshGrid();
				}
				function errorcb()
				{
					alert('获取部门失败!');
				}	
		}
		
		$scope.deletePosts=function(){
			var items =$scope.gridOptions.selectedItems;
	    	for(var i=0;i<items.length;i++)
	    	{
	    		$scope.deletePost(items[i].EId);
	    	}
		}
		
		$scope.searchPost = function(){
			if($scope.departmentId && $scope.name){
				
				PostService.getPostByDepartmentIdAndName($scope.departmentId,$scope.name,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.posts=JSON.parse(data.posts);
				}
				function errorcb (){
					
				}
			}else if($scope.departmentId){
				
				PostService.getPostByDepartmentId($scope.departmentId,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.posts=JSON.parse(data.posts);
				}
				function errorcb (){
					
				}
			}else if($scope.name){
				
				PostService.getPostByName($scope.name,sucesscb,errorcb);
				
	    		function sucesscb(data){
	    			$scope.posts=JSON.parse(data.posts);
				}
				function errorcb (){
					
				}
			}else{
				$scope.refreshGrid();
			}
		}
		$scope.refreshGrid=function(){
			PostService.getAllPosts(sucesscb,errorcb);
			function sucesscb(data)
			{
			      $scope.posts=data;
			      DepartmentService.getAllDepartments(sucesscb,errorcb);
				 
				  function sucesscb(data)
					{
					    $scope.department=data;
					}
					function errorcb()
					{
						alert('获取部门失败!');
					}	
			}
			function errorcb()
			{
				alert('表格初始化失败!');
			}	
			
		}
	
	    //新增部门
	    $scope.insertPost = function(){	    	
	    	$state.go('main.list.post.form',{operate:'add'});
	    }
}]);