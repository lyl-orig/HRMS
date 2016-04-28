angular.module('departmentModule', [])
.controller('departmentListController',['$rootScope','$scope','$state','$stateParams','DepartmentService','OrganizationService',
       function($rootScope,$scope,$state,$stateParams,DepartmentService,OrganizationService){
	 	
		//加载全部部门
		DepartmentService.getAllDepartments(sucesscb,errorcb);
		function sucesscb(data)
		{
		    $scope.departments=data;
		    //加载全部组织机构
		    OrganizationService.getOrganizations(sucesscb,errorcb);
			 
			function sucesscb(data)
			{
			    $scope.organization=data;		
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}
		}
		function errorcb()
		{
			alert('获取机构列表失败!');
		}	
		$scope.gridOptions = {
				data:'departments',
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
					 field : 'EId',
					 displayName : 'ID',
					 width:150,
					 enableCellEdit: true,
					 visible:false
				},
				  {
					 field : 'name',
					 displayName : '部门名称',
					 width:150,
					 enableCellEdit: true,
				  },{
					  field : 'code',
					  displayName : '编码',
					  width:150,
					  enableCellEdit: true
				  },
				  {
					  field: 'EId',
					  displayName: '操作',
					  enableCellEdit: false,
					  sortable: false,
					  pinnable: false,
					  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateDepartment({id:row.getProperty(col.field)})">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayDepartment({id:row.getProperty(col.field)})" >查看</a>'+
					  '&nbsp;&nbsp<a ng-click="deleteDepartment({id:row.getProperty(col.field)})" >删除</a></div>'
				         	
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
	    $scope.insertDepartment = function(){	    	
	    	$state.go('main.list.department.form',{operate:'add'});
	    }
}]);