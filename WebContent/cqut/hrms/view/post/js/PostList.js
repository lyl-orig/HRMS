angular.module('postModule', [])
.controller('postListController',['$rootScope','$scope','$state','$stateParams','DepartmentService','PostService',
       function($rootScope,$scope,$state,$stateParams,DepartmentService,PostService){
	   
	  //加载全部部门
      DepartmentService.getAllDepartments(sucesscb,errorcb);
	 
	  function sucesscb(data)
		{
		    $scope.department=data;
		}
		function errorcb()
		{
			alert('获取部门失败!');
		}	
		PostService.getAllPosts(sucesscb,errorcb);
		function sucesscb(data)
		{
		    $scope.posts=data;
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
				columnDefs:[
				  {
					 field : 'Id',
					 displayName : 'ID',
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
					  field: 'Id',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate: '<div><a ng-click="updatePost({id:row.getProperty(col.field)})">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="deletePost({id:row.getProperty(col.field)})" >删除</a></div>'	         	
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
		
	    //新增部门
	    $scope.insertPost = function(){	    	
	    	$state.go('main.list.post.form',{operate:'add'});
	    }
}]);