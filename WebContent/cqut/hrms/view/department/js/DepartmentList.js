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
				selectedItems:[],
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
					  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateDepartment(row.getProperty(col.field))">修改</a>'+
					  '&nbsp;&nbsp<a ng-click="displayDepartment(row.getProperty(col.field))" >查看</a>'+
					  '&nbsp;&nbsp<a ng-click="deleteDepartment(row.getProperty(col.field))" >删除</a></div>'
				         	
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
		 
	   $scope.displayDepartment=function(departmentId){
		  
		  $state.go('main.list.department.display',{departmentId:departmentId});
	   }
	   
	   $scope.updateDepartment=function(departmentId){
		   
		   $state.go('main.list.department.form',{operate:'edit',departmentId:departmentId});
	   }
	   
	   $scope.deleteDepartment=function(departmentId){
		   
		   DepartmentService.deleteDepartment(departmentId,sucesscb,errorcb);
		   function sucesscb(data)
			{
			   $scope.refreshGrid();
			}
			function errorcb()
			{
				alert('失败!');
			}
	   }
	   
	   $scope.deleteDepartments=function(){
		    var items =$scope.gridOptions.selectedItems;
	    	for(var i=0;i<items.length;i++)
	    	{
	    		$scope.deleteDepartment(items[i].EId);
	    	}
	   }
	   $scope.searchDepartment=function(){
		   
		   if($scope.organizationId && $scope.name){
			   alert($scope.organizationId + $scope.name);
			   DepartmentService.getDepartmentByOrgIdAndName($scope.organizationId,$scope.name,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.departments=JSON.parse(data.departments);
				}
				function errorcb (){
					
				}
		   }else if($scope.organizationId){
			   DepartmentService.getDepartmentByOrgId($scope.organizationId,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.departments=JSON.parse(data.departments);
				}
				function errorcb (){
					
				}
		   }else if($scope.name){
			   DepartmentService.getDepartmentByName($scope.name,sucesscb,errorcb);
	    		function sucesscb(data){
	    			$scope.departments=JSON.parse(data.departments);
				}
				function errorcb (){
					
				}
		   }else{
			   $scope.refreshGrid();
		   }
	   }
	    //新增部门
	   $scope.insertDepartment = function(){	    	
	    	$state.go('main.list.department.form',{operate:'add'});
	   }
	   
	   $scope.refreshGrid=function(){
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
	   }
}]);