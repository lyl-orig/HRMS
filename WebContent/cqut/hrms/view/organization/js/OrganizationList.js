angular.module('organizationModule', [])
.controller('organizationListController',['$rootScope','$scope','$state','$stateParams','OrganizationService',
function($rootScope,$scope,$state,$stateParams,OrganizationService){
	
	$scope.organizations={};
	 
	$scope.loadGrid=function(){
		
		 OrganizationService.getOrganizations();
		 
		 function sucesscb(data)
			{
			    //alert(data);
			    $scope.organizations=data;
			    
				console.log($scope.organizations);
				//$state.go('main.list.organization.list');
			}
			function errorcb()
			{
				alert('获取机构列表失败!');
			}		
	}

	$scope.loadGrid();
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
				 field : 'Id',
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
				  field: 'Id',
				  displayName: '操作',
				  enableCellEdit: false,
				  sortable: false,
				  pinnable: false,
				  cellTemplate: '<div><a ui-sref="main.list.organization.form({oprate:"edit",id:row.getProperty(col.field)})">修改</a>'+
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
	
	$scope.loadGrid();
	
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



