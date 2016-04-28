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
				  cellTemplate: '<div>&nbsp;&nbsp<a ng-click="updateOrganization({id:row.getProperty(col.field)})">修改</a>'+
				  '&nbsp;&nbsp<a ng-click="displayOrganization({id:row.getProperty(col.field)})" >查看</a>'+
				  '&nbsp;&nbsp<a ng-click="deleteOrganization({id:row.getProperty(col.field)})" >删除</a></div>'
			         	
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
	
	//通过名称查找组织结构
	$scope.searchOrgaByName=function(){
		var name = $scope.name;
		if($scope.name){
			OrganizationService.searchOrgaByName(name);
		}
	}
	//刷新表格
	$scope.refreshGrid = function(){
		alert('刷新表格');
	}
}]);



