angular.module('permissionEmployeeModule', [])
.controller('permissionEmployeeListController',['$rootScope','$scope','$state','$stateParams','PermissionService','EmployeeService',
function($rootScope,$scope,$state,$stateParams,PermissionService,EmployeeService){
	
	 var permissionId = $stateParams.permissionId;
	
	 EmployeeService.getEmployeeByPermissionId(permissionId,sucesscb,errorcb);
	 
	 function sucesscb(data)
		{
		    $scope.employees=JSON.parse(data.employee);
		}
		function errorcb()
		{
			alert('获取机构列表失败!');
		}	
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
				  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updatePermission(row.getProperty(col.field))">修改</a>'+
				  '&nbsp;&nbsp<a ng-click="displayPermission(row.getProperty(col.field))" >查看</a>'+
				  '&nbsp;&nbsp<a ng-click="deletePermission(row.getProperty(col.field))" >删除</a>'+
				  '&nbsp;&nbsp<a ng-click="lookEmployee(row.getProperty(col.field))" >查看权限人员</a></div>'
			         	
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
	
	$scope.insertPermission = function()
  	{
  		$state.go('main.list.permission.form',{operate:'add'});
  	}
	
	$scope.displayPermission=function(permissionId){
		
		$state.go('main.list.permission.display',{permissionId:permissionId});
	}
	
	$scope.updatePermission=function(permissionId){
		
		$state.go('main.list.permission.form',{operate:'edit',permissionId:permissionId});
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
	/*//通过名称查找组织结构
	$scope.searchByName=function(){
		var name = $scope.name;
		if($scope.name){
			PermissionService.getPermissionByName(name,sucesscb,errorcb);
			function sucesscb(data)
			{
			    $scope.permissions=data;
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}	
		}
	}*/
	$scope.returnList = function(){
		$state.go('main.list.permission.list');
	}
	//刷新表格
	$scope.refreshGrid = function(){
		PermissionService.getAllPermissions(sucesscb,errorcb);
		 
		 function sucesscb(data)
			{
			    $scope.permissions=data;
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}	
	}
}]);



