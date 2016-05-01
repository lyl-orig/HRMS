angular.module('permissionAssignmentEmployeeModule', [])
.controller('permissionAssignmentListController',['$rootScope','$scope','$state','$stateParams','DepartmentService','PermissionService','EmployeeService',
function($rootScope,$scope,$state,$stateParams,DepartmentService,PermissionService,EmployeeService){
	
	 
	   DepartmentService.getAllDepartments(sucesscb,errorcb);
	 
	   function sucesscb(data)
		{
		    $scope.department=data;
		    
		    EmployeeService.getEmployee(sucesscb,errorcb);
		    function sucesscb(data){
		    	
		    	$scope.employees=data;
		    }
		    function errorcb()
			{
				alert('获取列表失败!');
			}	
		
		}
		function errorcb()
		{
			alert('获取列表失败!');
		}	
	
	 var permissionId = $stateParams.permissionId;
	
	$scope.gridOptions = {
			data:'employees',
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
				 displayName : '姓名',
				 width:150,
				 enableCellEdit: true,
			  },
			  {
				  field: 'EId',
				  displayName: '操作',
				  enableCellEdit: false,
				  sortable: false,
				  pinnable: false,
				  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="assignmentPermission(row.getProperty(col.field))">分配</a></div>'
			         	
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
	
	
	$scope.assignmentPermission=function(empoyeeId){
			
	}
	
	$scope.searchEmployee=function(){
		
		if($scope.departmentId && $scope.name){
			
			EmployeeService.getEmployeeByDepartmentIdAndName($scope.departmentId,$scope.name,sucesscb,errorcb);
    		function sucesscb(data){
    			$scope.employees=JSON.parse(data.employee);
			}
			function errorcb (){
				
			}
    	}else if($scope.departmentId){
    		
    		EmployeeService.getEmployeeByDepartmentId($scope.departmentId,sucesscb,errorcb);		
    		function sucesscb(data){
    			$scope.employees=JSON.parse(data.employee);
			
			}
			function errorcb (){
				alert("加载失败");
			}
    	}else if($scope.name){
    		EmployeeService.getEmployeeByName($scope.name,sucesscb,errorcb);
    		
    		function sucesscb(data){
    			$scope.employees=JSON.parse(data.employee);
			}
			function errorcb (){
				alert("加载失败");
			}
    	}else{
    		$scope.refreshGrid();
    	}
	}
	$scope.deletePermission=function(permissionId){

		PermissionService.deletePermission(permissionId,sucesscb,errorcb);
		function sucesscb(data)
		{
			$scope.refreshGrid();
		}
		function errorcb()
		{
			alert('失败!');
		}	
	}
	$scope.deletePermissions=function(){
		
		var orgs =$scope.gridOptions.selectedItems;
    	for(var i=0;i<orgs.length;i++)
    	{
    		$scope.deletePermission(orgs[i].EId);
    	}
	}
	$scope.lookEmployee=function(permissionId){
		
		$state.go('main.list.permission.employee',{permissionId:permissionId});
	
	}
	//刷新表格
	$scope.refreshGrid = function(){
		 DepartmentService.getAllDepartments(sucesscb,errorcb);
		 
		   function sucesscb(data)
			{
			    $scope.department=data;
			    
			    EmployeeService.getEmployee(sucesscb,errorcb);
			    function sucesscb(data){
			    	
			    	$scope.employees=data;
			    }
			    function errorcb()
				{
					alert('获取列表失败!');
				}	
			
			}
			function errorcb()
			{
				alert('获取列表失败!');
			}	
	}
}]);



