angular.module('organizationModule', [])
.controller('organizationListController',['$rootScope','$scope','$state','$stateParams','OrganizationService',
function($rootScope,$scope,$state,$stateParams,OrganizationService){
	
	 OrganizationService.getOrganizations(sucesscb,errorcb);
	 
	 function sucesscb(data)
		{
		    $scope.organizations=data;
		}
		function errorcb()
		{
			alert('获取机构列表失败!');
		}	
	$scope.gridOptions = {
			data:'organizations',
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
				 displayName : '机构名称',
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
				  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateOrganization(row.getProperty(col.field))">修改</a>'+
				  '&nbsp;&nbsp<a ng-click="displayOrganization(row.getProperty(col.field))" >查看</a>'+
				  '&nbsp;&nbsp<a ng-click="deleteOrganization(row.getProperty(col.field))" >删除</a></div>'
			         	
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
	
	$scope.insertOrganization = function()
  	{
  		$state.go('main.list.organization.form',{operate:'add'});
  	}
	
	$scope.displayOrganization=function(organizationId){
		
		$state.go('main.list.organization.display',{organizationId:organizationId});
	}
	
	$scope.updateOrganization=function(organizationId){
		
		$state.go('main.list.organization.form',{operate:'edit',organizationId:organizationId});
	}
	$scope.deleteOrganization=function(organizationId){
		//alert(organizationId);
		OrganizationService.deleteOrganization(organizationId,sucesscb,errorcb);
		function sucesscb(data)
		{
			$scope.refreshGrid();
		}
		function errorcb()
		{
			alert('失败!');
		}	
	}
	$scope.deleteOrganizations=function(){
		
		var orgs =$scope.gridOptions.selectedItems;
    	for(var i=0;i<orgs.length;i++)
    	{
    		$scope.deleteOrganization(orgs[i].EId);
    	}
	}
	//通过名称查找组织结构
	$scope.searchByName=function(){
		var name = $scope.name;
		if($scope.name){
			OrganizationService.getOrganizationByName(name,sucesscb,errorcb);
			function sucesscb(data)
			{
			    $scope.organizations=data;
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}	
		}
	}
	//刷新表格
	$scope.refreshGrid = function(){
		OrganizationService.getOrganizations(sucesscb,errorcb);
		 
		 function sucesscb(data)
			{
			    $scope.organizations=data;
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}	
	}
}]);



